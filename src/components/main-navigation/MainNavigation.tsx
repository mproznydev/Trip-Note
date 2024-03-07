import React from "react";
import { NavigationElementProps } from "../navigation-element/NavigationElement";
import NavigationElement from "../navigation-element/NavigationElement";
import { Locale } from "@/i18n.config";
import { Button } from "../ui/button";

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
    triggerLabel: "My Routes",
    triggerUrl: "/my-routes",
    menuLinks: [
      {
        label: "second page",
        url: "/second page",
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
    <>
      <div className="flex justify-between">
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
    </>
  );
};

export default MainNavigation;
