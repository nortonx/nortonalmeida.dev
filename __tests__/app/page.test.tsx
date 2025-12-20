import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Home Page", () => {
	it("should render the page and match snapshot", async () => {
		const { container } = render(<Page />);
		const page = await screen.findByTestId("home-page");
		expect(page).toBeDefined();
		expect(container).toMatchSnapshot();
	});
});
