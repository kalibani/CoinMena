import { FunctionComponent, memo } from "react";
interface AvatarProps {
  url?: string;
  username?: string;
  size?: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ url, username, size }) => {
  return url ? (
    <img
      src={url}
      alt={`alt-${url}`}
      className={`inline-block ${
        size === "md" ? "w-12 h-12" : "w-5 h-5"
      } align-middle rounded-full`}
    />
  ) : (
    <div className="flex items-center justify-center w-5 h-5 rounded-full ring-2 text-slate-400">
      {username?.charAt(0)}
    </div>
  );
};

export default memo(Avatar);
