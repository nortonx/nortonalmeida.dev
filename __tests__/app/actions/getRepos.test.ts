import { getRepos } from "@/app/actions";

// Mock global fetch
global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve({ data: "mocked data" }),
	}),
) as jest.Mock;

describe("getRepos", () => {
	beforeEach(() => {
		(global.fetch as jest.Mock).mockClear();
	});

	it("should fetch data and process it correctly", async () => {
		const result = await getRepos();
		expect(global.fetch).toHaveBeenCalledWith(
			"https://api.github.com/users/nortonx/repos",
		);
		expect(result).toBeDefined();
	});
});
