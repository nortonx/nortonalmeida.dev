import { render, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { beforeEach, afterEach } from "@jest/globals"
import Timeline from "@/components/custom/Timeline"

const minimalItem = {
  title: "Developer",
  company: "Acme Corp",
  period: "2023 - Present",
  location: "Remote",
}

const fullItem = {
  ...minimalItem,
  description: "Building great software.",
  skills: ["React", "TypeScript", "Node.js"],
}

describe("Timeline", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("renders an entry for each item", () => {
    const { container } = render(<Timeline items={[minimalItem, fullItem]} />)
    // Each item has a timeline dot
    const dots = container.querySelectorAll(".rounded-full")
    expect(dots.length).toBe(2)
  })

  it("renders title, period, company, and location after timers", () => {
    render(<Timeline items={[minimalItem]} />)

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(screen.getByText("Developer")).toBeInTheDocument()
    expect(screen.getByText("Acme Corp")).toBeInTheDocument()
    expect(screen.getByText("2023 - Present")).toBeInTheDocument()
    expect(screen.getByText("Remote")).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    render(<Timeline items={[fullItem]} />)

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(screen.getByText("Building great software.")).toBeInTheDocument()
  })

  it("renders skills list when provided", () => {
    render(<Timeline items={[fullItem]} />)

    act(() => {
      jest.advanceTimersByTime(10000)
    })

    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Node.js")).toBeInTheDocument()
  })

  it("omits description and skills when not provided", () => {
    const { container } = render(<Timeline items={[minimalItem]} />)

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    const lists = container.querySelectorAll("ul")
    expect(lists).toHaveLength(0)

    // No prose section for description
    const proseDiv = container.querySelector(".prose")
    expect(proseDiv).toBeNull()
  })
})
