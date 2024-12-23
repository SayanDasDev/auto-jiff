import type {
  LucideIcon,
} from "lucide-react";

import {
  CoinsIcon,
  LayoutGrid,
  ShieldCheck,
  User,
  Workflow,
} from "lucide-react";

interface Submenu {
  href: string;
  label: string;
  active?: boolean;
}

interface Menu {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
}

interface Group {
  groupLabel: string;
  menus: Menu[];
}

export function getMenuList(_pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/workflows",
          label: "Workflows",
          icon: Workflow,
        },
      ],
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "",
    //       label: "Posts",
    //       icon: SquarePen,
    //       submenus: [
    //         {
    //           href: "/posts",
    //           label: "All Posts",
    //         },
    //         {
    //           href: "/posts/new",
    //           label: "New Post",
    //         },
    //       ],
    //     },

    //     {
    //       href: "/tags",
    //       label: "Tags",
    //       icon: Tag,
    //     },
    //   ],
    // },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/billing",
          label: "Billing",
          icon: CoinsIcon,
        },
        {
          href: "/credentials",
          label: "Credentials",
          icon: ShieldCheck,
        },
        {
          href: "/account",
          label: "Account",
          icon: User,
        },
      ],
    },
  ];
}
