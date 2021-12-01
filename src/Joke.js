import React from 'react'

export default function Joke({ title, text }) {
    return (
        <>
            <h2>{title}</h2>
            <p>{text}</p>
        </>
    )
}