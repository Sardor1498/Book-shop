import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../static/Input';
import Styles from './Sardor.module.css';
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'


export default function Sardor() {

    const { register, handleSubmit } = useForm({ mode: 'onChange' })

    const onSubmit = data => console.log('Отправлено:', data)
    
    return (
        <div className={Styles.commandDiv + " content"}>
            <h1 className="text-xl font-bold text-center">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    Input.inputs ? Input.inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <p>
                                    <label>{input.label}</label>
                                </p>
                                <p>
                                    <input
                                        name={input.name}
                                        className="p-4 border w-64 max-w-7xl text-xs tracking-widest border-black"
                                        type={input.type}
                                        {...register(`${input.txt}`)}
                                    />
                                </p>
                            </div>
                        )
                    }) : null
                }
                <br />
                <button type="submit" className="mt-4 px-12 py-4 bg-black text-white uppercase">
                    Submit
                </button>
            </form>
        </div>
    )
}