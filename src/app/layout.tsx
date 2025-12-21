import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import type React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { TerminalReveal } from "@/components/terminal-reveal";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "www.nortonalmeida.dev",
	description: "Personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistMono.variable} font-mono antialiased`}>
				{/* Background Decorative Elements */}
				<div className="fixed top-0 right-0 -z-10 opacity-20 dark:opacity-10 transform translate-x-1/3 -translate-y-1/3">
					<div className="w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl filter" />
				</div>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="container mx-auto max-w-4xl dark:text-white text-gray-900">
						<TerminalReveal speed={5}>
							<Header />
							<main className="my-10">{children}</main>
						</TerminalReveal>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
