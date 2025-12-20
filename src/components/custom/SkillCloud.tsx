"use client";

import { motion } from "framer-motion";

interface SkillCloudProps {
	skills: string[];
}

export default function SkillCloud({ skills }: SkillCloudProps) {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, scale: 0.8 },
		show: { opacity: 1, scale: 1 },
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="flex flex-wrap gap-3"
		>
			{skills.map((skill) => (
				<motion.span
					key={skill}
					variants={item}
					className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-default shadow-sm"
				>
					{skill}
				</motion.span>
			))}
		</motion.div>
	);
}
