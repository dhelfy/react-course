import { useState } from "react"

export default function Counter() {
    let [counter, setCount] = useState(0)

    function IncreaseCount() {
        setCount(counter += 1)
    }

    function DecreaseCount() {
        setCount(counter -= 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={IncreaseCount} className="BlackButton">Increase</button>
            <button onClick={DecreaseCount} className="BlackButton">Decrease</button>
        </>
    )
}