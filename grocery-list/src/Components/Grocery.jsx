import React from "react";
import {v4 as uuid} from "uuid"
import {GroceryInput} from "./GroceryInput"
import {GroceryList} from "./GroceryList"


const Grocery = () => {
  const [data, setData] = React.useState([])

  const handleAdd = (img, name, prize, setImg, setName, setPrize) => {
    const payload ={
      img, 
      name,
      prize,
      status:false,
      id:uuid()
    };
    setData([...data, payload])
   
  }

  const handleDelete = (id) => {
    const deleteData= data.filter((item) => item.id !== id)
    setData(deleteData)

  }

  const handleQuantityinc = (id, val) => {
    const quantity = data.map((item) => 
    item.id === id ? {...item, prize: item.prize*val} : item);
    setData(quantity)
  }

  const handleQuantitydic = (id, val) => {
    const quantity = data.map((item) => 
    item.id === id ? {...item, prize: item.prize/val} : item);
    setData(quantity)
  }

  return (
    <div className="Grocery">
      <GroceryInput handleAdd={handleAdd} />

      <h2>Grocery List</h2>

    <div className="GroceryList">
     
    {data.map((item) =>(
        <GroceryList key={item.id} 
        {...item}
        handleDelete={handleDelete}
        handleQuantityinc={handleQuantityinc} 
        handleQuantitydic={handleQuantitydic} 
         />
      ))}
    </div>
    
    </div>
  )
}

export {Grocery}