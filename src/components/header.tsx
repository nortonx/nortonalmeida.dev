"use client";

import Link from "next/link";

import ModeToggle from "@/components/mode-toggle";
import NavMenubar from "@/components/nav-menubar";

export default function Header() {
	return (
		<header
			className="flex flex-col items-center mt-10 gap-4"
			data-testid="header-component"
		>
			<Link href="/" className="text-xl font-bold">
				https://nortonalmeida.dev
			</Link>
			<div className="flex justify-between items-center gap-4">
				<div>
					<NavMenubar />
				</div>
				<ModeToggle />
			</div>
		</header>
	);
}
