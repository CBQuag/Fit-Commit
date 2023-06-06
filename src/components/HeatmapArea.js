import BodyHeatmap from './BodyHeatmap'
import CalendarHeatmap from './CalendarHeatmap'
import GraphHeatmap from './GraphHeatmap'
import './HeatmapArea.css'

const HeatmapArea = () => {
    

    return (
        <div className="heatmap-area">
            <div className='heatmap-items'>
                <CalendarHeatmap />
                {/* <GraphHeatmap /> */}
                <BodyHeatmap/>
            </div>         
        </div>
    )
}
export default HeatmapArea