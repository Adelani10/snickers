import React from "react";
import { useState } from "react";
import { data } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [allSnickers, setAllSnickers ] = useState(data)
    const [number, setNumber] = useState(0)
    const [popUp, setPopUp] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [isSideBarShown, setIsSideBarShown] = useState(false)
    const [count, setCount] = useState(1)
    const [cartItem, setCartItem] = useState([])
    const [checkout, setCheckout] = useState('Checkout')



    const presentProduct = allSnickers[number]


    function showPopUp () {
        setPopUp(true)
        setShowCart(false)
    }

    function hidePopUp () {
        setPopUp(false)
    }

    function handleNext () {
        setNumber(prev => prev + 1)
        if (number > 2){
            setNumber(0)
        }
    }

    function handlePrev () {
        setNumber(prev => prev - 1)

        if (number < 1){
            setNumber(3)
        }
    }

    function togglePresentProduct (indexNumber) {
        setNumber(indexNumber)
    }

    function increaseProductCount () {
        setCount(prev => prev + 1)
    }

    function decreaseProductCount () {
        setCount(prev => {
             if (prev === 1){
                return 1
            }
            return prev - 1
        })
    }

    function addToCart () {
        setCartItem([...cartItem, presentProduct])
    }

    function toggleShowCart () {
        setShowCart(!showCart)
    }

    function emptyCart () {
        setCount(1)
        setCartItem([])
    }

    function toggleSideBar () {
        setIsSideBarShown(!isSideBarShown)
    }

    function handleCheckout () {
        setCheckout('Checking Out...')

        setTimeout(() => {
            setCount(1)
            setNumber(0)
            setCartItem([])
            setCheckout('Checkout')
        }, 6000)

        setTimeout(() => setCheckout('Completed!'), 3000)
    }

    return (
        <AddContext.Provider value=
            {{
                allSnickers,
                presentProduct,
                togglePresentProduct,
                handleNext,
                handlePrev,
                popUp,
                showPopUp,
                hidePopUp,
                increaseProductCount,
                count,
                decreaseProductCount,
                cartItem,
                addToCart,
                showCart,
                toggleShowCart,
                emptyCart,
                isSideBarShown,
                toggleSideBar,
                checkout,
                handleCheckout
            }}
        >
                {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}