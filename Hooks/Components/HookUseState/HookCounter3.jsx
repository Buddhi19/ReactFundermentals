import React,{useState} from 'react'

function HookCounter3() {

    const [name, setName]= useState({firstName: '',lastName: ''})


  return (
    <form>
        <div>
            <input type="text" value={name.firstName} onChange={e=> setName({ ...name,firstName: e.target.value})}/>
            <input type="text"  value={name.lastName} onChange={e=> setName({ ...name,lastName: e.target.value})} />
            <h1>You are {name.firstName} {name.lastName}</h1>
        </div>
    </form>
  )
}

export default HookCounter3