import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const Create = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [age, setAge] = useState([])
    
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://6629578154afcabd07390658.mockapi.io/CRUD", {
            e_name: name,
            e_age: age,
            e_email: email,
        }) .then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error.message);
        })
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email"placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input type="number"placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/>
        <br />
        <br />
        <button type='submit'>Create User</button>
        </form>
    </>
  )
}

export default Create
