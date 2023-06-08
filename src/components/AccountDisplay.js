import './AccountDisplay.css'

const AccountDisplay = () => {

    return (
        <div>
            <img className='account'
                src={require('../account-25-256.png')}
                alt=""
                onClick={() => { localStorage.clear(); window.location.reload() }}    
            />
        </div>
    )
}
export default AccountDisplay