import {memo, useState} from "react";

type FizzProps = {
    isFizz: boolean,
}

type BuzzProps = {
    isBuzz: boolean,
    onClick: () => void,
}

const Fizz = (props: FizzProps) => {
    const {isFizz} = props

    console.log(`Fizzが描画されました。 , isFizz = ${isFizz}`)

    return <span>{isFizz ? 'Fizz' : ''}</span>
}

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props

    console.log(`Buzzが描画されました。 , isBuzz = ${isBuzz}`)

    return (
        <span>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})

export const FizzBuzz = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    // 関数が生成されるからBuzzも再レンダリングされる
    const onBuzzClick = () => {
        console.log(`Buzzがクリックされました , isBuzz${isBuzz}`)
    }

    console.log(`Parentが描画されました。 , count = ${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}> + 1</button>
            <p>{`現在のカウント : ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz}/>
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    )
}