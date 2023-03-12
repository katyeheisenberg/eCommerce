import React from 'react'
import { useSelector } from 'react-redux'

import TableRow from './table-row'

const Table = ({ data }) => {
  const { sort, sortType } = useSelector((s) => s.settings)
  const sortProductsList = (arrayOfProducts, type, direction) => {
    switch (type) {
      case 'name': {
        arrayOfProducts.sort((a, b) => {
          if (direction) {
            return a.title.localeCompare(b.title)
          }
          return b.title.localeCompare(a.title)
        })
        break
      }
      case 'price': {
        arrayOfProducts.sort((a, b) => {
          if (direction) {
            return a.price - b.price
          }
          return b.price - a.price
        })
        break
      }
      default:
        return arrayOfProducts
    }
    return arrayOfProducts
  }
  return (
    <table className="m-[60px] h-[50%] bg-white rounded-lg text-blue-400">
      <thead>
        <tr>
          <th className="p-2">#</th>
          <th className="p-2">Image</th>
          <th className="p-2">Title</th>
          <th className="p-2">Price</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody className="m-2">
        {sortProductsList(data, sortType, sort[sortType]).map((prod) => (
          <TableRow key={prod.id} id={prod.id} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
