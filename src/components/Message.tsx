export const Message = (props: {}) => {

    const content1 = 'Parent Component'
    const content2 = 'MessageText Component'

    return (
        <>
            <MessageText content={content1}/>
            <MessageText content={content2}/>
        </>
    )

}

const MessageText = (props: { content: string }) => {

    const {content} = props

    return <p className="text">{content}</p>

}