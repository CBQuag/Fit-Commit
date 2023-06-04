import './Log.css'

const Log = (props) => {

    function datediff(first, second) {        
        return Math.round((second - first) / (1000 * 60 * 60 * 24))-1;
    }

    const convertDate = date => {
        
        let today = Date.now()
        let convertedDate = new Date(date)
        let daysSince = datediff(convertedDate, today)
        if (daysSince < 0)
            return `Invalid Date`
        if (daysSince < 1)
            return `Today`
        if (daysSince == 1)
            return `Yesterday`
        return daysSince+' Days'
    }

    const shrinkTitle = name => {
        if (name.length < 18)
            return name
        return name.substring(0, 18)+'...'
    }

    const convertTime = time => {
        let hours = Math.floor(time / 60);
        let minutes = time % 60
        // let hourString=`${hours?`${hours} ${hours==1?`hour`:`hours`}, `:``}`
        // let minuteString=`${minutes?`${minutes} ${minutes==1?`minute`:`minutes`}`:``}`
        return `${hours?`${hours}:`:``}${minutes?minutes:``}`
    }
    
    return (
        <div className='log'>
            <div className='info-box'>
                <p>{convertDate(props.time)}</p>
                <p>{shrinkTitle(props.title)}</p>
            </div>
            
            <div className='time-box'>
                <p>{convertTime(props.duration)}</p>
                <img src={require('../watch_time_clock_icon_221069.png')} alt="clock icon" />
            </div>
        </div>
    )
}

export default Log