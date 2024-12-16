import "./content.css";

export default function PageContent({ title, content }) {
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
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li>📄 Graphics Programming</li>
            <li>📄 C/C++</li>
            <li>📄 JavaScript</li>
            <li>📄 .NET Framework</li>
            <li>📄 Go Programming Language</li>
            <li>📄 Networking</li>
            <li>📄 Embedded Systems</li>
            <li>📄 Assembly Language</li>
            <li>📄 Linux</li>
            <li>📂 Game Developement</li>
          </ul>
        </div>

        {/* Main Display Area */}
        <div className="content-area">
          {content}
        </div>
      </div>
    </div>
  );
}
