import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

import CardStages from '../generate-card/CardStages'
import { CardStageContext } from '../contexts/CardStageContext'
import './GenerateCard.css'

function GenerateCard() {
    const [cardComponent, changeCardComponent] = useState("msg")

    let [indicatorWidth, setWidth] = useState({widthLength: "26%"})

    
    const [firstMilestone, setFirstMilestone] = useState("progress-milestone progress-milestone__color")
    const [secondMilestone, setSecondMilestone] = useState("progress-milestone")
    const [thirdMilestone, setThirdMilestone] = useState("progress-milestone")

    const indicator = document.getElementById("progress-indicator-color")

    useEffect(() => {
        gsap.to(indicator, { duration: 1.5, width: indicatorWidth.widthLength })
    }, [indicatorWidth])

    const switchComponent = (componentName: string): void => {
        progressBarStyles(componentName)
        changeCardComponent(componentName)
    }

    const progressBarStyles = (componentStage: string) => {
        switch(componentStage) {
            case "msg":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone")
                setThirdMilestone("progress-milestone")
                setWidth({widthLength: "26%"})
                break
            case "img":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone progress-milestone__color")
                setThirdMilestone("progress-milestone")
                setWidth({widthLength: "52%"})
                break
            case "download":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone progress-milestone__color")
                setThirdMilestone("progress-milestone progress-milestone__color")
                setWidth({widthLength: "100%"})
                break
            default:
                console.log("Something weird is happening right now!!")
        }
    }

    return (
        <div className="card-background">
            <div id="progress-indicator">
                <div
                    id="progress-indicator-color"
                    style={{ width: indicatorWidth.widthLength }}>
                </div>
                <div className={firstMilestone}></div>
                <div id="second" className={secondMilestone}></div>
                <div className={thirdMilestone}></div>
            </div>
            <header id="progress-headings">
                <CardStageContext.Provider value={switchComponent}>
                    <CardStages componentName={cardComponent} />
                </CardStageContext.Provider>
            </header>
        </div>
    )
}

export default GenerateCard
