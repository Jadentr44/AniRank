import { signIn } from "next-auth/react"
export default function signin({ }) {
  return (
    <div onClick={()=>{
      signIn("credentials", { username: "admin", password: "12345"})
    }} className="border-2">
      signin
    </div>
  )
}

