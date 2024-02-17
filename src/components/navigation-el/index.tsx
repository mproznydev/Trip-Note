import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CustomLink from "@/components/custom-link";
import {
  NavigationElTrigger,
  type NavigationElTriggerProps,
} from "@/components/navigation-el-trigger";
import { Locale } from "@/i18n.config";

export interface NavigationElProps extends NavigationElTriggerProps {
  lang: Locale;
  menuLinks?: {
    label: string;
    url: string;
  }[];
}

const NavigationEl = ({
  triggerLabel,
  triggerUrl,
  lang,
  menuLinks,
}: NavigationElProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationElTrigger
            triggerUrl={triggerUrl}
            triggerLabel={triggerLabel}
          ></NavigationElTrigger>
          <NavigationMenuContent>
            {menuLinks &&
              menuLinks.map((link, index) => (
                <NavigationMenuLink key={index}>
                  <CustomLink
                    lang={lang}
                    href={link.url}
                    legacyBehavior
                    passHref
                  >
                    {link.label}
                  </CustomLink>
                </NavigationMenuLink>
              ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationEl;
