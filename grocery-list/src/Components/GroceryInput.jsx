import React from "react"

const GroceryInput = ({handleAdd}) => {
  const [img, setImg] = React.useState("")
  const [name, setName] = React.useState("")
  const [prize, setPrize] = React.useState("")
 

  return (
    <div className="GroceryInput">
      <h2>Grocery Input</h2>

      <div className="Input">
      <input type="text" placeholder="Add Grocery Img" 
        onChange={(e) => setImg(e.target.value)}
      />
      
      <input type="text" placeholder="Add Grocery Name" 
        onChange={(e) => setName(e.target.value)}
      />

      <input type="text" placeholder="Add Grocery price" 
        onChange={(e) => setPrize(e.target.value)}
      />

    

      <button onClick={() => handleAdd(img, name, prize, setImg, setName, setPrize)}>ADD</button>

      </div>
   


    </div>
  )
}

export {GroceryInput}