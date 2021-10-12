import React, { useRef } from 'react';
import instance from '../api/instance';

const FileUpload = ({ onFileSelectSuccess, onFileSelectError, setFile }) => {
    const fileInput = useRef(null);
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        }
        else {
            const formData = new FormData();
            formData.append("file", file);
            instance.post("upload-file", formData)
                .then((res) => {
                    setFile(res.data);
                    // alert("File Upload success");
                })
            onFileSelectSuccess(file);
            //onFileSelectSuccess(URL.createObjectURL(file));
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <br />
            <button
                onClick={e => fileInput.current && fileInput.current.click()}
                className="bg-blue-800 px-3 py-2 rounded text-white mt-3"
            >SETFILE </button>
        </div>
    )
}
export default FileUpload;