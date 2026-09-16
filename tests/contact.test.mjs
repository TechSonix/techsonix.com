import test from "node:test";
import assert from "node:assert/strict";
import { sendContact } from "../src/lib/contact.ts";
const payload = {
  email: "example@example.invalid",
  topic: "Data deletion request",
  message: "Local test; never delivered.",
};
test("only explicit provider acceptance counts as success", async () => {
  let request;
  await sendContact(payload, async (url, options) => {
    request = { url, options };
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  });
  assert.equal(
    JSON.parse(request.options.body).subject,
    "TechSonix: Data deletion request",
  );
  assert.ok(request.options.signal instanceof AbortSignal);
});
test("HTTP 200 with a rejected or malformed response is a failure", async () => {
  for (const body of [{ success: false }, {}, null, { success: "true" }])
    await assert.rejects(
      sendContact(
        payload,
        async () => new Response(JSON.stringify(body), { status: 200 }),
      ),
      /Delivery not confirmed/,
    );
});
test("HTTP failures and invalid JSON never report success", async () => {
  await assert.rejects(
    sendContact(
      payload,
      async () =>
        new Response(JSON.stringify({ success: true }), { status: 429 }),
    ),
    /Delivery not confirmed/,
  );
  await assert.rejects(
    sendContact(
      payload,
      async () => new Response("<html>Gateway error</html>", { status: 200 }),
    ),
  );
});
test("connection failures and timeouts propagate so the form retains the message", async () => {
  for (const failure of [
    new TypeError("Offline"),
    new DOMException("Timed out", "TimeoutError"),
  ])
    await assert.rejects(
      sendContact(payload, async () => {
        throw failure;
      }),
    );
});
