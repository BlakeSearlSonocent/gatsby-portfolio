import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"/>,
    url: "https://www.facebook.com/BlakeSearl",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"/>,
    url: "https://uk.linkedin.com/in/blake-searl-031767a8",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"/>,
    url: "https://twitter.com/BlakeSearl",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
