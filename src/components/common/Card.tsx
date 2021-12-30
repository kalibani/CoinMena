import { FunctionComponent, memo, ReactChildren } from "react";
import { useNavigate } from "react-router-dom";
import CaretDown from "~/assets/svgs/caret_down.svg?component";

interface CardHeaderProps {
  location?: string;
}

export const CardHeader: FunctionComponent<CardHeaderProps> = ({
  location,
}) => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate({ pathname: path }, { replace: true });
  };
  return (
    <div className="grid gap-2 p-4 border-b sm:justify-between sm:flex sm:w-full sm:bg-zinc-900 border-zinc-800">
      <div className="flex w-48">
        <button
          className={`${
            location === "/trending"
              ? "bg-blue-600 border-blue-600"
              : "bg-black border-zinc-800"
          } px-3 py-1 text-slate-200 text-base font-medium rounded-l-md w-full border  border-r-0`}
          onClick={() => handleClick("/trending")}
        >
          Repositories
        </button>
        <button
          className={`${
            location === "/trending/developers"
              ? "bg-blue-600 border-blue-600"
              : "bg-black border-zinc-800"
          } px-3 py-1 text-slate-200 text-base font-medium rounded-r-md w-full border border-l-0`}
          onClick={() => handleClick("/trending/developers")}
        >
          Developers
        </button>
      </div>
      <div className="grid gap-2 sm:justify-around sm:space-x-5 sm:flex">
        {location === "/trending" && (
          <div className="flex text-base font-medium cursor-pointer text-slate-400 hover:text-slate-200">
            Spoken Language: <span className="ml-1 font-semibold">Any</span>
            <CaretDown className="w-2 h-2 mt-2 ml-1 fill-gray-400" />
          </div>
        )}
        <div className="flex text-base font-medium cursor-pointer text-slate-400 hover:text-slate-200">
          Language: <span className="ml-1 font-semibold">Any</span>
          <CaretDown className="w-2 h-2 mt-2 ml-1 fill-gray-400" />
        </div>
        <div className="flex text-base font-medium cursor-pointer text-slate-400 hover:text-slate-200">
          Date Range: <span className="ml-1 font-semibold">Today</span>
          <CaretDown className="w-2 h-2 mt-2 ml-1 fill-gray-400" />
        </div>
      </div>
    </div>
  );
};

interface CardBodyProps {
  children: ReactChildren;
}

export const CardBody: FunctionComponent<CardBodyProps> = ({ children }) => {
  return <>{children}</>;
};

interface CardProps {
  children: ReactChildren;
}

export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return (
    <div className="flex justify-center px-6 py-10 sm:py-12 sm:px-60">
      <div className="container relative h-auto border sm:container border-zinc-800 rounded-t-md">
        {children}
      </div>
    </div>
  );
};
