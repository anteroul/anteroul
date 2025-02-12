import "./styles/content.css";

const Sidebar = ({ toggle }) => {
  if (!toggle) return null;
  return (
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
        <li><a href="https://valiantinteractive.itch.io/">📂 Game Development</a></li>
      </ul>
    </div>
  )
};

export default function PageContent({ title, content, toggleSidebar, onPageChange }) {
  return (
    <div className="content-window">
      {/* Title Bar */}
      <div className="title-bar">
        <span className="title-text">{title}</span>
        <div className="title-buttons">
          <button onClick={() => onPageChange(0)}>X</button>
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
        <Sidebar toggle={toggleSidebar}></Sidebar>
        {/* Main Display Area */}
        <div
          className="content-area"
          style={{
            width: toggleSidebar ? "60%" : "100%", // Dynamically toggle width
            transition: "width 0.3s ease", // Smooth transition
          }}>{content}
        </div>
      </div>
    </div>
  )
}
