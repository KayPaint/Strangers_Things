import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/posts">Posts</Link>
            <Link className="nav-link" to="/account">Account</Link>
        </div>
    )
}

export { Nav }