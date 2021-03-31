import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> Sorry</h2>
            <p> This page canot be found</p>
            <Link to='/'> Back to Home page</Link>

        </div>

     );
}
 
export default NotFound;