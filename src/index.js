import React from "react"
import reactDOM from "react-dom"
import "./style.css"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Header from "./components/Header"


function Main() {
    return (
        <div className="container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

reactDOM.render(
    <Main />,
    document.getElementById("root")
)
