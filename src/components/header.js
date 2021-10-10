import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="w-screen">
      <nav>
        <ul className="flex justify-center items-center">
          <li className="w-32 py-2 flex item-center justify-center">
            <Link to="/">Home</Link>
          </li>
          <li className="w-32 py-2 flex item-center justify-center">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


