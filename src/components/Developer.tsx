import { FunctionComponent, memo } from "react";
import Avatar from "@common/Avatar";
import GitRepositoryIcon from "~/assets/svgs/git_repository.svg?component";
import FireIcon from "~/assets/svgs/fire.svg?component";
import HeartIcon from "~/assets/svgs/heart.svg?component";

interface RepositoryProps {
  developer?: {
    avatar?: string;
    name?: string;
    repo?: {
      name?: string;
      description?: string;
      url?: string;
    };
    username?: string;
    sponsorUrl?: string;
    url?: string;
  };
  index?: number | any;
}

const Repository: FunctionComponent<RepositoryProps> = ({
  developer,
  index,
}) => {
  return (
    <div className="flex flex-col justify-between gap-3 p-4 border-b sm:gap-0 md:flex-row flex-reverse border-zinc-800">
      <div className="grid w-full gap-2">
        <div className="flex space-x-2">
          <span className="mr-4 text-sm text-slate-400">
            <a href={developer?.url || ""}> {index + 1}</a>
          </span>
          <div className="flex space-x-4">
            <a href={developer?.url || ""}>
              <Avatar
                url={developer?.avatar}
                username={developer?.username}
                size="md"
              />
            </a>
            <div>
              <div className="mb-1 text-2xl font-semibold leading-5 text-blue-400 no-underline hover:underline hover:decoration-blue-400">
                <a href={developer?.url || ""}>{developer?.name}</a>
              </div>
              <div className="text-1xl text-slate-400 hover:text-blue-400 hover:underline hover:decoration-blue-400">
                <a href={developer?.url || ""}>{developer?.username}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-1 text-left sm:w-full sm:place-content-end">
        {developer?.repo && (
          <div className="flex space-x-1 text-orange-400">
            <FireIcon className="w-5" />
            <span className="text-sm uppercase text-slate-400 mt-0.5">
              Popular Repo
            </span>
          </div>
        )}
        <a href={developer?.repo?.url || ""}>
          <div className="flex space-x-1">
            <GitRepositoryIcon className="w-4 fill-gray-400" />
            <span className="text-sm font-semibold text-blue-400 no-underline uppercase hover:underline hover:decoration-blue-400">
              {developer?.repo?.name}
            </span>
          </div>
        </a>
        <div className="flex w-64 text-sm break-words text-slate-400">
          <span>{developer?.repo?.description}</span>
        </div>
      </div>
      <div className="flex items-start w-full space-x-4 sm:place-content-end">
        {developer?.sponsorUrl && (
          <a href={developer?.sponsorUrl || ""}>
            <button className="px-3 py-1 text-sm font-medium border rounded-md text-slate-200 bg-zinc-900 border-zinc-800 hover:border-zinc-600">
              <div className="flex space-x-2">
                <HeartIcon className="w-4 text-pink-400" />
                <span>Sponsor</span>
              </div>
            </button>
          </a>
        )}
        <button className="px-3 py-1 text-sm font-medium border rounded-md text-slate-200 bg-zinc-900 border-zinc-800 hover:border-zinc-600">
          Follow
        </button>
      </div>
    </div>
  );
};

export default memo(Repository);
