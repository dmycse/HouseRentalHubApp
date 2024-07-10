import Logo from "./Logo";
import Navmenu from "./Navmenu";
import Search from "./Search";


export default function Header() {
  return (
    <header className="w-full py-4 fixed z-10 bg-white border-b shadow-sm">
      <div className="max-container flex justify-between items-center gap-3 md:gap-0">
        <Logo />
        <Search />
        <Navmenu />
      </div>
    </header>
  )
}
