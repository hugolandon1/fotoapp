'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    {
        title: "home",
        href: "/"
    },
    {
        title: "mujer",
        href: "/mujer"
    }
]

const Header = () => {
    const pathName = usePathname()
  return (
    <div className='h-16 bg-pink-500 flex gap-2 justify-center items-center'>
        {links.map(link => (
            <li key={link.title}>
                <Link className={`bg-yellow-300 ${pathName === link.href ? "font-bold" : ""} `} href={link.href}  >
                {link.title}
                </Link>
            </li>
        ))}
    </div>
  )
}

export default Header