import { render, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { beforeEach, afterEach } from "@jest/globals"
import SkillCloud from "@/components/custom/SkillCloud"

describe("SkillCloud", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("renders a span for each skill", () => {
    const skills = ["React", "Vue", "Angular"]
    const { container } = render(<SkillCloud skills={skills} />)

    // Each skill gets a motion.span (rendered as plain span by mock)
    const spans = container.querySelectorAll(".flex-wrap > span")
    expect(spans).toHaveLength(3)
  })

  it("renders skill text after timers fire", () => {
    const skills = ["React", "TypeScript"]
    render(<SkillCloud skills={skills} />)

    // Advance past delays and typing
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
  })

  it("applies the expected container classes", () => {
    const { container } = render(<SkillCloud skills={["Node"]} />)
    const wrapper = container.firstElementChild
    expect(wrapper).toHaveClass("flex", "flex-wrap", "gap-3")
  })

  it("renders empty list without errors", () => {
    const { container } = render(<SkillCloud skills={[]} />)
    const spans = container.querySelectorAll(".flex-wrap > span")
    expect(spans).toHaveLength(0)
  })
})
