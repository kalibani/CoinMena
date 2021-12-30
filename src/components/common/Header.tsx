import { FunctionComponent, memo } from "react";

interface HeaderProps {
  content?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ content }) => {
  return (
    <div className="flex items-center justify-center px-4 py-12 border-b sm:px-0 bg-zinc-900 border-zinc-800">
      <div className="grid gap-1 text-center">
        <h1 className="text-4xl font-bold text-slate-200">Trending</h1>
        <p className="font-medium text-1xl text-slate-400">{content}</p>
      </div>
    </div>
  );
};

export default memo(Header);
