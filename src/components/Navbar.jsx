function Navbar() {
    return(
        <nav className="navbar">
            <h2 className="logo">Mohammed M S</h2>

            <ul className="nav-links">
                <li><a className="nav-link" href="#home">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#skills">Skills</a></li>
                <li><a className="nav-link" href="#projects">Projects</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;