import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"

import { Menu} from "lucide-react"
import { Link } from "react-router-dom"
import { menuItems } from "./SidebarItems"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu className="w-5 h-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="w-50! rounded-r-lg md:hidden">
        <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              This is a simple mobile menu.
            </SheetDescription>
        </SheetHeader>
        {/* Mobile menu content goes here */}
        <nav>
          <ul className="space-y-4">
              {menuItems.map((item) => (
                  <li key={item.path}>
                      <SheetClose asChild>
                          <Link
                              to={item.path}
                              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent"
                          >
                              {item.icon}
                              <span>{item.name}</span>
                          </Link>
                      </SheetClose>
                  </li>
              ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
