import { useState } from "react";
import NavBar from "./components/navbar.jsx";
import PageContent from "./components/window.jsx";
import { ImageGrid, WelcomeText, RotatingCube, ContactUs } from "./components/content.jsx";

// Example components to display
function AboutMe({ onPageChange }) {
    return (
        <PageContent
            title="About Me"
            content={<WelcomeText />}
            toggleSidebar={true}
            onPageChange={onPageChange}
        />
    );
}

function Skillsets({ onPageChange }) {
    return (
        <PageContent
            title="My Skills"
            content={<ImageGrid />}
            toggleSidebar={false}
            onPageChange={onPageChange}
        />
    );
}

function Portfolio({ onPageChange }) {
    return (
        <PageContent
            title="Portfolio"
            content={<RotatingCube />}
            toggleSidebar={false}
            onPageChange={onPageChange}
        />
    );
}

function Contact({ onPageChange }) {
    return (
        <PageContent
            title="Portfolio"
            content={<ContactUs />}
            toggleSidebar={true}
            onPageChange={onPageChange}
        />
    );
}

export default function App() {
    const [page, setPage] = useState(0);
    const year = new Date().getFullYear();

    // Function to render the page content
    const renderPageContent = () => {
        switch (page) {
            default: break;
            case 1: return <AboutMe onPageChange={setPage} />;
            case 2: return <Skillsets onPageChange={setPage} />;
            case 3: return <Portfolio onPageChange={setPage} />;
            case 4: return <Contact onPageChange={setPage} />;
        }
    };

    return (
        <>
            <h1>Uljas Antero Lindell | Everything Close to the Hardware</h1>
            <NavBar onPageChange={setPage} />
            <br />
            <div id="page-content">{renderPageContent()}</div>
            <p id="footer">© Uljas Antero Lindell {year}</p>
        </>
    );
}
