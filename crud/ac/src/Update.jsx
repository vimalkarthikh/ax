import {useState,useEffect,React} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';

function Update() {
    //const[data,setdata]=useState([]);
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://64f0578e8a8b66ecf7797e2c.mockapi.io/ac/${id}`) // Replace with your API endpoint
      .then((response) => {
        setVal(response.data); // Assuming the response contains user data
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
       
    },[])
 

    const [val, setVal]=useState({
        name:'',email:'',phone:'',city:''
    });

    //const navigate =useNavigate();
    const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put(`https://64f0578e8a8b66ecf7797e2c.mockapi.io/ac/${id}`,val).then((r)=>{
            navigate('/');

    })
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className='w-75 rounded bg-white border shadow p-4'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <input type='text' name='name' placeholder='Name' className='form-control' value={val.name} 
               onChange={e=> setVal({...val,name :e.target.value})} ></input>
            </div>
            <div className='mb-2'>
                <input type='email' name='email' placeholder='Email' className='form-control' value={val.email} 
                onChange={e=> setVal({...val,email:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <input type='text' name='phone' placeholder='Phone Number' className='form-control' value={val.phone} 
                onChange={e=> setVal({...val,phone:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <input type='text' name='city' placeholder='City' className='form-control' value={val.city} 
                onChange={e=> setVal({...val,city:e.target.value})}></input>
            </div>
            <button className='btn btn-success'>Submit</button> <Link to='/' className='btn btn-danger'> Back</Link>
        </form>
    </div>
    </div>
  )
}

export default Update