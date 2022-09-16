import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHooks = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control m-2"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control m-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="text"
                className="form-control m-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button className="btn btn-primary m-2" onClick={onResetForm}>Reset</button>

            {
                (password === 'salitomeyo' ) && <Message />
            }
        </>
    )
}
