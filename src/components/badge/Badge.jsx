import React from 'react';
import "./ColoredDiv.css"
import classNames from 'classnames';
import ColoredDiv from "./ColoredDiv.jsx";

export default function Badge({children, textColor = "#1e7a27", isRound = false}) {

    return <ColoredDiv textColor={textColor} isRound={isRound}>{children}</ColoredDiv>
}