import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import { useForm } from "react-hook-form";
import { getLayoutFields } from "./items";
import SelectClassic from "../../components/SelectClassic";
import FileUpload from "../../components/FileUpload";

const getField = ({ field, register, errors }) => {

    switch (field.type) {
        case "text":
            return (
                <label className="flex" key={field.name}>
                    <span className="label_title">{field.label}</span>
                    <div className="ml-10 text-left">
                        <input
                            className=""
                            name={field.name}
                            {...register(field.name, { required: true })}
                        />
                    </div>
                    {errors[field.name] && (
                        <span className="input_error">Обязательно поле</span>
                    )}
                </label>
            );
        case "select":
            return (
                <label className="flex" key={field.name}>
                    <div>
                        {errors[field.name] && (
                            <span className="input_error">Обязательно поле</span>
                        )}
                        <SelectClassic
                            type="secondary fs14"
                            register={register}
                            name={field.name}
                            options={field.options ? field.options : []}
                            placeholder={field.label}
                        />
                    </div>
                </label>
            );
        default:
            break;
    }
};

const AddBook = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);
    const url = "http://localhost:8000/api/books";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("author", data.author);
        formData.append("availability", data.availability);
        formData.append("category_id", data.category_id);
        formData.append("description", data.description);
        formData.append("title", data.title);
        Axios
            .post(url, formData)
            .then((res) => {
                setFile(res.data);
            })
            .catch((err) => alert("File Upload Error"));
    };
    return (
        <>
            <div className="flex h-screen flex-wrap content-center content justify-center">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <p className="text-center font-bold text-lg">Registratsiya</p>
                        <br />
                        {getLayoutFields().map((field) => {
                            return getField({ field, register, errors });
                        })}
                        <br />
                        <FileUpload
                            setFile={setFile}
                            onFileSelectSuccess={(file) => setSelectedFile(file)}
                            onFileSelectError={({ error }) => alert(error)}
                        />

                        {file
                            ?
                            <img src={file.file_path} alt="rasm" />
                            :
                            null
                        }
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
export default AddBook;