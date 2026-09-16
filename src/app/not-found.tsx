export default function NotFound() {
  return (
    <section className="page-hero wrap">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        A different
        <br />
        destination.
      </h1>
      <p className="lede">
        That page isn’t here. Try the homepage or contact us for help.
      </p>
      <div className="button-row">
        <a href="/" className="button">
          Back to TechSonix →
        </a>
        <a href="/support/" className="text-link">
          Contact support
        </a>
      </div>
    </section>
  );
}
