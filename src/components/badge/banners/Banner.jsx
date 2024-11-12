import React from 'react';
import ColoredDiv from "../ColoredDiv.jsx";
import "./banners.css"

export default function Banner({children, textColor = "#065e45", isRound = false, title = "Title", icon}) {

    return <ColoredDiv textColor={textColor} isRound={isRound} isFullWidth={true}>
        < div className={"bannerHeader"}>
            {icon && icon}
            <b>{title}</b>
        </div>
        {children}
    </ColoredDiv>
}