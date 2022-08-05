import React from 'react'
import loader from '../images/Ellipsis-2s-200px.gif'

const Loader = () => {
    return (
        <img alt="loader" src={loader }style={{ width:'150px', margin:'auto' , display:'block' , alt:'Loading'}}/>
    )
}

export default Loader