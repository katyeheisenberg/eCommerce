import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ButtonGroup from './button-group'

const Header = ({ caption }) => {
  const { totalAmount, totalPrice } = useSelector((s) => s.cart)
  const { rates, currencyName } = useSelector((store) => store.settings)
  return (
    <div className="flex justify-between p-3 bg-blue-300 text-white rounded-md">
      <ButtonGroup />
      <Link to="/">
        <div
          className="p-3 rounded-md bg-blue-900/70 flex font-semibold text-gray-200 hover:text-blue-200"
          id="brand-name"
          cursor="pointer"
        >
          {caption}
        </div>
      </Link>
      <Link
        to="/cart"
        className="text-white text-center rounded-md p-2 bg-blue-900/70 font-semibold"
      >
        <div className="hover:text-blue-200">Cart</div>
        <div id="order-count" className="text-center">
          Items: {totalAmount}
        </div>
        <div id="order-price" className="text-center">
          Total Price:{' '}
          {(Number.isNaN(totalPrice * rates[currencyName])
            ? 0
            : totalPrice * rates[currencyName]
          ).toFixed(2)}{' '}
          {currencyName}
        </div>
      </Link>
    </div>
  )
}

export default React.memo(Header)
