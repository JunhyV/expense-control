import React from 'react'

const AsideData = ({budget, setBudget}) => {
  return (
    <aside className="bg-blue-200">
    <div className="grid grid-cols-2">
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        All
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Saves
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Food
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Home
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Various
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Leisure
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Health
      </button>
      <button className="bg-stone-500 hover:bg-stone-700 w-full font-bold text-white p-2">
        Suscription
      </button>
    </div>

    <div className="p-5 grid grid-cols-2 items-center justify-items-center">
      <div className="h-32 w-32 bg-red-500 rounded-full"></div>
      <div className='flex flex-col gap-2'>
        <h2 className="text-blue-500 font-bold text-1xl">
          Budget:{" "}
          <span className="font-normal text-neutral-500">${budget}</span>
        </h2>
        <h2 className="text-blue-500 font-bold text-1xl">
          Available:{" "}
          <span className="font-normal text-neutral-500">${budget}</span>
        </h2>
        <h2 className="text-blue-500 font-bold text-1xl">
          Spent:{" "}
          <span className="font-normal text-neutral-500">$money</span>
        </h2>
        <button className='w-full p-2 bg-red-500 font-bold text-white rounded-md shadow-md' onClick={() => setBudget(0)}>Reset App</button>
      </div>
    </div>
  </aside>
  )
}

export default AsideData