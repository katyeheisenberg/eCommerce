import React from 'react'

import Head from './head'
import Header from './header'
import Products from './products'

const Main = () => {
  return (
    <div className="flex flex-col bg-blue-200/40">
      <Head title="Main" />
      <Header caption="Ecommerce" />
      <Products />
    </div>
  )
}

export default React.memo(Main)
