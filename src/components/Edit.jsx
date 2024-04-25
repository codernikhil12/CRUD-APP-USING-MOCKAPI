import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")


    useEffect(() => {
     setId(localStorage.getItem('id'))
     setName(localStorage.getItem('name'))
     setEmail(localStorage.getItem('email'))
     setAge(localStorage.getItem('age'))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6629578154afcabd07390658.mockapi.io/CRUD/${id}`,{
            e_name: name,
            e_email: email,
            e_age : age,
        }).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error.message);
        })
    }
    

  return (
    <>
    <form action="" onSubmit={handleUpdate} >
        <label htmlFor="title">Name</label>
        <br />
         <h1>Update data</h1>
        <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}  />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email"placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input type="number"placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)}/>
        <br />
        <br />
        <button type='submit' value="update">Update User</button>
        </form>
    </>
  )
}

export default Edit
