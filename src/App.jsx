import './App.css'
import Badge from "./components/badge/Badge.jsx";
import Sandbox from "./components/sandbox/Sandbox.jsx";
import Banner from "./components/badge/banners/index.jsx";

function App() {
    return (
        <>
            <Sandbox>
                <Badge>Badge</Badge>
                <Banner.Success>This is a test success banner.</Banner.Success>
                <Banner.Info>This is a test informative banner.</Banner.Info>
                <Banner.Warning>This is a test warning banner.</Banner.Warning>
                <Banner.Error>This is a test error banner.</Banner.Error>
            </Sandbox>
        </>
    )
}

export default App
