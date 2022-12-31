import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "./context";

export default function Nav () {


    const { 
        presentProduct,
        cartItem,
        showCart,
        count,
        emptyCart,
        toggleShowCart,
        toggleSideBar
    } = useContext(AddContext)


    return (
        <header className="flex justify-between md:border-b h-20 relative box-border">
            <div className="space-x-7 flex items-center">
                <div className="flex items-end space-x-3">

                    <button onClick={toggleSideBar}>
                        <img src="/icon-menu.svg" alt="" className="md:hidden inline-block" />
                    </button>
                    
                    <img src="/logo.svg" alt="" />
                </div>
                <article className="space-x-4 font-semibold hidden md:inline-block text-grayishBlue">
                    <a href="/" className="hover:text-sky-500">collections</a>
                    <a href="/" className="hover:text-sky-500">men</a>
                    <a href="/" className="hover:text-sky-500">women</a>
                    <a href="/" className="hover:text-sky-500">about</a>
                    <a href="/" className="hover:text-sky-500">contact</a>
                </article>
            </div>

            <div className="space-x-5 flex items-center">
                <button onClick={toggleShowCart} className="relative text-white">
                    <img src="/icon-cart.svg" alt="" />
                    {cartItem.length > 0 && <h1 className="absolute text-xs bg-orange-500 px-1 rounded-lg font-semibold -top-[40%] right-0 ">{count}</h1>}
                </button>
                <img src="/image-avatar.png" alt="" className=" h-12 w-12 rounded-full border border-orange-500" />
            </div>

            {showCart 
            && 
            <section className=" absolute right-0 -bottom-[175%] z-20 shadow-slate-300 shadow-md flex flex-col bg-white rounded-md text-veryDarkBlue md:min-w-[25%] min-w-full">
                <h1 className="border-b font-bold text-sm p-3">
                    Cart
                </h1>
                
                {cartItem.length > 0 ? <div className="">
                    <div className="p-3 flex items-center justify-between space-x-2 text-veryDarkBlue">
                        <img src={presentProduct.thumbnail} alt="" className="h-10 rounded-sm focus:border-4" />
                        
                        <div>
                            <h2 className="text-sm font-semibold">Fall Limited Edition Sneakers</h2>
                            <h3>$125 x {count} = <span className="font-bold">{`$${count * 125}`}</span> </h3> 
                        </div>
                        <button onClick={emptyCart} >
                            <img src="/icon-delete.svg" alt="" className="" />
                        </button>
                    </div>
                    <article className="p-3">
                        <button className="bg-orange-500 py-1 rounded-md text-white w-full">
                            Checkout
                        </button>
                    </article>
                </div>
                :
                <div className="flex justify-center items-center h-24">
                    <h1 className="md:text-sm text-[12px] tracking-tighter md:tracking-normal">
                        Your cart is empty.
                    </h1>
                </div>}
                
                

            </section>}

        </header>
    )
}