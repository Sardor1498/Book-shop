import { React, useForm } from 'react-hook-form';
import Styles from './Sirojiddin.module.css'

function Sirojiddin() {

    const {
        register,
        handleSubmit,
        watch,
    } = useForm({ mode: 'onChange' });

    const onsubmit = data => console.log('Отправлено:', data);

    const email = watch('email');
    const password = watch('password');
    console.log('Имя: ' + email);
    console.log('возраст: ' + password);

    return (
        <div className={Styles.center + " content"}>
            <div className="border-2 border-gray-200 h-5/6 w-72 rounded-xl bg-gray-300 shadow-2xl"> 
                <div className="my-10">
                    <h1 className="text-xl font-bold">Registration</h1>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <h1 className="font-serif">email</h1>
                        <input
                            className="h-10 w-60 rounded-xl shadow-2xl p-2"
                            {...register('email')}
                        />
                        <h1 className="font-serif">password</h1>
                        <input
                            className="h-10 w-60 rounded-xl shadow-2xl p-2"
                            {...register('password')}
                        />
                        <br />
                        <br />
                        <input value="Отправление" type="submit" className="w-60 h-10 bg-black text-white rounded-xl"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sirojiddin;
