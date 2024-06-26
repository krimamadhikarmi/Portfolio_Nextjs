import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


interface ProjectDetailsProps{
  imgUrl: string;
  title: string;
  gitUrl: string;
}

export function ProjectDetails({ imgUrl, title, gitUrl }:ProjectDetailsProps) {
  return (
    <div className="px-8">
      <div
        className="h-64 sm:h-72 md:h-80 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="flex items-center justify-center h-16 w-16 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-14 w-14 text-[#ADB7BE] cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-4 px-4 text-center">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
      </div>
    </div>
  );
}
