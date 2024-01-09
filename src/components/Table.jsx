import { Pagination } from "./Pagination"

const tableData = [
  { orderId: 281209, successful: true, transactionID: "131634495747", refundDate: "Today, 08:45 PM", orderAmount: "1,125.00" },
  { orderId: 281208, successful: false, transactionID: "131634495747", refundDate: "Yesterday, 3:00 PM", orderAmount: "1,125.00" },
  { orderId: 281207, successful: true, transactionID: "131634495747", refundDate: "12 Jul 2023, 03:00 PM", orderAmount: "1,125.00" },
  { orderId: 281206, successful: true, transactionID: "131634495747", refundDate: "12 Jul 2023, 03:00 PM", orderAmount: "1,125.00" },
  { orderId: 281205, successful: true, transactionID: "131634495747", refundDate: "12 Jul 2023, 03:00 PM", orderAmount: "1,125.00" },
  { orderId: 281204, successful: true, transactionID: "131634495747", refundDate: "12 Jul 2023, 03:00 PM", orderAmount: "1,125.00" }
]


const TableCardItem = ({ orderId, successful, transactionID, refundDate, orderAmount }) => {
  return (
    <tr className=' border-b'>
      <td className='text-[#146EB4] py-3.5 px-3 text-sm leading-5 font-medium'>#{orderId}</td>
      <td className='text-text py-3.5 px-3 space-x-1.5 text-sm leading-5 font-medium flex items-center'>
        <div className={`w-2.5 h-2.5 ${successful ? "bg-green-600" : "bg-gray-500"} rounded-full`}></div>
        <span className=''>{successful ? "Successful" : "Processing"}</span>
      </td>
      <td className='text-text py-3.5 px-3 text-sm leading-5 font-medium'>{transactionID}</td>
      <td className='text-text py-3.5 px-3 text-sm leading-5 font-medium'>{refundDate}</td>
      <td className='text-text py-3.5 px-3 text-sm leading-5 font-medium text-right'>₹{orderAmount}</td>

    </tr>
  )
}

const Table = () => {
  return (
    <div className="bg-white border border-white  rounded-lg p-3 space-y-3" style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}>

      <section className='flex justify-between'>
        <div className="flex w-fit space-x-2 py-1.5 px-4 items-center border border-[#D9D9D9] rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="grey" className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            className="bg-white outline-none"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2.5 px-3 py-1.5 border rounded border-[#D9D9D9] shadow-sm hover:cursor-pointer">
            <span>Sort</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className='border border-[#D9D9D9] p-2 rounded hover:cursor-pointer'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
      </section>

      <table className=' w-full text-left border-collapse '>
        <tr className="table-headers bg-[#F2F2F2] rounded">
          <th className='text-text py-1.5 px-3 border-[#F2F2F2] text-sm'>Order ID</th>
          <th className='text-text py-1.5 px-3 border-[#F2F2F2] text-sm'>Status</th>
          <th className='text-text py-1.5 px-3 border-[#F2F2F2] text-sm'>Transaction ID</th>
          <th className='text-text py-1.5 px-3 border-[#F2F2F2] text-sm'>Refund date</th>
          <th className="text-text py-1.5 px-3 border-[#F2F2F2] text-sm text-right">Order amount</th>
        </tr>
        {tableData.map(({ orderId, successful, transactionID, refundDate, orderAmount }) => (
          <TableCardItem key={orderId} orderId={281209} successful={successful} transactionID={transactionID} refundDate={refundDate} orderAmount={orderAmount} />
        ))}
      </table>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  )
}

export default Table