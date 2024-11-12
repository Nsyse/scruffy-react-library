import Banner from "./Banner.jsx";
import { GrStatusGood } from "react-icons/gr";

export default function BannerSuccess({children, textColor = "#065e45", isRound = false, title = "Info"}) {

    const icon = <GrStatusGood/>

    return <Banner textColor={textColor} isRound={isRound} isFullWidth={true} title={title} icon={icon}>
            {children}
    </Banner>
}