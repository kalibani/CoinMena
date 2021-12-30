import { FunctionComponent, memo } from "react";
import Avatar from "@common/Avatar";
import GitRepositoryIcon from "~/assets/svgs/git_repository.svg?component";
import ForkIcon from "~/assets/svgs/git_fork.svg?component";
import StarIcon from "~/assets/svgs/star.svg?component";
import CaretDown from "~/assets/svgs/caret_down.svg?component";

interface RepositoryProps {
  repo?: {
    author?: string;
    name?: string;
    url?: string;
    description?: string;
    language?: string;
    stars?: number;
    forks?: number;
    currentPeriodStars?: number;
    builtBy?: Array<{
      avatar?: string;
      username?: string;
    }>;
  };
}

const Repository: FunctionComponent<RepositoryProps> = ({ repo }) => {
  return (
    <div className="flex justify-between px-4 py-5 space-x-1 border-b border-zinc-800">
      <div className="grid gap-1">
        <div className="flex space-x-2">
          <span className="text-2xl text-blue-400">
            <a href={repo?.url || ""}>
              <GitRepositoryIcon className="w-4 mt-2 fill-gray-400" />
            </a>
          </span>
          <a
            href={repo?.url || ""}
            className="flex flex-wrap no-underline hover:underline hover:decoration-blue-400"
          >
            <span className="mr-1.5 text-1xl sm:text-2xl text-blue-400">
              {repo?.author}
            </span>
            <span className="mr-1.5 text-1xl sm:text-2xl font-bold text-blue-400">
              /
            </span>
            <span className="font-bold text-blue-400 break-words text-1xl sm:text-2xl">
              {repo?.name}
            </span>
          </a>
        </div>
        <div className="max-w-2xl text-base font-medium break-words text-slate-400">
          {repo?.description}
        </div>
        <div className="flex flex-wrap space-x-1 sm:space-x-4">
          <span className="text-sm capitalize text-slate-400">
            {repo?.language}
          </span>
          <div className="cursor-pointer flex text-sm text-slate-400 space-x-0.5 hover:text-blue-400">
            <StarIcon className="w-5 h-4 hover:fill-blue-400" />
            <span>{repo?.stars}</span>
          </div>
          <div className="cursor-pointer flex text-sm text-slate-400 space-x-0.5 hover:text-blue-400 hover:fill-blue-400">
            <ForkIcon className="w-5 h-4 fill-gray-400 hover:fill-blue-400" />
            <span>{repo?.forks}</span>
          </div>
          <div className="flex space-x-2 text-sm capitalize text-slate-400">
            <span>Built by</span>
            <div className="flex space-x-1">
              {repo?.builtBy?.map((creator, index) => (
                <Avatar
                  key={index}
                  url={creator?.avatar}
                  username={creator?.username}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex">
          <button className="w-auto px-3 py-1 text-base font-medium border sm:px-5 bg-zinc-900 text-slate-200 rounded-l-md border-zinc-800 hover:border-zinc-600">
            <div className="flex text-sm sm:space-x-2 text-slate-400">
              <StarIcon className="w-4" />
              <span className="hidden sm:block sm:font-semibold sm:text-slate-200">
                Star
              </span>
            </div>
          </button>
          <button className="w-10 px-2 py-1 text-base font-medium border border-l-0 sm:px-3 bg-zinc-900 text-slate-200 rounded-r-md border-zinc-800 hover:border-zinc-600 hover:border-l">
            <CaretDown className="w-2 h-2 fill-gray-400" />
          </button>
        </div>
        <div className="flex space-x-2 text-sm sm:px-4 text-slate-400">
          <StarIcon className="w-4" />
          <span>{repo?.currentPeriodStars} stars today</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Repository);
