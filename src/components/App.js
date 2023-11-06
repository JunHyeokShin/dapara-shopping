'use client'
import React, { useEffect } from 'react'
import Header from './Header'
import CartSidebbar from './CartSidebbar'
import { useDispatch } from 'react-redux'
import { hideLoading } from '@/redux/slices/cartSlice'

export default function App({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  return (
    <div>
      <div className="mr-32">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebbar />
    </div>
  )
}
