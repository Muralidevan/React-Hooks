import React,{useState} from 'react'

const HookCounterArray = () => {

    const [items,setItems] = useState([])

    const addItem = ()=>{

        //Make a copy items object and append another object
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <h1>Hooks with Array of objects</h1>
            <button onClick={addItem}>Add a Number</button>
            {console.log(items)}
            <ul>
                {items.map((item)=>{
                            return(
                            <li key={item.id}>{item.value}</li>
                            )
                })}
            </ul>
        </div>
    )
}

export default HookCounterArray
