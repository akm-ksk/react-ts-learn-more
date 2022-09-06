import {ChangeEvent, useMemo, useState} from "react";

export const UseMemoSample = () => {
    const [text, setText] = useState<string>('')
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItem) => {
            return [...prevItem, text]
        })
        setText('')
    }

    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input type="text" value={text} onChange={onChangeInput}/>
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (<p key={index}>{item}</p>))}
            </div>
            <div>
                <p>Total Number of Characters 1 : {numberOfCharacters1}</p>
                <p>Total Number of Characters 2 : {numberOfCharacters2}</p>
            </div>
        </div>
    )
}