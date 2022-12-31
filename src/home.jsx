import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "./context";


export default function Home () {
        const { allSnickers,
                presentProduct,
                togglePresentProduct,
                popUp,
                count,
                increaseProductCount,
                decreaseProductCount,
                showPopUp,
                hidePopUp,
                addToCart,
                handleNext,
                handlePrev
            } = useContext(AddContext)


    return (
        <section className="relative flex flex-col items-center md:grid md:grid-cols-2 space-y-6 md:space-y-0 md:py-6 md:px-10">

            {popUp && <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-50 space-y-2">
                <button className="self-end">
                    <img src="/icon-close.svg" onClick={hidePopUp} alt=""  />
                </button>
                <img src={presentProduct.img} alt="" className="w-full md:h-[400px] rounded-lg"/>

                <div className="md:flex justify-between hidden space-x-2">
                    {allSnickers.map((item, index) =>  {
                        return (<button key={index} className="h-16 rounded-sm focus:border-4 focus:border-orange-500">
                                    <img key={item.id} onClick={() => togglePresentProduct(index)} src={item.thumbnail} alt="" className="h-full" />
                                </button>)
                    })}
                </div>
            </main>}

            <article className=" rounded-lg w-full relative md:space-y-2 pr-0 md:pr-6">
                <img src={presentProduct.img} onClick={showPopUp} alt="" className="w-full md:h-[400px] rounded-lg"/>

                <div className="md:flex justify-between hidden ">
                    {allSnickers.map((item, index) =>  {
                        return (<button key={index} className="h-16 rounded-sm focus:border-4 focus:border-orange-500">
                                    <img key={item.id} onClick={() => togglePresentProduct(index)} src={item.thumbnail} alt="" className="h-full" />
                                </button>)
                    })}
                </div>


                <button onClick={handlePrev} className="bg-white md:hidden absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 flex justify-center items-center rounded-full">
                    <img src="/icon-previous.svg" alt="" />
                </button>

                <button onClick={handleNext} className="bg-white md:hidden absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 flex justify-center items-center rounded-full">
                    <img src="/icon-next.svg" alt="" />
                </button>
            </article>

            <article className=" rounded-lg  pl-0 md:pl-6 space-y-10">
                <div className=" space-y-1">
                    <h1 className="uppercase font-semibold text-orange-400 tracking-widest text-sm"> sneaker collection</h1>
                    <h1 className="capitalize text-veryDarkBlue text-2xl md:text-4xl font-semibold">fall limited edition sneakers</h1>
                </div>

                    <p className="text-grayishBlue text-sm">This low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outersole, they'll withstand everything the weather can offer.</p>

                <section className="space-y-3 flex flex-col w-full">
                    <div className="flex justify-between">
                        <div className="flex space-x-3 items-center">
                            <h1 className="text-veryDarkBlue text-xl font-bold">$125.00</h1>
                            <h5 className="bg-orange-50 text-sm px-1 rounded-md font-bold">
                                50%
                            </h5>
                        </div>

                        <s className="text-grayishBlue font-semibold ">
                            $250.00
                        </s>
                    </div>

                    <article className="flex flex-col md:flex-row">
                        <div className="bg-lightGrayishBlue flex items-center justify-between py-2 text-orange-500 px-3 rounded-md md:w-1/2 w-full">
                            <button onClick={decreaseProductCount}>
                                <img src="/icon-minus.svg" alt="" />
                            </button>

                            <h1 className="text-veryDarkBlue font-bold">{count}</h1>

                            <button onClick={increaseProductCount}>
                                <img src="/icon-plus.svg" alt="" />
                            </button>
                        </div>

                        <button onClick={addToCart} className="flex space-x-2 justify-center items-center bg-orange-500  py-2 rounded-md text-white md:w-1/2 w-full hover:bg-orange-300">
                            <img src="/icon-cart.svg" alt="" className="" />
                            <h1 className="font-bold">
                            Add to Cart
                            </h1>
                        </button>
                    </article>

                    

                </section>
                
            </article>

        </section>
    )
}