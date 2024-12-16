import { useState } from "react";
import NavBar from "./components/navbar.jsx";
import PageContent from "./components/content.jsx";

// Example components to display
function AboutMe() {
    return (
        <PageContent
            title="About Me"
            content={
                <>
                    <p>Welcome to my personal website!</p>
                    <br />
                    <p>
                        My name is Antero. I'm a programmer and a professional nerd. I studied at
                        Metropolia UAS majoring in Game Development. I'm especially experienced in
                        game engine design, low-level programming languages, and graphics APIs and
                        multimedia libraries such as OpenGL, WebGPU, SDL, Raylib, DirectX and
                        Vulkan.
                    </p>
                    <br />
                    <p>
                        My first programming language I learned was ActionScript at the age of 12
                        which was the language used for Flash games.
                    </p>
                </>
            }
        />
    );
}

function Skillsets() {
    return <PageContent title="Portfolio" content={<p>Lorem ipsum.</p>} />;
}

function Portfolio() {
    return <PageContent title="Portfolio" content={<p>Lorem ipsum.</p>} />;
}

function Contact() {
    return <PageContent title="Portfolio" content={<p>Lorem ipsum.</p>} />;
}

export default function App() {
    const [page, setPage] = useState(0);

    // Function to render the page content
    const renderPageContent = () => {
        switch (page) {
            case 0:
                return <AboutMe />;
            case 1:
                return <Skillsets />;
            case 2:
                return <Portfolio />;
            case 3:
                return <Contact />;
            default:
                return;
        }
    };

    return (
        <>
            <h1>Uljas Antero Lindell | Everything Close to the Hardware</h1>
            <NavBar onPageChange={setPage} />
            <br />
            <div id="page-content">{renderPageContent()}</div>
            <p id="footer">© Uljas Antero Lindell 2024</p>
        </>
    );
}
