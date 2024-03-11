import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CustomLink from "@/components/custom-link";
import {
  NavigationElementTrigger,
  type NavigationElementTriggerProps,
} from "@/components/navigation-element-trigger/NavigationElementTrigger";
import { Locale } from "@/i18n.config";

export interface NavigationElementProps extends NavigationElementTriggerProps {
  lang: Locale;
  menuLinks?: {
    label: string;
    url: string;
  }[];
}

const NavigationElement = ({
  triggerLabel,
  triggerUrl,
  lang,
  menuLinks,
}: NavigationElementProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationElementTrigger
            triggerUrl={triggerUrl}
            triggerLabel={triggerLabel}
          ></NavigationElementTrigger>
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

export default NavigationElement;
