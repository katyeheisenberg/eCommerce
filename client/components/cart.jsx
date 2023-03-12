import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import Table from './common/table'

const Cart = () => {
  const { list: productInCart } = useSelector((s) => s.cart)

  return (
    <div className="flex flex-col bg-blue-200/40 h-screen text-white">
      <Head title="cart" />
      <Header caption="Ecommerce" />
      <Table data={Object.values(productInCart)} />
    </div>
  )
}

export default React.memo(Cart)
