export type NavItem = {
  id: number;
  name: string;
  href: string;
  external?: boolean;
};

export const navItems: NavItem[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Resources",
    href: "/resources",
  },
  {
    id: 3,
    name: "About",
    href: "/about",
  },
  {
    id: 4,
    name: "Team",
    href: "/team",
  },
  {
    id: 5,
    name: "Certificates",
    href: "/certificates",
  },
  {
    id: 6,
    name: "Partners",
    href: "/partners",
  },
  {
    id: 7,
    name: "Discord",
    href: "https://discord.gg/igcse",
    external: true,
  },
  {
    id: 8,
    name: "Reddit",
    href: "https://www.reddit.com/r/IGCSE/",
    external: true,
  },
];
