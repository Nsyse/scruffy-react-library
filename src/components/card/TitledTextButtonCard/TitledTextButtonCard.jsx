import Card from "../Card.jsx";
import TabIndicator from "../../tabIndicator/TabIndicator.jsx";
import "./titledTextButtonCard.css"

export default function TitledTextButtonCard({title, tabIcon, children}) {

    return <Card>
        <TabIndicator>{tabIcon}</TabIndicator>
        {title && <b>{title}</b>}
        <div className="titledTextButtonCard">
            {children}
        </div>
    </Card>
}