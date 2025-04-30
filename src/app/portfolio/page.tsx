import { getRepos } from "@/app/actions/getRepos"
import Link from "next/link"

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default async function Portfolio() {
  const repos = await getRepos()
  console.log(repos)
  return (
    <div>
      <h1 className="text-2xl font-bold">This is the Portfolio Page</h1>
      <ul>
      {repos?.map((repo: Repo) => {
        return <li key={repo?.id} className="my-4">
          <div>
            <span className="font-bold">{repo?.name}</span>:
            <Link href={repo?.html_url} className="text-slate-400" data-testid={repo.name} target={"_blank"}> {repo?.description}</Link>
            <div className="italic">Description - {repo?.description}</div>
          </div>
        </li>
      })}
      </ul>
    </div>
  )
}
