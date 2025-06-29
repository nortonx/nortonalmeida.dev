import { getRepos } from "@/app/actions/getRepos"
import Link from "next/link"

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default async function Portfolio() {
  // @ts-expect-error Type "unknown" is not assignable to type "Repo"
  const repos: Repo[] = await getRepos()

  return (
    <div data-testid="portfolio-page">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="repository-list">
      {repos?.map((repo: Repo) => {
        return <li key={repo?.id} className="my-4">
          <div>
            <Link href={repo?.html_url} className="text-slate-400" data-testid={repo.name} target={"_blank"}> {repo?.name}</Link>
            <div className="italic">Description - {repo?.description}</div>
          </div>
        </li>
      })}
      </ul>
    </div>
  )
}
