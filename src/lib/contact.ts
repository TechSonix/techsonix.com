/** Resolve only after the delivery provider explicitly accepts the message. */
export async function sendContact(
  data: Record<string, FormDataEntryValue>,
  fetcher: typeof fetch = fetch,
): Promise<void> {
  const response = await fetcher("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...data,
      subject: `TechSonix: ${data.topic}`,
      from_name: "TechSonix website",
    }),
    signal: AbortSignal.timeout(15000),
  });
  const result = await response.json();
  if (!response.ok || result?.success !== true)
    throw new Error("Delivery not confirmed");
}
