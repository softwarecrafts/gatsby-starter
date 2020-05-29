import React from "react"

import './layout.css'



const Layout = (props) => {
    return (
        <>
            <header className="font-serif text-3xl">This is my starter</header>
            <main>{props.children}</main>
            <footer></footer>
        </>
    )
}


export default Layout
