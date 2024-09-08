import { useContext } from "react"
import { UserContext } from "./context"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = () => toast("You are signed in!!!")

const schema = yup.object().shape({
  name: yup.string().required("Please fill your name"),
  surname: yup.string().required("Please fill your surname"),
  age: yup.string().required("Please fill your age").matches(/^\d+$/),
  login: yup.string().required("Please fill your login").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  password: yup.string().required("Please fill your password").matches(/^.{8}$/),
}).required()

export const AddUser = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema)
  })

  const { onAdd } = useContext(UserContext)

  const handleAdd = data => {
    console.log(data)
    onAdd(data)
    reset()
    notify()
  }

  return (
    <div>
      <h3>Add User</h3>
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
      {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      
      <form onSubmit={handleSubmit(handleAdd)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("surname")} placeholder="Surname" />
        <input type="number" {...register("age")} placeholder="Age" />
        <input {...register("login")} placeholder="Login" />
        <input type="password" {...register("password")} placeholder="Password" />
        <button>Add</button>
      </form>

      
        <ToastContainer />

    </div>
  )
}
