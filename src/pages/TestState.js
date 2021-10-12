import React, { useState } from "react"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const inputData = [
    {
        name: "name",
        label: "Ismingizni kiriting",
    },
    {
        name: "email",
        label: "Emailingizni kiriting",
    },
    {
        name: "age",
        label: "Yoshingizni kiriting",
    },
    {
        name: "surname",
        label: "Familiya kiriting",
    },
    {
        name: "sex",
        label: "Jinsingizni kiriting",
    },
]

const TestState = (props) => {
    const [son, sonKiritish] = useState(0); // useState hook
    const [ism, ismKiritish] = useState("Ism kiritilmagan");
    const [rasm, rasmKiritish] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [user, setUser] = useState({
        name: "Uluqpan",
        email: "uluq@mail.com",
        age: "15",
        surname: "Qoshqarbaev",
        sex: "erkak"
    });
    const [images, setImages] = useState([
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpeRskib1gaHixg2AKfv-ZqZokgB9y80zWA&usqp=CAU" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FHaJRN5uMIrJMYQwslIlR0V2b-8Pw9BMlA&usqp=CAU" },
    ]);

    function ismYozish(name) {
        ismKiritish(name);
    }

    const setUserData = (e) => {
        setUser({
            ...user, // Spread-operator operator rasshireniya kengaytirish operatori (obyektni yoyib olish)
            [e.target.name]: e.target.value
        })
    }

    const change = (e) => {
        rasmKiritish(e.target.value)
        if (isDisabled) {
            setIsDisabled(false)
        }
    }

    const setNewImage = () => {
        setImages([
            ...images,
            { url: rasm }
        ])
    }

    return (
        <div className="p-5">
            <h1 className={"bg-" + props.color + "-500"}>{props.text}</h1>
            <h5>{son}</h5>
            <button
                onClick={() => sonKiritish(son + 1)}
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Son qo'shish +
            </button>
            <button
                onClick={() => sonKiritish(son - 1)}
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Son ayirish -
            </button>

            <h1>{ism}</h1>
            <input
                className="block bg-gray-200 text-gray-700 border-green-500 text-sm font-bold mb-2"
                type="text"
                onChange={(e) => ismYozish(e.target.value)}
            />
            <br />
            <br />
            <h3>Ismi: {user.name}</h3>
            <br />
            <h4>Email:  {user.email}</h4>
            <br />
            <h5>Yoshi: {user.age}</h5>
            <br />
            <h5>Familiya: {user.surname}</h5>
            <br />
            <h5>Jinsi: {user.sex}</h5>
            {
                inputData.map((item, index) => {
                    return (
                        <div key={index}>
                            <br />
                            <br />
                            <FormControl>
                                <InputLabel htmlFor="input-with-icon-adornment">{item.label}</InputLabel>
                                <Input
                                    name={item.name}
                                    onChange={(e) => setUserData(e)}
                                    autoFocus={true}
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    )
                })
            }
            <br />
            <div className="flex justify-between">
                {
                    images.map((item, index) => {
                        return (
                            <div className="w-1/4 p-2 bg-gray-300 rounded">
                                <img alt="Rasm" src={item.url} className="h-48 w-full" key={index}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center">
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Rasm url ini kiriting</InputLabel>
                    <Input
                        onChange={change}
                        autoFocus={true}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    disabled={isDisabled}
                    onClick={setNewImage}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
export default TestState;