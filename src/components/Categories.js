import React from 'react'

function Categories({handleCategory}) {
  return (
    <div className='btn-container'>
        <button onClick={()=>handleCategory('all')} className='filter-btn'>All</button>
        <button onClick={()=>handleCategory('breakfast')} className='filter-btn'>Breakfast</button>
        <button onClick={()=>handleCategory('lunch')} className='filter-btn'>Lunch</button>
        <button onClick={()=>handleCategory('shakes')} className='filter-btn'>Shakes</button>
        <button onClick={()=>handleCategory('dinner')} className='filter-btn'>Dinner</button>
  </div>
  )
}

export default Categories