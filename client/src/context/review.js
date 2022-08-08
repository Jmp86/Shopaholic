import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {UserContext} from './user';


const ReviewContext = React.createContext()


function ReviewProvider({children}) {
    const [reviews, setReviews] = useState();
    const {user} = useContext(UserContext)
    const {setMessage} = useContext(MessageContext)

    const getReviews = useCallback(async (id) => {
        if (user) {
        try {
            const resp = await fetch('/api/v1/reviews/')
             if (resp.status === 200) {
                const data = await resp.json() 
                setReviews({data})
             } 
        } catch (e) {
            setMessage({message: "No reviews to display", color: "red"})
        }}
    }, [setMessage, user])



    return (
        <ReviewContext.Provider value={{reviews, setReviews, getReviews}}>
            {children}
        </ReviewContext.Provider>
    )

    }

    export {ReviewContext, ReviewProvider}