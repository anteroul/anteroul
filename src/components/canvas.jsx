import "./styles/content.css";

export default function CanvasContext({ title, content }) {
  return (
    <div className="content-window">
      {/* Title Bar */}
      <div className="title-bar">
        <span className="title-text">{title}</span>
        <div className="title-buttons">
          <button>_</button>
          <button>▭</button>
          <button>✕</button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="menu-bar">
        <button>Contents</button>
        <button>Index</button>
        <button>Search</button>
        <button>Web Help</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <canvas width="600" height="380"></canvas>
      </div>
    </div>
  );
}
