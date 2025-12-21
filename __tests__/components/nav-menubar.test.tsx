import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavMenubar from "@/components/nav-menubar";
import pkg from "../../package.json";

// Set environment variable for tests (mirrors next.config.ts behavior)
process.env.NEXT_PUBLIC_APP_VERSION = pkg.version;

describe("NavMenubar component", () => {
	it("renders navigation links", () => {
		render(<NavMenubar />);

		expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /experience/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /education/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /skills/i })).toBeInTheDocument();
	});

	it("displays the package version", () => {
		render(<NavMenubar />);

		const versionElement = screen.getByText(`v${pkg.version}`);
		expect(versionElement).toBeInTheDocument();
	});
});
