import './App.css'
import Badge from "./components/badge/Badge.jsx";
import Sandbox from "./components/sandbox/Sandbox.jsx";
import Banner from "./components/badge/banners/index.jsx";
import Card from "./components/card/Card.jsx";
import TitledTextButtonCard from "./components/card/TitledTextButtonCard/TitledTextButtonCard.jsx";
import TabIndicator from "./components/tabIndicator/TabIndicator.jsx";
import { MdFileUpload } from "react-icons/md";

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
            </Sandbox>
        </>
    )
}

export default App
