import {ChangeEvent, useCallback, useDebugValue, useState} from "react";

const useInput = () => {
    const [state, setState] = useState('')

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    useDebugValue(`Input : ${state}`)

    return [state, onChange] as const
}

export const UseInput = () => {
    const [text, onChangeText] = useInput()

    return (
        <div>
            <input type="text" value={text} onChange={onChangeText}/>
            <p>{`Input : ${text}`}</p>
        </div>
    )
}