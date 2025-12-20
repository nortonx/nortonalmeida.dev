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

	// biome-ignore lint/correctness/useExhaustiveDependencies: children dependency needed to restart effect on content change
	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const textNodes: { node: Text; content: string }[] = [];
		let animationTimeoutId: NodeJS.Timeout;

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
		// eslint-disable-next-line prefer-const
		let cancelled = false;

		const typeNextChar = () => {
			if (cancelled) return;
			if (currentNodeIndex >= textNodes.length) {
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
			animationTimeoutId = setTimeout(typeNextChar, delay);
		};

		// Start typing
		typeNextChar();

		return () => {
			cancelled = true;
			clearTimeout(animationTimeoutId);
			// Restore text if unmounted mid-typing
			textNodes.forEach(({ node, content }) => {
				node.textContent = content;
			});
		};
	}, [speed, children]);

	return (
		<div ref={containerRef} className={className}>
			<div className="opacity-100">{children}</div>
			{/* Cursor element could be added here if we track position. */}
			{/* Pure text manipulation makes it hard to place a cursor absolutely, */}
			{/* so we rely on the 'appearing' text as the effect. */}
		</div>
	);
}
