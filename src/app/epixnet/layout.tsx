import type { Metadata } from "next";
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  description:
    "EpixNet information, policies, and support from its publisher, TechSonix, Inc.",
};
export default function EpixNetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="product-nav" aria-label="EpixNet information">
        <div className="wrap">
          <a href="/epixnet/" className="product-nav-title">
            EpixNet
          </a>
          <a href="/epixnet/privacy/">Privacy</a>
          <a href="/epixnet/terms/">Terms</a>
          <a href="/epixnet/support/">Support</a>
          <a href="/epixnet/community/">Report content</a>
          <a href="/epixnet/delete-data/">Data deletion</a>
        </div>
      </nav>
      {children}
    </>
  );
}
