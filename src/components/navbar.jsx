import "./navbar.css";

export default function NavBar({ onPageChange }) {
    return (
        <>
            <nav id="navigation">
                <br />
                <button onClick={() => onPageChange(1)}>ABOUT ME</button>
                <button onClick={() => onPageChange(2)}>SKILLSETS</button>
                <button onClick={() => onPageChange(3)}>PORTFOLIO</button>
                <button onClick={() => onPageChange(4)}>CONTACT</button>
                <br />
            </nav>
        </>
    );
}
