import { act, render, screen } from "@testing-library/react";
import { TerminalReveal } from "@/components/terminal-reveal";
import "@testing-library/jest-dom";

describe("TerminalReveal", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("renders children and starts typing immediately", () => {
		render(
			<TerminalReveal speed={10}>
				<div data-testid="content">Hello World</div>
			</TerminalReveal>,
		);

		const content = screen.getByTestId("content");
		expect(content).toBeInTheDocument();
		// First character appears synchronously when typeNextChar() runs
		expect(content.textContent).toBe("H");
	});

	it("reveals text character by character", () => {
		render(
			<TerminalReveal speed={10}>
				<div data-testid="content">Hello</div>
			</TerminalReveal>,
		);

		const element = screen.getByTestId("content");

		// First char appears immediately
		expect(element.textContent).toBe("H");

		// After one timer tick, second char appears
		act(() => {
			jest.advanceTimersByTime(20);
		});
		expect(element.textContent?.length).toBeGreaterThan(1);

		// After more time, text progressively reveals
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(element.textContent?.length).toBeGreaterThanOrEqual(3);
	});

	it("eventually shows full text", () => {
		render(
			<TerminalReveal speed={5}>
				<div data-testid="content">Completed</div>
			</TerminalReveal>,
		);

		act(() => {
			jest.runAllTimers();
		});

		expect(screen.getByTestId("content")).toHaveTextContent("Completed");
	});

	it("cleans up without errors on unmount during animation", () => {
		const { unmount } = render(
			<TerminalReveal speed={1000}>
				<div data-testid="content">Restore Me</div>
			</TerminalReveal>,
		);

		// Unmount before typing finishes - should not throw
		unmount();
	});
});
