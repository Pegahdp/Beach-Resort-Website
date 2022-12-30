import React from 'react'

function SelectCart({bg, title}) {
  return (
    <div className="relative">
    <img className='h-full w-full object-cover' src={bg} alt="/" />
    <div className="absolute top-0 left-0 bg-gray-900/30 w-full h-full">
        <p className="absolute bottom-4 left-4 text-white text-2xl">{title}</p>
    </div>
  </div>
  )
}

export default SelectCart