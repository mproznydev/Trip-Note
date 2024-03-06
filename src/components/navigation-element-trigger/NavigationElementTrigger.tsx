import {
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomLink from "@/components/custom-link";

export interface NavigationElementTriggerProps {
  triggerLabel: string;
  triggerUrl?: string;
}

export const NavigationElementTrigger = ({
  triggerUrl,
  triggerLabel,
}: NavigationElementTriggerProps) => {
  const TriggerLabelComponent = (
    <NavigationMenuTrigger>{triggerLabel}</NavigationMenuTrigger>
  );

  return triggerUrl ? (
    <CustomLink lang="pl" href={triggerUrl} legacyBehavior passHref>
      <NavigationMenuLink>{TriggerLabelComponent}</NavigationMenuLink>
    </CustomLink>
  ) : (
    TriggerLabelComponent
  );
};
