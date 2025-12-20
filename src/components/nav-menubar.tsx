"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#education", label: "Education" },
	{ href: "#skills", label: "Skills" },
];

export default function NavMenubar() {
	return (
		<NavigationMenu className="max-w-full w-full justify-center md:justify-start">
			<NavigationMenuList className="flex-wrap gap-2 md:gap-4">
				{navItems.map((item, index) => (
					<NavigationMenuItem key={item.href}>
						<NavigationMenuLink
							href={item.href}
							className="block px-2 py-1 md:px-3 md:py-2 text-sm md:text-base font-bold uppercase tracking-widest text-primary/80 hover:text-primary transition-colors"
						>
							{item.label}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
