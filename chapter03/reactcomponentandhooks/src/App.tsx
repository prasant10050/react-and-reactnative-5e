import {useCallback, useEffect, useState} from 'react'
import './App.css'
import Timer from "./Timer";

const ShowHideTimer=({show})=>(show?<Timer/>:null);

function App() {
    const [name, setName] = useState("mike");
    const [age, setAge] = useState(32);
    const [id, setId] = useState("loading...")
    const [username, setUsername] = useState("loading...")
    const[show,setShow]=useState(false);

    const fetchUser = useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({id: 1, username: "Prashant"});
            }, 5000);
        });
    }, []);

    useEffect(() => {
        fetchUser().then((user) => {
            // @ts-ignore
            setId(user.id);
            // @ts-ignore
            setUsername(user.username);
        });
    });

    return (
        <>
            <section>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <p>My name is {name}</p>
            </section>
            <section>
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))}/>
                <p>My age is {age}</p>
            </section>
            <section>
                <p>ID: {id}</p>
                <p>ID: {username}</p>
            </section>
            <section>
                <button onClick={()=>setShow(!show)}>
                    {show?"Hide Timer":"Show Timer"}
                </button>
                <ShowHideTimer show={show}/>
            </section>
        </>
    );
}

export default App
