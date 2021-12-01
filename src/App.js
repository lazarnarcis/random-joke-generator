import React, { useState } from "react"
import "./style.scss"
import jokes from "./jokes.json"

export default function App() {
    const [randomJoke, setRandomJoke] = useState(null)
    const generateJoke = () => {
        setRandomJoke(Math.floor((Math.random() * jokes.length) + 1))
    }
    return (
        <>
            <h1>Random Joke Generator</h1>
            <button type="button" onClick={() => generateJoke()}>Generate a new Joke</button>
            <h3>Joke here:</h3>
            <div>
                {
                    jokes.map(item => {
                        return <p key={item.id}>{ randomJoke === item.id ? `${item.text}` : "" }</p>
                    })
                }
            </div>
        </>
    )
}