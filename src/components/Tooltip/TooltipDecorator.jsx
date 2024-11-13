import {Tooltip} from "./Tooltip.jsx";
import "./tooltip.css"
import React from "react";

export function TooltipDecorator({children, tooltipText}) {

    const [isTooltipActive, setIsTooltipActive] = React.useState(false);


    return <div className="tooltipDecorator" onMouseEnter={()=>setIsTooltipActive(true)}>
        {children}
        {isTooltipActive && <Tooltip tooltipText = {tooltipText}
        onDismiss={() => setIsTooltipActive(false)}/>}
    </div>;
}