import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Create() {
    const {setData}=useParams();
    const [val, setVal]=useState({
        name:'',email:'',phone:'',website:''
    });
    const navigate =useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`,val).then((r)=>{
           setData(r.data);navigate('/');

    })
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className='w-75 rounded bg-white border shadow p-4'>
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <input type='text' name='name' placeholder='Name' className='form-control' onChange={e=> setVal({...val,name:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <input type='email' name='email' placeholder='Email' className='form-control' onChange={e=> setVal({...val,email:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <input type='text' name='phone' placeholder='Phone Number' className='form-control' onChange={e=> setVal({...val,phone:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <input type='text' name='website' placeholder='Website' className='form-control' onChange={e=> setVal({...val,city:e.target.value})}></input>
            </div>
            <button className='btn btn-success'>Submit</button> <Link to='/' className='btn btn-danger'> Back</Link>
        </form>
    </div>
    </div>
  )
}

export default Create