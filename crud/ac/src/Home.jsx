import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Home() {
    const[data,setdata]=useState([]);
    useEffect(()=>{
        axios.get(`https://64f0578e8a8b66ecf7797e2c.mockapi.io/ac`).then((r)=>setdata(r.data))
    },[])
const navigate= useNavigate();
    const handleDelete=(id)=>{
        axios.delete(`https://64f0578e8a8b66ecf7797e2c.mockapi.io/ac/${id}`).then(()=> {alert("Deleted"); location.reload();})
    }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List Data</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex flex-column justify-content-end'>
            <Link to="/create" className='btn btn-success'>  Add +</Link>
        </div>
            <table className='table table-stripend'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e,i)=>(
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.city}</td>
                                <td>
                                <Link to={`/update/${e.id}`} className='btn btn-sm btn-info'>Update</Link> &ensp;
                                <button className='btn btn-sm btn-danger' onClick={()=> handleDelete(e.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default Home