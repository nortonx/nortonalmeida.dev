import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import XSection from "@/components/custom/XSection"

describe("XSection", () => {
  it("renders title", () => {
    render(<XSection title="Hello" />)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })

  it("renders children content", () => {
    render(
      <XSection title="Parent">
        <p>Child content</p>
      </XSection>,
    )
    expect(screen.getByText(/parent/i)).toBeInTheDocument()
    expect(screen.getByText(/child content/i)).toBeInTheDocument()
  })

  it("applies base classes and aria-label", () => {
    render(<XSection title="Styled" />)
    const section = screen.getByLabelText("Styled")
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass("relative")
    expect(section).toHaveClass("py-8")

    const titleEl = screen.getByText("Styled")
    expect(titleEl.tagName.toLowerCase()).toBe("h2")
    expect(titleEl).toHaveClass("text-3xl")
    expect(titleEl).toHaveClass("font-bold")
  })
})
