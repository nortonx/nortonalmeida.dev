"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TerminalRevealProps {
	children: React.ReactNode;
	speed?: number; // ms per character
	className?: string;
}

export function TerminalReveal({
	children,
	speed = 10,
	className,
}: TerminalRevealProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const textNodes: { node: Text; content: string }[] = [];

		// 1. Traverse and collect all text nodes
		const walker = document.createTreeWalker(
			container,
			NodeFilter.SHOW_TEXT,
			null,
		);

		let currentNode = walker.nextNode();
		while (currentNode) {
			if (currentNode.textContent?.trim()) {
				textNodes.push({
					node: currentNode as Text,
					content: currentNode.textContent,
				});
				currentNode.textContent = ""; // Hide content initially
			}
			currentNode = walker.nextNode();
		}

		// 2. Typewriter effect
		let currentNodeIndex = 0;
		let currentCharIndex = 0;
		let cancelled = false;

		const typeNextChar = () => {
			if (cancelled) return;
			if (currentNodeIndex >= textNodes.length) {
				setIsTyping(false);
				return;
			}

			const { node, content } = textNodes[currentNodeIndex];

			// Append next character
			node.textContent = content.substring(0, currentCharIndex + 1);
			currentCharIndex++;

			// Move to next node if finished with current
			if (currentCharIndex >= content.length) {
				currentNodeIndex++;
				currentCharIndex = 0;
			}

			// Schedule next char (randomize speed slightly for realism)
			const delay = speed + Math.random() * 10;
			setTimeout(typeNextChar, delay);
		};

		// Start typing
		typeNextChar();

		return () => {
			cancelled = true;
			// Restore text if unmounted mid-typing
			textNodes.forEach(({ node, content }) => {
				node.textContent = content;
			});
		};
	}, [speed]);

	return (
		<div ref={containerRef} className={className}>
			<div
				className={`transition-opacity duration-300 ${isTyping ? "opacity-100" : "opacity-100"}`}
			>
				{children}
			</div>
			{/* Cursor element could be added here if we track position, but pure text manipulation makes it hard to place a cursor absoluteley. 
                We can rely on the 'appearing' text as the effect. 
            */}
		</div>
	);
}
