import AccountDisplay from './AccountDisplay'
import './Header.css'
import PointsDisplay from './PointsDisplay'
import StreakDisplay from './StreakDisplay'

const Header = () => {
    
    return (
        <div className='header-content'>
            <StreakDisplay/>
            <PointsDisplay/>
            <AccountDisplay/>
        </div>
    )
}
export default Header