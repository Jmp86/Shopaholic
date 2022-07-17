import {useState, useEffect, useContext} from 'react'
import {MessageContext} from '../context/message'

const Notification = () => {
    const [vanishMode, setVanishMode] = useState(false);
    const {message} = useContext(MessageContext)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setVanishMode(true)
        }, 5000)
        return () => {
            clearTimeout(timer)
            setVanishMode(false)
        };
    }, [message]);

    return (
        <div>
            {!vanishMode ? <p style={{fontSize: "bold", backgroundColor: message?.color}}>{message?.message}</p> : null}
        </div>
    )
}

export default Notification