import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Hello} from "./components/Hello";
import {Name} from "./components/Name";
import {Message} from "./components/Message";
import {ContainerSample, Page} from "./components/containerSample";
import {Counter} from "./components/Counter";
import {ReducerCount} from "./components/Reducer";
import {FizzBuzz} from "./components/FizzBazz";
import {UseCallBackComponent} from "./components/UseCallBack";
import {UseMemoSample} from "./components/UseMemoSample";
import {Clock} from "./components/Clock";
import {UseUserContext} from "./components/UseUserContext";
import {ImageUpload, UseRefParent} from "./components/UseRef";
import {UseInput} from "./components/useInput";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <React.StrictMode>
            {/*<App/>*/}
            <Hello/>
            <Name/>
            <Message/>
            <ContainerSample/>
            <Page/>
            <Counter initialValue={0}/>
            <ReducerCount initialValue={0}/>
        </React.StrictMode>
        <FizzBuzz/>
        <UseCallBackComponent/>
        <UseMemoSample/>
        <Clock/>
        <UseUserContext/>
        <ImageUpload/>
        <UseRefParent/>
        <UseInput/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
