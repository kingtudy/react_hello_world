import react from "react"
import reactDOM from "react-dom"
import "./style.css"
function Main() {
    return (
        <div className="container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <nav className="d-flex justify-content-between navbar-container">
            <div className="navbar-img-container">
                <img className="navbar-img" src="./react-logo.png" />
            </div>
            <ul className="d-flex m-0 align-items-center flex-wrap navbar-elems">
                <a className="p-3 navbar-elem">Pricing</a>
                <a className="p-3 navbar-elem">About</a>
                <a className="p-3 navbar-elem">Contact</a>
            </ul>
        </nav>
    )
}

function Content() {
    return (
        <>
        <h1>Why I'm excited to learn react :)</h1>
        <ol>
            <li>Better job</li>
            <li>More money</li>
            <li>Personal growth</li>
        </ol>
        </>
    )
}

function Footer() {
    return (
        <div>
            <h3>Here is the footer</h3>
            <p>@2023 website</p>
        </div>
    )
}

reactDOM.render(
    <Main />,
    document.getElementById("root")
)