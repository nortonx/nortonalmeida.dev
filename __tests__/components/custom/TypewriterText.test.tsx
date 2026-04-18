import { render, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { beforeEach, afterEach } from "@jest/globals"
import TypewriterText from "@/components/custom/TypewriterText"

describe("TypewriterText", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("renders text progressively when in view", () => {
    const { container } = render(<TypewriterText text="Hello" speed={50} />)
    const span = container.querySelector("span")!

    // Initially empty
    expect(span.textContent).toBe("")

    // Advance through each character
    act(() => {
      jest.advanceTimersByTime(50)
    })
    expect(span.textContent).toBe("H")

    act(() => {
      jest.advanceTimersByTime(200)
    })
    expect(span.textContent).toBe("Hello")
  })

  it("respects the delay prop before starting to type", () => {
    const { container } = render(
      <TypewriterText text="Hi" speed={50} delay={500} />,
    )
    const span = container.querySelector("span")!

    // Nothing typed yet — still in delay
    act(() => {
      jest.advanceTimersByTime(400)
    })
    expect(span.textContent).toBe("")

    // After delay expires, first character appears
    act(() => {
      jest.advanceTimersByTime(150)
    })
    expect(span.textContent).toBe("H")
  })

  it("clears timers on unmount", () => {
    const { unmount } = render(
      <TypewriterText text="Cleanup" speed={50} delay={100} />,
    )

    act(() => {
      jest.advanceTimersByTime(50)
    })

    // Should not throw when unmounting mid-animation
    unmount()

    // Advancing timers after unmount should not cause errors
    act(() => {
      jest.advanceTimersByTime(1000)
    })
  })

  it("renders full text after all intervals complete", () => {
    const text = "Done"
    render(<TypewriterText text={text} speed={10} />)

    act(() => {
      jest.advanceTimersByTime(10 * text.length + 50)
    })

    expect(screen.getByText("Done")).toBeInTheDocument()
  })
})
