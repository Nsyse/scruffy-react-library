import Banner from "./Banner.jsx";
import {FaInfoCircle} from "react-icons/fa";

export default function BannerInfo({children, textColor = "#1c6cd5", isRound = false, title = "Info"}) {

    const icon = <FaInfoCircle/>

    return <Banner textColor={textColor} isRound={isRound} isFullWidth={true} title={title} icon={icon}>
            {children}
    </Banner>
}