import HeatmapArea from "./HeatmapArea"
import LogArea from "./LogArea"
import './MainArea.css'
import SubmitArea from "./SubmitArea"

const MainArea = () => {
    
    return (
        <div className="main-content">
            <HeatmapArea />
            <SubmitArea />
            <LogArea/>
        </div>
    )
}

export default MainArea