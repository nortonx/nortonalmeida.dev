"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section className="relative flex flex-col items-start justify-center min-h-[85vh] py-20 gap-8 overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10 transform translate-x-1/3 -translate-y-1/3">
				<div className="w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl filter" />
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="space-y-6 max-w-4xl"
			>
				<motion.div variants={item} className="space-y-2">
					<span className="text-primary font-medium tracking-wide text-sm uppercase">
						Portfolio
					</span>
					<h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-2">
						Norton Almeida
					</h1>
					<h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-300 flex flex-wrap gap-2 items-center">
						Solutions Architect
						<span className="w-1.5 h-1.5 rounded-full bg-primary mx-2" />
						Frontend Specialist
					</h2>
				</motion.div>

				<motion.div
					variants={item}
					className="flex flex-wrap gap-2 text-sm text-muted-foreground font-mono"
				>
					{[
						"JavaScript",
						"TypeScript",
						"React",
						"Next.js",
						"Vue",
						"Node.js",
					].map((tech) => (
						<span
							key={tech}
							className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
						>
							{tech}
						</span>
					))}
				</motion.div>

				<motion.div variants={item}>
					<p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
						Designing scalable solutions and crafting exceptional user
						experiences. With over <strong>20 years</strong> in technology and a
						specialization in frontend development, I bridge the gap between
						complex backend logic and beautiful, intuitive interfaces.
						<br />
						<span className="block mt-4 text-sm text-slate-500 italic">
							Bachelor's in Information Systems • Postgrad Solutions Architect
							(2025)
						</span>
					</p>
				</motion.div>

				<motion.div variants={item} className="flex gap-4 pt-4">
					<Button
						asChild
						size="lg"
						className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
					>
						<Link href="mailto:norton.almeida@gmail.com">
							<Mail className="mr-2 h-4 w-4" /> Get in Touch
						</Link>
					</Button>

					<div className="flex gap-2">
						<Button
							asChild
							variant="outline"
							size="icon"
							className="rounded-full"
						>
							<Link
								href="https://linkedin.com/in/norton-almeida"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="icon"
							className="rounded-full"
						>
							<Link
								href="https://github.com/nortonx"
								target="_blank"
								rel="noopener noreferrer"
								title="GitHub"
							>
								<Github className="h-5 w-5" />
							</Link>
						</Button>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
