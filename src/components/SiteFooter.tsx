export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href="/" className="brand">
              TechSonix<span className="brand-dot">.</span>
            </a>
            <p>Software for a more connected world.</p>
          </div>
          <div className="footer-links">
            <div>
              <span className="eyebrow">Explore</span>
              <a href="/services/">What we do</a>
              <a href="/epixnet/">EpixNet</a>
              <a href="/about/">Company</a>
              <a href="https://github.com/TechSonix">GitHub ↗</a>
            </div>
            <div>
              <span className="eyebrow">Help & information</span>
              <a href="/support/">Contact & support</a>
              <a href="/community/">Community rules & reports</a>
              <a href="/delete-data/">Request data deletion</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TechSonix, Inc.</span>
          <div>
            <a href="/privacy/">Privacy policy</a>
            <a href="/terms/">Terms of use</a>
          </div>
          <span>Built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
