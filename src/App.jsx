import './App.css'
import Badge from "./components/badge/Badge.jsx";
import Sandbox from "./components/sandbox/Sandbox.jsx";
import Banner from "./components/badge/banners/index.jsx";
import TitledTextButtonCard from "./components/card/TitledTextButtonCard/TitledTextButtonCard.jsx";
import {MdFileUpload} from "react-icons/md";
import {Testimonial} from "./components/Testimonial/Testimonial.jsx";

function App() {
    return (
        <>
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
                <Testimonial image ={<img alt={"drawing of Leon"} src={"src/assets/SampleIcon.jpg"} className={"testimonialPhoto"}/>}>

                </Testimonial>
            </Sandbox>
        </>
    )
}

export default App
