import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const TestHooks = (props) => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = () => {
        setLoading(true);
        let res = fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
                setLoading(false)
                console.log(res)
            })
    }

    useEffect(() => {
        getPosts();
        document.title = `Siz  ${count} marta bosdingiz`;
    }, [count])

    return (
        <>
            {
                loading ? <Loader loading={loading} />
                    : (
                        <div>
                            {
                                posts ? posts.map((item, index) => {
                                    return (
                                        <table key={item + index}>
                                            <tr>
                                                <td>{item.name}</td>
                                            </tr>
                                        </table>
                                    )
                                }) : null
                            }
                            <p>{count} marta bosildi</p>
                            <button
                                onClick={() => setCount(count + 1)}
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Son qo'shish +
                            </button>
                        </div>
                    )
            }

        </>
    )
}

export default TestHooks;