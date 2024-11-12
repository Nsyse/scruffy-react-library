import "./testimonial.css"

export function Testimonial({image}) {
    return <div className="testimonial">
        {image}
        <div className={"testimonialTextBlock"}>
            <p>Lorem ipsum and all that.</p>
            <p>Lorem ipsum and all that.</p>
            <p>Lorem ipsum and all that.</p>

        </div>
    </div>;
}