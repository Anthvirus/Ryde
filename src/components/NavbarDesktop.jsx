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
        // to: "/blog",
        name:"Blog"
    },
    {
        key: 3,
        // to: "/services",
        name:"Services"
    },
    {
        key: 4,
        // to: "/with_us",
        name:"Drive With Us"
    }
]

function NavbarDesktop(){
    return (
        <div className="h-full lg:w-[30rem] xl:w-[32.5rem] 2xl:w-[40rem] hidden lg:flex justify-evenly items-center flex-row">
        {
            NavComponents.map((NavComponent, index)=>{
                return (
                    <Link to={NavComponent.to} className="flex items-center justify-center w-full h-24 text-sm uppercase lg:w-full lg:h-full hover:bg-neutral-600 hover:text-neutral-200 text-slate-50">{NavComponent.name}</Link>
                )
            })
        }
        </div>
    );
}

export default NavbarDesktop;