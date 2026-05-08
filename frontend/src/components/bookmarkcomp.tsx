import { BookmarkIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AuthContext } from "@/context/authContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function BookMarkToggle({ id }: { id: string }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const [bookmarked, setBookmarked] = useState(
    location.pathname === "/bookmarks",
  );

  async function handlePressedChange(value: boolean) {
    const token = localStorage.getItem("token");
    setBookmarked(value);
    if (!value) {
      await axios.delete(`http://localhost:3000/api/stories/${id}/bookmark`, {
        headers: { authorization: token },
      });
      setBookmarked(false);
    } else {
      await axios.post(
        `http://localhost:3000/api/stories/${id}/bookmark`,
        {},
        { headers: { authorization: token } },
      );
      setBookmarked(true);
    }
  }

  const toggleClass = bookmarked
    ? "border-blue-500/50 bg-blue-500/15 text-blue-500 hover:bg-blue-500/25 hover:text-blue-400"
    : "border-gray-700 bg-transparent text-gray-500 hover:border-blue-500/40 hover:bg-gray-800 hover:text-blue-200";

  if (auth?.loggedIn) {
    return (
      <Toggle
        aria-label="Toggle bookmark"
        size="sm"
        variant="outline"
        pressed={bookmarked}
        onPressedChange={handlePressedChange}
        className={`cursor-pointer text-[13px] ${toggleClass}`}
      >
        <BookmarkIcon
          className={`h-3.5 w-3.5 ${bookmarked ? "fill-blue-500" : ""}`}
        />
        Bookmark
      </Toggle>
    );
  } else {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <Toggle
              aria-label="Toggle bookmark"
              size="sm"
              disabled
              variant="outline"
              className="cursor-not-allowed border-gray-700 bg-transparent text-[13px] text-gray-600 opacity-50"
            >
              <BookmarkIcon className="h-3.5 w-3.5" />
              Bookmark
            </Toggle>
          </span>
        </TooltipTrigger>
        <TooltipContent className="border-gray-700 bg-gray-900 text-gray-400">
          <p>sign in to bookmark</p>
        </TooltipContent>
      </Tooltip>
    );
  }
}
