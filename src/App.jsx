import './App.css'
import Badge from "./components/badge/Badge.jsx";
import Sandbox from "./components/sandbox/Sandbox.jsx";
import Banner from "./components/badge/banners/index.jsx";
import TitledTextButtonCard from "./components/card/TitledTextButtonCard/TitledTextButtonCard.jsx";
import {MdFileUpload} from "react-icons/md";
import Testimonial from "./components/Testimonial/index.jsx";

function App() {
    return (<>
        <Sandbox>
            <Badge>Badge</Badge>
            <Banner.Success>This is a test success banner.</Banner.Success>
            <Banner.Info>This is a test informative banner.</Banner.Info>
            <Banner.Warning>This is a test warning banner.</Banner.Warning>
            <Banner.Error>This is a test error banner.</Banner.Error>
            <TitledTextButtonCard tabIcon={<MdFileUpload/>} title={"Demo Card"}>
                <p>Button description</p>
                <p>Additional longer description</p>
            </TitledTextButtonCard>
            <Testimonial
                imageAlt="drawing of Leon"
                imageSrc={"src/assets/SampleIcon.jpg"}
                imageHeight="200px"
                author={{name: "ScruffyBrush", title: "Digital Bard"}}>
                {`Sample quote with :(...
                Pre-made line breaks.
                Also this line should wrap on its own. Checking that it doooooooooooooooooooooooooooooooo`}
            </Testimonial>
            <Testimonial
                imageAlt="drawing of Leon"
                imageHeight="200px"
            >
                {`Sample testimonial without image or author`}
            </Testimonial>
            <Testimonial.Mobile
                imageAlt="drawing of Leon"
                imageSrc={"src/assets/SampleIcon.jpg"}
                imageHeight="400px"
                author={{name: "ScruffyBrush", title: "Digital Bard"}}>
                {`Lorem ipsum and all that. Lorem ipsum and all that.
                    Lorem ipsum and all that.`}
            </Testimonial.Mobile>
        </Sandbox>
    </>)
}

export default App
