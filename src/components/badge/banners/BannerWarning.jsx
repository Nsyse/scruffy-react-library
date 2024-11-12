import Banner from "./Banner.jsx";
import { TiWarning } from "react-icons/ti";

export default function BannerWarning({children, textColor = "#b35209", isRound = false, title = "Warning"}) {

    const icon = <TiWarning/>

    return <Banner textColor={textColor} isRound={isRound} isFullWidth={true} title={title} icon={icon}>
            {children}
    </Banner>
}