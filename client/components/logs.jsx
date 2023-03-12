import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'

const Logs = () => {
  const { logList } = useSelector((s) => s.log)
  return (
    <div className="flex flex-col bg-blue-200/40 h-full">
      <Head title="Logs" />
      <Header caption="Ecommerce" />
      {logList.map((log) => (
        <div className="m-3 text-center" key={log?.id}>
          {log?.string}
        </div>
      ))}
    </div>
  )
}

export default React.memo(Logs)
