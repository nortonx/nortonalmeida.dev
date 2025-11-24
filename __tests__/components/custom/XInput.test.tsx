import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import XInput from "@/components/custom/XInput"
import { Search } from "lucide-react"

describe("XInput", () => {
  it("renders input with default type text", () => {
    render(<XInput placeholder="Your name" />)
    const input = screen.getByPlaceholderText(/your name/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("type", "text")
    // Rounded style applied
    expect(input).toHaveClass("rounded-full")
  })

  it("respects provided type and className", () => {
    render(<XInput type="email" placeholder="Email" className="custom" />)
    const input = screen.getByPlaceholderText(/email/i)
    expect(input).toHaveAttribute("type", "email")
    expect(input).toHaveClass("custom")
  })

  it("renders icon when passed and applies left padding", () => {
    render(<XInput placeholder="Search" icon={Search} />)
    const input = screen.getByPlaceholderText(/search/i)
    // Input should have additional left padding
    expect(input).toHaveClass("pl-9")

    // Icon is rendered for visual aid
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute("aria-hidden", "true")
  })
})
