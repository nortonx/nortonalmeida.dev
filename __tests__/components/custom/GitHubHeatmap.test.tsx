import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import GitHubHeatmap from "@/components/custom/GitHubHeatmap"
import { describe, it, expect, beforeEach, jest } from "@jest/globals"

const mockResponse = {
  total: { lastYear: 128 },
  contributions: [
    { date: "2025-04-14", count: 0, level: 0 },
    { date: "2025-04-15", count: 2, level: 1 },
    { date: "2025-04-16", count: 7, level: 3 },
    { date: "2025-04-17", count: 12, level: 4 },
  ],
}

const mockFetch = jest.fn<typeof fetch>()
global.fetch = mockFetch

describe("GitHubHeatmap", () => {
  beforeEach(() => {
    mockFetch.mockClear()
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response)
  })

  it("renders the heat-map with the total caption once data arrives", async () => {
    render(<GitHubHeatmap />)
    await waitFor(() =>
      expect(screen.getByTestId("github-heatmap")).toBeInTheDocument(),
    )
    expect(
      screen.getByText("128 contributions in the last year"),
    ).toBeInTheDocument()
  })

  it("renders the Less/More legend", async () => {
    render(<GitHubHeatmap />)
    await waitFor(() => screen.getByTestId("github-heatmap"))
    expect(screen.getByText("Less")).toBeInTheDocument()
    expect(screen.getByText("More")).toBeInTheDocument()
  })

  it("hides the section silently when the API fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network"))
    const { container } = render(<GitHubHeatmap />)
    await waitFor(() => expect(mockFetch).toHaveBeenCalled())
    await new Promise((r) => setTimeout(r, 0))
    expect(container.querySelector("[data-testid='github-heatmap']")).toBeNull()
  })
})
