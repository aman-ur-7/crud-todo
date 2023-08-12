import React, { useState } from 'react'
import Header from './Components/Header'
import { Navigate, useNavigate } from 'react-router-dom'

const Create = () => {
  
  const [data , setdata] = useState()
  const navigate = useNavigate();

  const userData = (e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value
    })
  }
 


  const submit = async (e)=>{
    e.preventDefault();

    const response = await fetch('http://localhost:7000/create' , {
      method:'POST',
      body:JSON.stringify(data) ,
      headers:{
        'Content-Type':'application/json'
      }
    })
    const responseData = await response.json();
    console.log(responseData)

  }


  return (
    <>
    <Header/>
    <div className="form_container">
      <h1>fill the input's</h1>
    <form onSubmit={submit}>
      <input type="name" name='name' placeholder='name' onChange={userData}/>
      <input type="email" name='email' placeholder='email' onChange={userData}/>
      <input type="number" name='age' placeholder='age' onChange={userData}/>
      <button type='submit'>submit</button>
    </form>
    </div>
    </>
  )
}

export default Create