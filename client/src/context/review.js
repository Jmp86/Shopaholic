import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "./message"
import {ItemContext} from './item';


const ReviewContext = React.createContext()


function ReviewProvider({children}) {
    const [reviews, setReviews] = useState();
    const {item} = useContext(ItemContext)
    const {setMessage} = useContext(MessageContext)

    const getReviews = useCallback(async () => {
        if (item) {
        try {
            const resp = await fetch('/api/v1/reviews')
             if (resp.status === 200) {
                const data = await resp.json() 
                setReviews({data})
                console.log(data)
             } 
        } catch (e) {
            setMessage({message: "No reviews to display", color: "red"})
        }}
    }, [setMessage, item])



    return (
        <ReviewContext.Provider value={{reviews, setReviews, getReviews}}>
            {children}
        </ReviewContext.Provider>
    )

    }

    export {ReviewContext, ReviewProvider}