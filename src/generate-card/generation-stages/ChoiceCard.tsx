import React, { useState } from 'react'

import './ChoiceCard.css'

interface ChoiceCardProps {
    color?: string
    backgroundImage?: string
    height?: string
    width?: string
    text: string
}

function ChoiceCard(props: ChoiceCardProps) {
    let [classes, setClasses] = useState("message-card")
    let [cardSelected, setCardSelected] = useState(true)

    const addClassName = () => {
        if (cardSelected) {
            setClasses("message-card selected")
            console.log("class selected added")
        } else {
            setClasses("message-card")
        }
        setCardSelected((prevState) => !prevState)
    }

    return (
        <div
            style={{
                    color: props.color,
                    backgroundImage: props.backgroundImage,
                    height: props.height, 
                    width: props.width
                    }}
            className={classes}
            onClick={addClassName}>
            <h3> {props.text} </h3>
        </div>
    )
}

export default ChoiceCard
