import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav className='NavContainer'>
        <h3>ecommerce</h3>
        <div className="category">
          <Link to={`/category/2`}>mazos</Link>
          <Link to={`/category/echizo`}>tableros</Link>
          <Link to={`/category/tampa`}>espesiales</Link>
        </div>
      </nav>
    )
}

export default Navbar