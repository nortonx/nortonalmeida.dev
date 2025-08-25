import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import Header from "@/components/header"

describe("Header component", () => {
  it("Should render correctly and match snapshot", async () => {
    const { container } = render(<Header />)
    const header = await screen.findByTestId("header-component")
    expect(header).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})