export const Hello = () => {

    const onClick = () => {
        alert('hello')
    }

    const name = 'Brian'

    const text = 'Hello 、React'

    return (
        <div onClick={onClick}>
            <p>{text}</p>
            <p>こんにちは{name}さん</p>
        </div>
    )
}