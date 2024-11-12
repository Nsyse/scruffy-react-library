import React from 'react';
import "./ColoredDiv.css"
import classNames from 'classnames';

export default function ColoredDiv({children, textColor = "#1e7a27", isRound = false, isFullWidth = false}) {

    function buildColorStyle(textColor) {

        return {
            color: textColor,
            backgroundColor: `${textColor}33`,
            ...(isRound && {"borderRadius": "50vh"})
        }
    }

    const backgroundClasses = classNames({"blankBackground": true, "rounded": isRound, "fullWidth": isFullWidth})
    const foregroundClasses = classNames({"badge": true, "rounded": isRound})

    const styles = buildColorStyle(textColor)
    return <div className={backgroundClasses}>
        <div className={foregroundClasses} style={styles}>
            {children}
        </div>
    </div>
}