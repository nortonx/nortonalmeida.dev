import { getRepos } from "@/app/actions"
import { describe, it, expect, beforeEach, jest } from "@jest/globals"

const mockFetch = jest.fn<typeof fetch>()
global.fetch = mockFetch

describe("getRepos", () => {
  beforeEach(() => {
    mockFetch.mockClear()
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: "mocked data" }),
    } as Response)
  })

  it("should fetch data and process it correctly", async () => {
    const result = await getRepos()
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.github.com/users/nortonx/repos",
      { next: { revalidate: 3600 } },
    )
    expect(result).toBeDefined()
  })
})
