"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

export interface NSectionProps extends React.ComponentProps<"section"> {
	title: string;
}

export default function XSection({
	title,
	className,
	children,
	...props
}: NSectionProps) {
	return (
		<ScrollAnimatedSection className="w-full">
			<section
				aria-label={title}
				className={cn("relative py-8 md:py-12", className)}
				{...props}
			>
				<div className="flex items-center gap-4 mb-8 md:mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 shrink-0">
						{title}
					</h2>
					<div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
				</div>

				{children}
			</section>
		</ScrollAnimatedSection>
	);
}
