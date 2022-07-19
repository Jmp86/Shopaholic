import {useEffect, useContext} from 'react'
import {UserContext} from '../context/user'
import {MessageContext} from '../context/message'
import {useHistory} from "react-router-dom"

const Logout = () => {
    const {logout} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        const handleLogout = async () => {
            const resp = await logout()
            if (resp) {
                setMessage({message: "Successfully signed out", color: "green"})
                history.push("/login")
            }
        }
        handleLogout()
    }, [logout, history, setMessage]);

    return (
        <div>Loading...</div>
    )
}

export default Logout