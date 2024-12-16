import "./navbar.css";

export default function NavBar({ onPageChange }) {
    return (
        <>
            <nav id="navigation">
                <br />
                <button onClick={() => onPageChange(0)}>ABOUT ME</button>
                <button onClick={() => onPageChange(1)}>SKILLSETS</button>
                <button onClick={() => onPageChange(2)}>PORTFOLIO</button>
                <button onClick={() => onPageChange(3)}>CONTACT</button>
                <br />
            </nav>
        </>
    );
}
