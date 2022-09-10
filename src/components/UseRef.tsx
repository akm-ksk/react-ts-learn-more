import {ChangeEvent, forwardRef, useImperativeHandle, useRef, useState} from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const UPLOAD_DELAY = 5000

export const ImageUpload = () => {
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')

    const onClickText = () => {
        if (inputImageRef.current !== null) {
            inputImageRef.current?.click()
        }
    }

    const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (files !== null && files.length > 0) {
            fileRef.current = files[0]
        }
    }

    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            await sleep(UPLOAD_DELAY)
        }

        setMessage(`${fileRef.current?.name} has been successfully upload`)
    }

    return (
        <div>
            <p style={{textDecoration: 'underline'}} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{visibility: "hidden"}}
            />
            <br/>
            <button onClick={onClickUpload}>アップロード</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}

const Child = forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date()
            const message = `Hello , it's ${date.toLocaleString()} now`

            setMessage(message)
        },
    }))

    return <div>{message !== null ? <p>{message}</p> : null}</div>
})

export const UseRefParent = () => {
    const ChildRef = useRef<{ showMessage: () => void }>(null)

    const onClick = () => {
        if (ChildRef.current !== null) {
            ChildRef.current.showMessage()
        }
    }

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={ChildRef}/>
        </div>
    )
}
