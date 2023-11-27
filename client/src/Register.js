import {useState} from 'react'
import { Navigate } from 'react-router-dom';

export default function Register() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [gender , setGender] = useState('');
    const [msg , setMsg] = useState('');


    async function register(ev){
        ev.preventDefault();
        try{

            const response =  await fetch('http://localhost:4000/register',{
             method: 'POST',
             body: JSON.stringify({name,email,gender,msg}),
             headers:{
                 'Content-type':'application/json',
                 
             },
             credentials:'include'
            });
            console.log(response)
            alert('Submitted')
           
        }
        catch(ev){
            console.log(ev);
        }



    }
  


  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(ev)=> setName(ev.target.value)} />
      <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={(ev)=> setEmail(ev.target.value)}  />
      <input type="gender" name="gender" placeholder="Enter Your Gender" value={gender} onChange={(ev)=> setGender(ev.target.value)} />
      <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter the message"  value={msg} onChange={(ev)=> setMsg(ev.target.value)} />
      <button>Register</button>
    </form>
  )
}
