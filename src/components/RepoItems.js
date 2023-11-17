import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";


const RepoItem = (props) => {
    const repo = props.repo
    return (
        <div className="hover:scale-[1.001]">
            <a href={`${repo.repo}`} rel="noreferrer" target="_blank">
                <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">

                    <h1 className="font-semibold mb-1 dark:text-slate-50">{repo.name}</h1>

                    <p className="text-sm text-gray-800/70 dark:text-gray-100/70">{repo.description}</p>

                    <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">

                        <p className="flex flex-row items-center justify-center">
                            <AiOutlineStar className="mr-1 w-4 h-4" /> {repo.stars}
                        </p>
                        <p className="flex flex-row items-center justify-center">
                            <BiGitRepoForked className="mr-1 w-4 h-4" /> {repo.forks}
                        </p>
                        <p className="flex flex-row items-center">
                            <span className="w-3 h-3 rounded-full mr-1" style={{ background: repo.language.color, border: `solid 3px ${repo.language.color}` }} />
                            {repo.language.name}
                        </p>
                    </div>
                </div>
            </a>
        </div >
    )
}

export default RepoItem