import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/header";

// Mock nested components to keep snapshot small and stable
jest.mock("@/components/nav-menubar", () => () => (
	<nav data-testid="nav-menubar" />
));
jest.mock("@/components/mode-toggle", () => () => (
	<button type="button" data-testid="mode-toggle">
		Toggle
	</button>
));

describe("Header component", () => {
	it("renders basics and matches snapshot", async () => {
		const { container } = render(<Header />);
		const header = await screen.findByTestId("header-component");

		// Basic presence
		expect(header).toBeInTheDocument();

		// Title link
		const homeLink = screen.getByRole("link", {
			name: /https:\/\/nortonalmeida\.dev/i,
		});
		expect(homeLink).toHaveAttribute("href", "/");

		// Child components (mocked)
		expect(screen.getByTestId("nav-menubar")).toBeInTheDocument();
		expect(screen.getByTestId("mode-toggle")).toBeInTheDocument();

		// Snapshot of full render (kept small due to mocks)
		expect(container).toMatchSnapshot();
	});
});
