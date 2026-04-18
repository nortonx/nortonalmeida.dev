import { render, screen, act } from "@testing-library/react"
import Page from "@/app/page"
import { describe, it, expect, beforeEach, afterEach } from "@jest/globals"

describe("Home Page", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("should render the page and match snapshot", () => {
    const { container } = render(<Page />)

    // Advance timers so typewriter effects render full text
    act(() => {
      jest.advanceTimersByTime(30000)
    })

    const page = screen.getByTestId("home-page")
    expect(page).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
