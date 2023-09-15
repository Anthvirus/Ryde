import React from "react";
import {Link} from "react-router-dom";

const NavComponents = [
    {
        key: 1,
        to: "/",
        name:"Home"
    },
    {
        key: 2,
        // href: "/blog",
        name:"Blog"
    },
    {
        key: 3,
        // href: "/services",
        name:"Services"
    },
    {
        key: 4,
        // href: "/with_us",
        name:"Drive With Us"
    }
]

function NavbarMobile(props){

    return (
        <div style={props.style} className="absolute left-0 flex-col items-center w-64 bg-white border lg:hidden top-20 h-72 justify-evenly">
            {
                NavComponents.map((NavComponent, index)=>{
                   return <Link to={NavComponent.to} className="flex items-center justify-center w-full h-24 uppercase bg-neutral-800 text-slate-50 hover:bg-neutral-600">{NavComponent.name}</Link>
            })
            }
        </div>
    );
}

export default NavbarMobile;
