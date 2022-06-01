import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Menu 1', href: '#', current: false },
  { name: 'Menu 2', href: '#', current: false },
]

const Navbar = () => {

  return (
    <header className={`bg-red-600 text-white shadow text-sm`}>
      <nav className="max-w-6xl mx-auto px-5 xl:px-0 h-14 flex items-center justify-between">

        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {
            navigation.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <a className="block py-2 pr-4 pl-3" aria-current="page">{item.name}</a>
                </Link>
              </li>
            ))
          }

        </ul>

        <div className="relative text-gray-600">
          <input type="text"
                 className="border-2 border-gray-300 p-2 pr-10 w-full text-gray-900 bg-gray-50 rounded-lg focus:outline-none"
                 placeholder="Search..." />
          <span className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <Link href={'/login'}>
          <button
            className="py-2 px-4 font-medium rounded-lg text-black bg-white transition duration-300 ease-in-out hover:bg-gray-50"
          >
            Login
          </button>
        </Link>

      </nav>
    </header>
  )
}

export default Navbar;
