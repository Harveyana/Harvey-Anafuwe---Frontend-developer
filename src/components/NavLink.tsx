interface navLink {
  url: string
  name: string
}

// import { useEffect, useState } from 'react'

function NavLink({url,name}:navLink){
  // const [dropNavbar, setDropNavbar] = useState<boolean>(false);

    return (
        <>
        <li className="w-full">
      <a
        className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"
        href={url}
      >
        { name }
      </a>
    </li>
        </>
    )
}
export default NavLink;