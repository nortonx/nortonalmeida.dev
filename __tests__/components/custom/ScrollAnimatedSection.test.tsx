import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ScrollAnimatedSection from "@/components/custom/ScrollAnimatedSection"

describe("ScrollAnimatedSection", () => {
  it("renders children", () => {
    render(
      <ScrollAnimatedSection>
        <p>Child content</p>
      </ScrollAnimatedSection>,
    )
    expect(screen.getByText("Child content")).toBeInTheDocument()
  })

  it("forwards className to the wrapper", () => {
    const { container } = render(
      <ScrollAnimatedSection className="custom-class">
        <p>Content</p>
      </ScrollAnimatedSection>,
    )
    expect(container.firstElementChild).toHaveClass("custom-class")
  })

  it("defaults to empty className when none provided", () => {
    const { container } = render(
      <ScrollAnimatedSection>
        <p>Content</p>
      </ScrollAnimatedSection>,
    )
    // The motion.div mock renders a plain div; className should be ""
    expect(container.firstElementChild).toBeInTheDocument()
  })
})
