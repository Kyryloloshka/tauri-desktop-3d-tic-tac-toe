"use client";
import { INavLink } from "@/types";
import React from "react";
import Link from "next/link";
import { headerActions, useActionCreators, useStateSelector } from "@/state";
import { usePathname } from "next/navigation";

const headerLinks = [
  {
    route: "/",
    label: "Home",
    translateKey: "home",
  },
  {
    route: "/play-game",
    label: "Play",
    translateKey: "play",
  },
  {
    route: "/rules",
    label: "Rules",
    translateKey: "rules",
  },
  {
    route: "/about-game",
    label: "About",
    translateKey: "about",
  },
  {
    route: "/replay",
    label: "See Replays",
    translateKey: "replays",
  },
];

const HeaderLinks = () => {
  const actions = useActionCreators(headerActions);
  const pathname = usePathname();

  return (
    <ul
      className={`flex-col flex items-end gap-y-2 justify-center gap-x-[calc(5vw_-18px)] flex-wrap z-[501] `}
    >
      {headerLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          <li
            onClick={() => actions.closeBurgerMenu()}
            className="relative"
            key={link.label}
          >
            <Link
              draggable="false"
              className={`link-underline capitalize text-[22px] ${
                isActive && "text-primary-500 before:left-0 before:w-full"
              }`}
              href={link.route}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
