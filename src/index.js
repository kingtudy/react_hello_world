import react from "react"
import reactDOM from "react-dom"

function Main() {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}

function Header() {
    return (
        <header>
            <nav>
                <div className="img-container">
                    <img style={{width: "50px"}} src="./mail-icon.png" />
                </div>
            </nav>
        </header>
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