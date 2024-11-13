import "./testimonial.css"
import {ImQuotesLeft} from "react-icons/im";
import classNames from "classnames";

export function Testimonial({children, author, imageHeight, imageAlt, imageSrc, isMobileVariant = false}) {

    let containerClass = isMobileVariant ? "testimonialContainerMobile" : "testimonialContainer";
    let bannerClass = isMobileVariant ? "testimonialBannerMobile" : "testimonialBanner";
    let textBlockClasses = classNames({"testimonialTextBlock": true, "testimonialTextBlockMobile": isMobileVariant})


    return <div style={imageSrc && {"--imageHeight": imageHeight}} className={containerClass}>
        <div className={bannerClass}>
            {imageSrc &&
                <div className={"photoContainer"}>
                    <img alt={imageAlt}
                         src={imageSrc}
                         style={{"--imageHeight": imageHeight}}
                         className={"testimonialPhoto"}
                    />
                </div>
            }
            <div className={textBlockClasses}>
                <div className={"quoteBlock"}>
                    <ImQuotesLeft className={"quoteIcon"}/>
                    <p>{children}</p>
                    <br/>
                    {author &&
                        <div className={"authorBlock"}>
                            <b className={"authorName"}>{author.name}</b>
                            {author.title && <p className={"title"}>{author.title}</p>}
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
        ;
}