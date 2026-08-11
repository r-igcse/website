"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navdata";
import { navItems } from "@/data/navdata";
import styles from "./navbar.module.css";

type NavbarProps = {
  onNavigate?: () => void;
};

export default function Navbar({ onNavigate }: NavbarProps) {
  const pathname = usePathname();
  // The supplied homepage frame uses the Resources state of the shared nav.
  const activePath = pathname === "/" ? "/resources" : pathname;

  return (
    <ul className={styles.list}>
      {navItems.map((item: NavItem) => {
        const isActive = activePath === item.href;

        return (
          <li className={styles.item} key={item.id}>
            <Link
              href={item.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              onClick={onNavigate}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
