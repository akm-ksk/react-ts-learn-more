import {memo, useCallback, useState} from "react";

type ButtonProps = {
    onClick: () => void,
}

const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props

    console.log('DecrementButton : 再描画されました')

    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = memo((props: ButtonProps) => {
    const {onClick} = props

    console.log('IncrementButtonが最描画されました')

    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = memo((props: ButtonProps) => {
    const {onClick} = props

    console.log('DoubleButtonが最描画されました')

    return <button onClick={onClick}>Double</button>
})

export const UseCallBackComponent = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((c) => c - 1)
    }

    const increment = () => {
        setCount((c) => c + 1)
    }

    const double = useCallback(() => {
        setCount((c) => c * 2)
    }, [])

    return (
        <div>
            <p>Count : {count}</p>
            <DecrementButton onClick={decrement}/>
            <IncrementButton onClick={increment}/>
            <DoubleButton onClick={double}/>
        </div>
    )
}