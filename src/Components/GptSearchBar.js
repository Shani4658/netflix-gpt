import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'> 
            <input type='text' className='px-2 py-2 m-2 col-span-9' placeholder='What you would like to watch today ' />
            <button className='px-2 py-2 m-2 bg-red-500 text-slate-200 col-span-3 rounded-lg hover:bg-red-700  font-semibold text-2xl'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;