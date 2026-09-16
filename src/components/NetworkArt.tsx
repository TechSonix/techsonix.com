export default function NetworkArt({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`network-art ${compact ? "compact" : ""}`}
      aria-hidden="true"
    >
      <div className="art-grid" />
      <svg viewBox="0 0 520 420" fill="none">
        <g stroke="currentColor" strokeWidth="1">
          <path d="M260 50 440 154 440 274 260 378 80 274 80 154Z" />
          <path d="m80 154 180 104 180-104M260 258v120M260 50v120L80 274m180-104 180 104" />
          <path
            d="m170 102 180 104v120M350 102 170 206v120M80 214l180 104 180-104"
            opacity=".38"
          />
          <path d="M170 206 260 154l90 52v104l-90 52-90-52Z" opacity=".38" />
        </g>
        <g fill="#f8a52b" stroke="#171b1c" strokeWidth="5">
          {[
            [260, 50],
            [440, 154],
            [440, 274],
            [260, 378],
            [80, 274],
            [80, 154],
            [260, 258],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />
          ))}
        </g>
      </svg>
      <div className="art-caption">
        <span className="status-dot" /> Independent nodes. Shared possibilities.
      </div>
      <span className="art-coordinate">TS / NETWORK SYSTEMS</span>
    </div>
  );
}
