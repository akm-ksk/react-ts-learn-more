import {useEffect, useState} from "react";

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-us',
    JP = 'ja-JP'
}

const getLocalFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US

        case Locale.JP:
            return Locale.JP

        default:
            return Locale.US
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [local, setLocal] = useState(Locale.US)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, local)
    }, [local])

    return (
        <div>
            <p>
                <span id="current-timer-label">現在時刻</span>
                <span>: {timestamp.toLocaleString(local)}</span>
                <select
                    value={local}
                    onChange={(e) => setLocal(getLocalFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}
