import { useState } from "react"
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({ description: ' ' })
    const { description } = formState;

    const onSubmitForm = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo && onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input 
                type="text"
                placeholder='Que hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={ onInputChange }
            />
            <button 
                type="submit"
                className='btn btn-outline-primary my-2'
            >
                Agregar
            </button>
        </form>
    )
}

