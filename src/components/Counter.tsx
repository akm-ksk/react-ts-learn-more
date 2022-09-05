import {useState} from "react";

type CounterProps = {
    initialValue: number,
}

export const Counter = (props: CounterProps) => {

    const {initialValue} = props
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}> Up</button>
            <button onClick={() => setCount(count - 1)}> Down</button>
        </div>
    )

}
