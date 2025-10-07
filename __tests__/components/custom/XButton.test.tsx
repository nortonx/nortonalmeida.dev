import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import XButton from "@/components/custom/XButton"

describe("XButton", () => {
  it("renders label when no children provided", () => {
    render(<XButton label="Click Me" />)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("rounded-full")
    // Default paddings apply when size is not provided
    expect(button).toHaveClass("px-4")
    expect(button).toHaveClass("py-2")
  })

  it("uses children over label when both are provided", () => {
    render(<XButton label="Click Me">Go</XButton>)
    const button = screen.getByRole("button", { name: /go/i })
    expect(button).toBeInTheDocument()
    expect(screen.queryByText(/click me/i)).not.toBeInTheDocument()
  })

  it("omits default paddings when size is provided", () => {
    render(<XButton label="NoPad" size="sm" />)
    const button = screen.getByRole("button", { name: /nopad/i })
    expect(button).toHaveClass("rounded-full")
    expect(button).not.toHaveClass("px-4")
    expect(button).not.toHaveClass("py-2")
  })

  it("fires onClick handler when clicked", () => {
    const onClick = jest.fn()
    render(<XButton label="Click" onClick={onClick} />)
    const button = screen.getByRole("button", { name: /click/i })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
