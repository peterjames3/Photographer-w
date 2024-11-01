"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx("text-white gap-2 p-3 text-2xl font-medium", {
              " text-orange-500": pathname === link.href,
            })}
          >
            <nav className="">{link.name}</nav>
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
