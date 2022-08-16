import React from "react"
import {Link, useMatch,useResolvedPath} from "react-router-dom"


export default function Navbar()
{
    return (
        <nav className="navbar">
            <Link to="./Home" className="site-title" >Machili-Codey</Link>
            <ul>
                <li className="active"> <CustomLink to="./Generate">Generate QR code</CustomLink> </li>
                <li className="active"> <CustomLink to="./Scan">Scan QR code</CustomLink> </li>
            </ul>
        </nav>
    )
}

function CustomLink({to, children,...props}) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname,end:true})
    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
            </Link>
            </li>
    )
    
}
