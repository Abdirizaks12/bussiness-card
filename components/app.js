import React from "react"
import Info  from "./info.js"
import About  from "./about.js"
import Interest  from "./interest.js"
import Footer from "./footer"
export default function App(){
    return (
        <div className="app">
            <Info/>
            <About />
            <Interest />
            <Footer/>
        </div>
    )
}