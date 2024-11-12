import Banner from "./Banner.jsx";
import { TbAlertHexagonFilled } from "react-icons/tb";

export default function BannerError({children, textColor = "#b30909", isRound = false, title = "Info", ...rest}) {

    const icon = <TbAlertHexagonFilled/>

    return <Banner textColor={textColor} icon={icon} isFullWidth={true} {...rest}>
            {children}
    </Banner>
}