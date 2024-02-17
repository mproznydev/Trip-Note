import {
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomLink from "@/components/custom-link";

export interface NavigationElTriggerProps {
  triggerLabel: string;
  triggerUrl?: string;
}

export const NavigationElTrigger = ({
  triggerUrl,
  triggerLabel,
}: NavigationElTriggerProps) => {
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
