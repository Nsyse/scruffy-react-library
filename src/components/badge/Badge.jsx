import React from 'react';
import "./Badge.css"
import classNames from 'classnames';

export default function Badge({children, textColor = "#1e7a27", isRound = false}) {

    function buildColorStyle(textColor) {

        return {
            color: textColor,
            backgroundColor: `${textColor}33`,
            ...(isRound && {"borderRadius": "50vh"})
        }
    }

    const backgroundClasses = classNames({"badge-background": true, "rounded": isRound})
    const foregroundClasses = classNames({"badge": true, "rounded": isRound})

    const styles = buildColorStyle(textColor)
    return <span className={backgroundClasses}>
            <span className={foregroundClasses} style={styles}>
                {children}
            </span>
    </span>
}