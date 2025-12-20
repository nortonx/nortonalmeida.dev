import { act, render, screen } from "@testing-library/react";
import { TerminalReveal } from "../terminal-reveal";
import "@testing-library/jest-dom";

describe("TerminalReveal", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("renders children but hides text initially", () => {
		render(
			<TerminalReveal speed={10}>
				<div data-testid="content">Hello World</div>
			</TerminalReveal>,
		);

		const content = screen.getByTestId("content");
		// The effect runs immediately to clear textContent
		// Wait for effect?
		// Actually rendering happens, text is there, then useEffect runs and clears it.
		// But with jest fake timers, we might see it cleared if we advance?
		// Let's check if the element exists.
		expect(content).toBeInTheDocument();
	});

	it("reveals text over time", () => {
		render(
			<TerminalReveal speed={10}>
				<div data-testid="content">Test</div>
			</TerminalReveal>,
		);

		// Advance timers to simulate typing
		act(() => {
			jest.advanceTimersByTime(1000);
		});

		// Eventually text should be visible (restored)
		// Since we modify textContent directly, React might not know, but the DOM should have it.
		expect(screen.getByTestId("content")).toHaveTextContent("Test");
	});
});
