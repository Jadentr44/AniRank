import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function LoginForm() {
  const router = useRouter();
  const [userName,setName] = useState()
  const [emailValue,setEmail] = useState()
  const [passValue,setPass] = useState()
  const [error,setError] = useState(null)

  async function createAccount(){
    let stop = false
    const userChar = 'abcdefghijklmnopqrstuvwxyz1234567890'.toLocaleLowerCase().split("")
    const passChar = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'.split('')
    const reqEmail = ["@","."]
    if(!emailValue || !userName || !passValue){
      return setError("all fields are required")
    }
    for (let i = 0; i < userName.length; i++) {
      if(!userChar.includes(userName[i].toLocaleLowerCase())) return setError("invalid username")
    }
    
      if(!emailValue.includes("@") || !emailValue.includes(".")) return setError("invalid email")
    
    for (let i = 0; i < passValue.length; i++) {
      if(!passChar.includes(passValue[i].toLocaleLowerCase())) return setError("invalid password")
    }
    
    setError("")
    let data ={
      username:userName,
      email:emailValue,
      password:passValue
    }
    try{
      let newUser = await axios.post('api/newUser',data)
      console.log("new user created")
      router.push('/api/auth/signin')
    }catch(error){
      console.log(error)
      if(error.response.status == 409) return setError(error.response.data)
      setError("error making user")
    }
    
    
  }

  return (
    <div style={{backgroundSize :'100% 100%'}} className='bg-no-repeat  bg-[url(https://w0.peakpx.com/wallpaper/557/21/HD-wallpaper-anime-landscape-sakura-blossom-night-petals-scenery-polychromatic-anime.jpg)] h-screen '>
      <div className='h-full backdrop-blur-sm w-full  flex justify-center items-center'>
        <div className=' text-center bg-white border-2 border-red-500 w-1/3 h-fit'>
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
            <button onClick={async()=>{await createAccount()}} className='border-2 text-xl my-4 border-red-500 px-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white'>Create Account</button>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[15%] h-1 bg-red-500'></div>
            <div className='px-1 text-large text-red-500'>OR</div>
            <div className='w-[15%] h-1 bg-red-500'></div>
          </div>
          <div><button onClick={()=>router.push("/api/auth/signin")} className='border-2 text-xl my-4 border-red-500 px-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white'>Login</button></div>
        </div>
        </div>
    </div>
  )
}
