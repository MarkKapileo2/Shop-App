'use client'
import { dummyProducts } from '@/public/data'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const useAppContext = ()=> {
    return useContext(AppContext)
}

function AppContextProvider (prop) {
    const [products, setProducts] = useState([])
    const [isSeller, setIsSeller] = useState(false)
    const router = useRouter()
    const currency = process.env.NEXT_PUBLIC_CURRENCY || "$"

    const getProducts = ()=>{
        setProducts(dummyProducts)
    }

    useEffect(()=>{
        getProducts()
    }, [])

    const value = {
        products,
        isSeller,
        setIsSeller,
        currency

    }

  return (
    <AppContext.Provider value={value}>{prop.children}</AppContext.Provider>
  )
}

export default AppContextProvider