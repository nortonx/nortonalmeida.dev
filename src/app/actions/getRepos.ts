"use server"

import nodeFetch from "node-fetch"

export async function getRepos() {
  try {
    const response = await nodeFetch(
      "https://api.github.com/users/nortonx/repos",
    )

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`,
      )
    }
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
