import { useState } from "react";

export default function InputComponent () {
    let [text, setText] = useState('Any text')

    return (
        <>
            <h1>{text}</h1>
            <input value={text} 
            onChange={(event) => {setText(event.currentTarget.value)}}>
            </input>
        </>
    )
}