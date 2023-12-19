import reactLogo from "../logo.svg"

export default function Header() {
    return (
        <nav className="navbar-container d-flex justify-content-between navbar-container">
            <div className="navbar-img-container">
                <img className="navbar-img" src={reactLogo} />
            </div>
            <ul className="d-flex m-0 align-items-center flex-wrap navbar-elems">
                <a className="p-3 navbar-elem">Pricing</a>
                <a className="p-3 navbar-elem">About</a>
                <a className="p-3 navbar-elem">Contact</a>
            </ul>
        </nav>
    )
}
