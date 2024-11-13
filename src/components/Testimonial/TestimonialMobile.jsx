import "./testimonial.css"
import Testimonial from "./index.jsx";

export function TestimonialMobile (props) {
    return Testimonial({...props, isMobileVariant: true})
}