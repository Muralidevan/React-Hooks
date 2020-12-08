import React,{useState} from 'react'

const HookCounterObject = () => {

    const initialValue = {firstName:'',lastName:''}
    //setState in class automatically merges and update objects
    //* -> setState provided in useState Hooks "Doesn't" merges and update objects automatically - 
    // Should be done manually using spread operator 

    const [name,setName]  = useState(initialValue)
    return (
        <div>
            <h1>Hooks with Object</h1>
            <form>
            <label>firstName:</label>
            <input type="text"  value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>

            <label>lastName:</label>
            <input type="text"  value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
             {/* make copy of name object , update the lastname property to name  */}

    <h2>Your FirstName is:{name.firstName}</h2>
    <h2>Your LastName is:{name.lastName}</h2>

    <h3>{JSON.stringify(name)}</h3>
   



            </form>
           
          

        </div>
    )
}

export default HookCounterObject
