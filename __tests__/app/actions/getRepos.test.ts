import { getRepos } from "@/app/actions"
import nodeFetch from "node-fetch"

jest.mock("node-fetch", () =>
  jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: "mocked data" }),
    }),
  ),
)

describe("getRepos", () => {
  // beforeEach(() => {
  //   nodeFetch.mockClear();
  // });

  it("should fetch data and process it correctly", async () => {
    const result = await getRepos()
    expect(nodeFetch).toHaveBeenCalledWith(
      "https://api.github.com/users/nortonx/repos",
      {
        method: "GET",
      },
    )
    expect(result).toBeDefined()
  })
})
