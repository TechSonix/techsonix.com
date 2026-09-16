import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "../styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://techsonix.com"),
  title: {
    default: "TechSonix — Software for a connected world",
    template: "%s | TechSonix",
  },
  description:
    "TechSonix, Inc. builds blockchain applications, web experiences, and connected systems. Publisher of EpixNet.",
  icons: {
    icon: "/images/TechSonix.Icon.png",
    apple: "/images/TechSonix.Icon.png",
  },
  openGraph: { siteName: "TechSonix", type: "website", locale: "en_US" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
