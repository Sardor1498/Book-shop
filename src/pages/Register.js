import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import instance from "../api/instance";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const url = "https://deliver-project.herokuapp.com/api/register";
    //const url = "http://localhost:8000/api/register";

    const setUserData = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        let res = instance.post("register", user);
        if (res.data) {
            console.log(res.data)
        }
    }
    return (
        <>
            <div className="flex h-screen flex-wrap content-center content justify-center">
                <div>
                    <form onSubmit={submit} noValidate autoComplete="off">
                        <p className="text-center font-bold text-lg">Registratsiya</p>
                        <br />
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Ism"
                            variant="outlined"
                            value={user.name}
                            name="name"
                            onChange={setUserData}
                        />
                        <br />
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={user.email}
                            name="email"
                            onChange={setUserData}
                        />
                        <br />
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Parol"
                            variant="outlined"
                            value={user.password}
                            name="password"
                            onChange={setUserData}
                        />
                        <br />
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Register
                        </Button>
                        <Button
                            type="reset"
                            style={{ marginLeft: "25px" }}
                            variant="contained"
                            color="secondary"
                        >
                            Cancel
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;