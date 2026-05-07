
import { menuItems } from "./SidebarItems"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className='w-50 hidden md:block py-4'>
        <nav>
          <ul className="space-y-4">
              {menuItems.map((item) => (
                  <li key={item.path}>
                      <Link
                          to={item.path}
                          className="flex items-center gap-3 rounded-md py-2 hover:bg-accent px-4"
                      >
                          {item.icon}
                          <span>{item.name}</span>
                      </Link>
                  </li>
              ))}
          </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
