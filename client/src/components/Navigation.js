import {NavLink} from 'react-router-dom'
import {UserContext} from "../context/user"
import {useContext} from "react"

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(2555, 120, 44)",
    fontWeight: "bold",
    verticalAlign: "center"
}

const Navigation = () => {
    const {user} = useContext(UserContext)

    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/posts"
            >Posts</NavLink>
            {user ? (
                <>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/posts/new"
                    >New Post</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/profile"
                    >Profile</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/signout"
                    >Sign Out</NavLink>
                </>
                ) : (
                    <>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
                            style={style}
                            to="/login"
                        >Login</NavLink>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
                            style={style}
                            to="/signup"
                        >Sign Up</NavLink>
                    </>
                )}
        </div>
    )
}

export default Navigation;