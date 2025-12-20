import type { LucideIcon } from "lucide-react";
import type * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface XInputProps extends React.ComponentProps<typeof Input> {
	icon?: LucideIcon;
}

export default function XInput({
	className,
	icon: Icon,
	type = "text",
	...props
}: XInputProps) {
	return (
		<div className="relative">
			{Icon && (
				<Icon
					className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
					aria-hidden="true"
				/>
			)}
			<Input
				type={type}
				{...props}
				className={cn("rounded-full", Icon && "pl-9", className)}
			/>
		</div>
	);
}
