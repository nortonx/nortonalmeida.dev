import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import XSection from "@/components/custom/XSection"

describe("XSection", () => {
  it("renders the section with correct aria-label", () => {
    render(<XSection title="Hello" />)
    const section = screen.getByLabelText("Hello")
    expect(section).toBeInTheDocument()
    expect(section.tagName.toLowerCase()).toBe("section")
  })

  it("renders children content", () => {
    render(
      <XSection title="Parent">
        <p>Child content</p>
      </XSection>,
    )
    expect(screen.getByLabelText("Parent")).toBeInTheDocument()
    expect(screen.getByText(/child content/i)).toBeInTheDocument()
  })

  it("applies base classes and aria-label", () => {
    render(<XSection title="Styled" />)
    const section = screen.getByLabelText("Styled")
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass("relative")
    expect(section).toHaveClass("py-8")

    const heading = section.querySelector("h2")
    expect(heading).not.toBeNull()
    expect(heading).toHaveClass("font-mono")
  })
})
