import { React, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

function Uliqpan() {

  const {
    register,
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onsubmit = data => console.log("Jonatish:", data);

  // const name = watch("name");
  // const surname = watch("surname");
  // const email = watch("email");
  // const password = watch("password");
  // console.log('Name: ' + name);
  // console.log('Surname: ' + surname);
  // console.log('Email: ' + email);
  // console.log('Password: ' + password);


    return (
        <div className="w-10/12 text-center h-4/6 mt-10 ml-10">
            <div1 className="rounded-xl h-full ">
            <h1 className="text-xl text-center font-bold">R♥e♥g♥i♥s♥t♥e♥e♥r</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <h1>𝗡𝗮𝗺𝗲</h1>
                <TextField 
                        id="outlined-basic" 
                        label="Ism"
                         variant="outlined" 
                       className="w-2/4"
                         />
                <h1>𝐒𝐮𝐫𝐧𝐚𝐦𝐞</h1>
                <TextField 
                        id="outlined-basic" 
                        label="Surname"
                         variant="outlined" 
                       className="w-2/4"
                         />
                <h1>𝐄𝐦𝐚𝐢𝐥</h1>
                <TextField 
                        id="outlined-basic" 
                        label="Email"
                         variant="outlined" 
                       className="w-2/4"
                         />
                <h1>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</h1>
                <TextField 
                        id="outlined-basic" 
                        label="Password"
                         variant="outlined" 
                       className="w-2/4"
                         />

                <br />
                <br />
                <button type="Register" className="bg-black text-white h-10 w-5/12 rounded-lg text-center">Register</button>
                   
            </form>
            </div1>
        </div>
    );

  return (
    <div className="w-10/12 bg-green-100 text-center h-4/6 mt-10 ml-10">
      <div className=" rounded-xl h-full ">
        <h1 className="text-xl text-center font-bold">R♥e♥g♥i♥s♥t♥e♥e♥r</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <h1>𝗡𝗮𝗺𝗲</h1>
          <TextField
            id="outlined-basic"
            label="Ism"
            variant="outlined"
            className="w-2/4"
            {...register('name')}
          />
          <h1>𝐒𝐮𝐫𝐧𝐚𝐦𝐞</h1>
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            className="w-2/4"
            {...register('surname')}
          />
          <h1>𝐄𝐦𝐚𝐢𝐥</h1>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-2/4"
            {...register('email')}
          />
          <h1>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</h1>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="w-2/4"
            {...register('password')}
          />
          <br />
          <br />
          <button type="submit" className="bg-black text-white h-10 w-5/12 rounded-lg text-center">Register</button>
        </form>
      </div>
    </div>
  );

}

export default Uliqpan;