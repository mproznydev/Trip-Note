import React from "react";
import { NavigationElementProps } from "../navigation-element/NavigationElement";
import NavigationElement from "../navigation-element/NavigationElement";
import { Locale } from "@/i18n.config";
import { Button } from "../ui/button";
import Logo from "../../assets/placeholder-logo-1.png";
import Image from "next/image";

const navigationElements = [
  {
    triggerLabel: "Home",
    triggerUrl: "/home",
  },
  {
    triggerLabel: "Dashboard",
    triggerUrl: "/dashboard",
    menuLinks: [
      {
        label: "first page",
        url: "/first page",
      },
    ],
  },
  {
    triggerLabel: "My Trips",
    triggerUrl: "/my-trips",
    menuLinks: [
      {
        label: "Add Trip",
        url: "/add-trip",
      },
    ],
  },
  {
    triggerLabel: "Explore",
    triggerUrl: "/explore",
    menuLinks: [
      {
        label: "second page",
        url: "/second page",
      },
      {
        label: "Test test",
        url: "/second page",
      },
    ],
  },
] as NavigationElementProps[];

const rightNavigationElements = [
  {
    triggerLabel: "Notifications",
    triggerUrl: "/notifications",
  },
  {
    triggerLabel: "Contact Us",
    triggerUrl: "/contact",
  },
  {
    triggerLabel: "Login",
    triggerUrl: "/login",
  },
] as NavigationElementProps[];

interface MainNavigationProps {
  lang: Locale;
}

const MainNavigation = ({ lang }: MainNavigationProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <a href="/home">
          <Image
            src={Logo}
            className="min-w-[160px] w-[160px]"
            alt="Page logo"
          />
        </a>
        {navigationElements.map(
          ({ triggerLabel, triggerUrl, menuLinks }, index) => (
            <NavigationElement
              lang={lang}
              key={index}
              triggerLabel={triggerLabel}
              triggerUrl={triggerUrl}
              menuLinks={menuLinks}
            ></NavigationElement>
          )
        )}
      </div>
      <div className="flex">
        {rightNavigationElements.map(
          ({ triggerLabel, triggerUrl, menuLinks }, index) => (
            <NavigationElement
              lang={lang}
              key={index}
              triggerLabel={triggerLabel}
              triggerUrl={triggerUrl}
              menuLinks={menuLinks}
            ></NavigationElement>
          )
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
