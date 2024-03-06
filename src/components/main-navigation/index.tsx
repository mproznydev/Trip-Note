import React from "react";
import { NavigationElementProps } from "../navigation-element/NavigationElement";
import NavigationElement from "../navigation-element/NavigationElement";
import { Locale } from "@/i18n.config";

const navigationElements = [
  {
    triggerLabel: "home",
    triggerUrl: "/home",
    menuLinks: [
      {
        label: "home",
        url: "/home",
      },
    ],
  },
  {
    triggerLabel: "login",
    triggerUrl: "/login",
    menuLinks: [
      {
        label: "login",
        url: "/login",
      },
    ],
  },
  {
    triggerLabel: "first page",
    triggerUrl: "/first page",
    menuLinks: [
      {
        label: "first page",
        url: "/first page",
      },
    ],
  },
  {
    triggerLabel: "second page",
    triggerUrl: "/second page",
    menuLinks: [
      {
        label: "second page",
        url: "/second page",
      },
    ],
  },
] as NavigationElementProps[];

interface MainNavigationProps {
  lang: Locale;
}

const MainNavigation = ({ lang }: MainNavigationProps) => {
  return (
    <div className="flex">
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
  );
};

export default MainNavigation;
