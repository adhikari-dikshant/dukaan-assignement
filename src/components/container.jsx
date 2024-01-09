// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import OverviewCards from './OverviewCards'

const Container = () => {
  return (
    <div className="grow">
      <Navbar />
      <main className=' p-8 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-text-dark text-xl font-medium'>Overview</h1>
        </div>
        <OverviewCards />
        <h1 className='text-text-dark text-xl font-medium'>Transactions | This Month</h1>
        <div className=' space-x-3'>
          <button
            className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-full"
            type="button"
          >
            Payouts
          </button>
          <button
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Refunds(6)
          </button>
        </div>
        <Table />
      </main>
    </div>
  )
}

export default Container