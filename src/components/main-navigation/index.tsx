import React from "react";
import { NavigationElProps } from "../navigation-el";
import NavigationEl from "../navigation-el";
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
] as NavigationElProps[];

interface MainNavigationProps {
  lang: Locale;
}

const MainNavigation = ({ lang }: MainNavigationProps) => {
  return (
    <div className="flex">
      {navigationElements.map(
        ({ triggerLabel, triggerUrl, menuLinks }, index) => (
          <NavigationEl
            lang={lang}
            key={index}
            triggerLabel={triggerLabel}
            triggerUrl={triggerUrl}
            menuLinks={menuLinks}
          ></NavigationEl>
        )
      )}
    </div>
  );
};

export default MainNavigation;
