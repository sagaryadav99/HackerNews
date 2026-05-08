import type { StoryType } from "@/types/storytypes";

import { BookMarkToggle } from "./bookmarkcomp";
import { formatDistanceToNow } from "date-fns";

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

export function ListItem({ story }: { story: StoryType }) {
  const domain = extractDomain(story.url);
  const title = story.title.split("(")[0];

  return (
    <div className="group relative my-1 cursor-pointer rounded-lg border border-gray-700 bg-gray-900 px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 hover:border-blue-500/40 hover:bg-gray-800 hover:scale-[1.02]">
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg bg-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-2 sm:gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 tracking-normal">
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] sm:text-[15px] font-medium leading-snug text-gray-100 transition-colors duration-150 hover:text-blue-200"
            >
              {title}
            </a>
            {domain && (
              <span className="hidden sm:inline shrink-0 text-[12px] text-gray-600">
                ({domain})
              </span>
            )}
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1">
            <span className="tabular-nums text-[12px] sm:text-[13px] font-semibold text-blue-500">
              {story.points} pts
            </span>
            <span className="text-[11px] text-gray-600">•</span>
            <span className="text-[12px] sm:text-[13px] text-gray-500">
              by{" "}
              <span className="cursor-pointer text-gray-400 transition-colors hover:text-blue-200">
                {story.author}
              </span>
            </span>
            <span className="hidden sm:inline text-[11px] text-gray-600">
              •
            </span>
            <span className="sm:inline text-[12px] sm:text-[13px] text-gray-500">
              {formatDistanceToNow(new Date(story.postedAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>

        <div className="shrink-0 pt-0.5">
          <BookMarkToggle id={story._id} />
        </div>
      </div>
    </div>
  );
}
