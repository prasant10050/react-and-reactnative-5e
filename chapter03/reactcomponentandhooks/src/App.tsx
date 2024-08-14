import {useState} from 'react'
import './App.css'

function App() {
    const [name, setName] = useState("mike");
    const [age, setAge] = useState(32);

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
        </>
    );
}

export default App
