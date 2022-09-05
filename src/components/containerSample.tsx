import React, {createContext} from "react";

type containerProps = {
    title: String;
    children: React.ReactElement;
}

export const Container = (props: containerProps) => {

    const {title, children} = props

    return (
        <div>
            <span>{title}</span>
            <div style={{background: 'red'}}>{children}</div>
        </div>
    )

}


export const ContainerSample = (): JSX.Element => {
    return (
        <Container title={'Hello'}>
            <p>Background Red</p>
        </Container>
    )
}

const TitleContext = createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {
                (title) => {
                    return <h1>{title}</h1>
                }
            }
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title/>
        </div>
    )
}

export const Page = () => {
    const title = 'React Book'

    return (
        <TitleContext.Provider value={title}>
            <Header/>
        </TitleContext.Provider>
    )
}