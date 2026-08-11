"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navdata";
import { navItems } from "@/data/navdata";
import styles from "./navbar.module.css";

type NavbarProps = {
  selectedHref?: string;
  onNavigate?: () => void;
};

export default function Navbar({ selectedHref, onNavigate }: NavbarProps) {
  const pathname = usePathname();
  const resolvedSelectedHref = selectedHref ?? pathname;

  return (
    <ul className={styles.list}>
      {navItems.map((item: NavItem) => {
        const isActive = resolvedSelectedHref === item.href;

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
