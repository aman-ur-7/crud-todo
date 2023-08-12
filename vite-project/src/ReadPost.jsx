import React, { useEffect, useState } from 'react'
import Header from './Components/Header'


const ReadPost = () => {

  const [data , setData] = useState();

  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    const response = await fetch('http://localhost:7000/read')
    const result = await response.json()
    setData(result);
  }

  const deleteData  = async (id)=>{
    const response = await fetch(`http://localhost:7000/${id}`,{
      method:"DELETE"
    });
    const result = await response.json();

    if(response.ok){

      alert('deleted successfully')

      setTimeout(() => {
        getData()
      }, 2000);

    }
  }

  console.log(data);

  return (
    <>
    <Header/>
    <section className='card_items'>
        <div className='read_header'>all data</div>
            {data?.map((ele)=>(
        <div className='card_item' key={ele._id}>
            <div className='card_content'>
            <span>{ele.name}</span>
                <p>{ele.email}</p>
                <p>{ele.age}</p>
            </div>
              <div className='card_link'>
                <a href='#' onClick={()=>deleteData(ele._id)}>delete</a>
                <a href='#'>edit</a>
            </div>
        </div>
            ))}
    </section>
    </>
  )
}

export default ReadPost  ;