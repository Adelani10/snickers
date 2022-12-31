import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "./context";


export default function Sidebar () {

    const { allSnickers,
        toggleSideBar,
        isSideBarShown
    } = useContext(AddContext)


    return (
        <section className={`${ isSideBarShown ? "translate-x-0" : "translate-x-[-100%]"} w-4/5 z-30 absolute flex md:hidden flex-col top-0 bottom-0 left-0 py-6 space-y-16 px-6 ease-in-out duration-700 bg-white`}>
            <button onClick={toggleSideBar} className=" w-8 text-orange-500">
                <img src="/icon-close.svg" alt="" className="w-full "  />
            </button>

            <article className="space-y-4 flex flex-col font-semibold text-xl text-grayishBlue">
                <a href="/" className="hover:text-sky-500">collections</a>
                <a href="/" className="hover:text-sky-500">men</a>
                <a href="/" className="hover:text-sky-500">women</a>
                <a href="/" className="hover:text-sky-500">about</a>
                <a href="/" className="hover:text-sky-500">contact</a>
            </article>
        </section>
    )
}