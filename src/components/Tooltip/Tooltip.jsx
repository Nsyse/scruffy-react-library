import "./tooltip.css"

export function Tooltip({children, tooltipText, onDismiss}) {


    return <span className="tooltip">
        <div className="tooltipContent">{children}
            <p className="tooltipText">{tooltipText}</p>
            <button className="tooltipCloseButton" onClick={onDismiss}>X</button>
        </div>
    </span>;
}