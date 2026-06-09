import type { StoryType } from "@/types/storytypes";
import { ListItem } from "./listitem";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
export function Table({
  stories,
  tableTitle,
}: {
  stories: StoryType[];
  tableTitle: string;
}) {
  const [error, setError] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (stories.length == 0) {
        setError(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="mx-auto mt-4 mb-4 w-[95%] sm:w-[90%] rounded-xl border border-blue-500/40 bg-gray-950 p-3 sm:p-4">
      <div className="mb-3 text-xl sm:text-2xl font-semibold tracking-wide text-gray-200">
        {tableTitle}
      </div>
      {stories.length > 0 ? (
        stories.map((el) => <ListItem story={el} key={el._id} />)
      ) : (
        <div className="py-6 text-center text-sm text-gray-300 flex items-center justify-center">
          {error ? (
            <div>no stories to show</div>
          ) : (
            <Spinner data-icon="inline-start" />
          )}
        </div>
      )}
    </div>
  );
}
