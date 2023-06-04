import HeatmapArea from "./HeatmapArea"
import LogArea from "./LogArea"
import './MainArea.css'
import SelectionInfo from "./SelectionInfo"
import SubmitArea from "./SubmitArea"

const MainArea = () => {
    
    return (
        <div className="main-content">
            <HeatmapArea />
            <SubmitArea />
            <SelectionInfo/>
            <LogArea/>
        </div>
    )
}

export default MainArea