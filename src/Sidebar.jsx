import logo from "./assets/mc-logo.svg"
import { social, links } from "./data"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <img src={logo} alt='Matthew Cordaro' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
