import React from "react"

const GroceryList = ({img, name, prize, id,handleDelete, handleQuantityinc,handleQuantitydic}) => {

  return (
    <div className="List">
      <img alt="" src={img} />
      <h3>{name}</h3>
      <h2>{prize}/-</h2>
      <div>
      <button onClick={() => handleQuantityinc(id, 2)}>Increase</button>
     <button onClick={() => handleQuantitydic(id, 2)}>Decrease</button>
      </div>
     <button onClick={() => handleDelete(id)}>Delete</button>
    
     

    </div>
  )
}

export {GroceryList}