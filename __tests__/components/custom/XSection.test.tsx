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
    expect(section).toHaveClass("border")
    expect(section).toHaveClass("rounded-md")
    expect(section).toHaveClass("p-4")
    expect(section).toHaveClass("border-slate-300")

    const titleEl = screen.getByText("Styled")
    expect(titleEl.tagName.toLowerCase()).toBe("span")
    expect(titleEl).toHaveClass("absolute")
    expect(titleEl).toHaveClass("bg-background")
  })
})
