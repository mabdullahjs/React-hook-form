import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import Custominput from './Custominput'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
    email: yup.string().required(),
    age: yup.number().required(),
})
    .required()


const Form = () => {

    const inputRef = useRef()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const getValues = (values) => {
        console.log(values);
    }
    return (
        <>
            <h1>Register form</h1>
            <form onSubmit={handleSubmit(getValues)}>
                <input type="text" placeholder='email' {...register('email', { required: true, maxLength: 20 })} />
                {/* {errors.email && errors.email.type === "required" ? (
                    <p role="alert">Email is required</p>
                ) : null} */}
                <p>{errors.email?.message}</p>
                <br /><br />
                <input type="password" placeholder='password' {...register('password', { required: true })} />
                {errors.password && errors.password.type === "required" ? (
                    <p role="alert">Password is required</p>
                ) : null}
                <br /><br />
                <input type="number" placeholder='age' {...register('age', { required: true })} />
                {errors.age && errors.age.type === "required" ? (
                    <p role="alert">age is required</p>
                ) : null}
                <br /><br />
                <select {...register('gender', { required: true })}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && errors.gender.type === "required" ? (
                    <p role="alert">gender is required</p>
                ) : null}
                <br /><br />
                {/* <Custominput label="firstname" register={register} required /><br /><br /> */}
                <button type='submit'>Register</button>
            </form>


            <form onSubmit={() => console.log(inputRef.current.value)}>
                <input type="text" required ref={inputRef} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default Form