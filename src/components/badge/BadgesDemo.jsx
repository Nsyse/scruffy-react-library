import './App.css'
import Badge from "./components/badge/Badge.jsx";
import Sandbox from "./components/sandbox/Sandbox.jsx";

function BadgesDemo() {
    return (
        <>
            <Sandbox>
                <Badge textColor={"#1f2937"}>Badge</Badge>
                <Badge textColor={"#981b1b"}>Badge</Badge>
                <Badge textColor={"#065e45"}>Badge</Badge>
                <Badge textColor={"#1e3fae"}>Badge</Badge>
                <Badge textColor={"#3730a2"}>Badge</Badge>
                <Badge textColor={"#5a21b5"}>Badge</Badge>
                <Badge textColor={"#9c174c"}>Badge</Badge>

                <Badge textColor={"#1f2937"} isRound={true}>Badge</Badge>
                <Badge textColor={"#981b1b"} isRound={true}>Badge</Badge>
                <Badge textColor={"#065e45"} isRound={true}>Badge</Badge>
                <Badge textColor={"#1e3fae"} isRound={true}>Badge</Badge>
                <Badge textColor={"#3730a2"} isRound={true}>Badge</Badge>
                <Badge textColor={"#5a21b5"} isRound={true}>Badge</Badge>
                <Badge textColor={"#9c174c"} isRound={true}>Badge</Badge>
            </Sandbox>
        </>
    )
}

export default App
