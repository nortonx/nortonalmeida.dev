"use server";

export async function getRepos() {
  try {
    const response = await fetch("https://api.github.com/users/nortonx/repos")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
    }
    return await response.json()
  } catch(err: unknown) {
    console.error(err)
    return null
  }

}
