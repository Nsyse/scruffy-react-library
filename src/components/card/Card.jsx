import "./card.css"
import TabIndicator from "../tabIndicator/TabIndicator.jsx";

export default function Card({children, title}) {

    return <div className="card">
        {title && <b>{title}</b>}
        {children}
    </div>
}