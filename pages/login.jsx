import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function login() {
  const router = useRouter();
  const [userName,setName] = useState(null)
  const [emailValue,setEmail] = useState(null)
  const [passValue,setPass] = useState(null)
  const [error,setError] = useState(null)

  async function createAccount(){
    let data ={
      username:userName,
      email:emailValue,
      password:passValue
    }
    try{
      let newUser = await axios.post('api/newUser',data)
      console.log("new user created")
      return
    }catch(error){
      console.log(error)
      if(error.response.status == 409) return setError(error.response.data)
      setError("error making user")
    }
    
    
  }

  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='text-center border-2 border-red-500 w-1/3 h-fit'>
    <h1 className='bg-red-500 text-white text-5xl py-3'>Welcome To MyAniRank</h1>
          <div className='py-2'>
            <h3 className='text text-3xl '>sign up</h3>
            {!error
            ?<p className='mt-4 invisible'>no</p>
          :<p className='mt-4 text-red-600'>{error}</p>}
            <p className=''>Username:</p>
            <input onChange={(e)=>setName(e.target.value)} className='border-2  border-black' type="text" name="" id="" />
            <p>email:</p>
            <input onChange={(e)=>setEmail(e.target.value)} className='border-2 border-black' type="text" name="" id="" />
            <p>password:</p>
            <input onChange={(e)=>setPass(e.target.value)} className='border-2 border-black' type="text" name="" id="" /><br />
            <button onClick={async()=>{await createAccount();router.push("/api/auth/signin")}} className='border-2 text-xl my-4 border-red-500 px-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white'>Create Account</button>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[15%] h-1 bg-red-500'></div>
            <div className='px-1 text-large text-red-500'>OR</div>
            <div className='w-[15%] h-1 bg-red-500'></div>
          </div>
          <div><button onClick={()=>router.push("/api/auth/signin")} className='border-2 text-xl my-4 border-red-500 px-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white'>Login</button></div>
        </div>
    </div>
  )
}
