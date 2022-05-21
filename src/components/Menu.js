import React from 'react'

function Menu({filteredMenu}) {
  return (
    <div className='item-location'>
        {filteredMenu.map((item)=>{
            return (
                <div key={item.id} className='menu-item'>
                <img className='photo' src={item.img} alt={item.title} />
                <div className='item-header'>
                    <h3 className='title'>{item.title}</h3>
                    <h3>$ {item.price}</h3>
                </div>
                <p>{item.desc}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Menu