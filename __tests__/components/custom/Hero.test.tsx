import { render, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { beforeEach, afterEach } from "@jest/globals"
import Hero from "@/components/custom/Hero"

describe("Hero", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("renders the hero section", () => {
    render(<Hero />)
    const section = document.querySelector("section")
    expect(section).toBeInTheDocument()
  })

  it("types out the name after its delay", () => {
    render(<Hero />)

    // Name starts at 200ms delay, speed 70ms per char
    act(() => {
      jest.advanceTimersByTime(200 + 70 * 14 + 100)
    })

    expect(screen.getByText("Norton Almeida")).toBeInTheDocument()
  })

  it("types out the subtitle after its delay", () => {
    render(<Hero />)

    // Subtitle starts at 1200ms delay
    act(() => {
      jest.advanceTimersByTime(1200 + 55 * 43 + 100)
    })

    expect(
      screen.getByText("Solutions Architect \u00b7 Full Stack Developer"),
    ).toBeInTheDocument()
  })

  it("renders contact and social links", () => {
    render(<Hero />)

    expect(screen.getByTitle("LinkedIn")).toBeInTheDocument()
    expect(screen.getByTitle("GitHub")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /get in touch/i }),
    ).toBeInTheDocument()
  })

  it("renders tech tags after their delays", () => {
    render(<Hero />)

    // Tech tags start at 2600ms with 120ms stagger, speed 40ms
    act(() => {
      jest.advanceTimersByTime(2600 + 10 * 120 + 40 * 10 + 200)
    })

    expect(screen.getByText("JavaScript")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
  })
})
