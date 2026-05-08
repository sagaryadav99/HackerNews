import type { StoryType } from "@/types/storytypes";
import { ListItem } from "./listitem";

export function Table({
  stories,
  tableTitle,
}: {
  stories: StoryType[];
  tableTitle: string;
}) {
  return (
    <div className="mx-auto mt-4 mb-4 w-[95%] sm:w-[90%] rounded-xl border border-blue-500/40 bg-gray-950 p-3 sm:p-4">
      <div className="mb-3 text-xl sm:text-2xl font-semibold tracking-wide text-gray-200">
        {tableTitle}
      </div>
      {stories.length > 0 ? (
        stories.map((el) => <ListItem story={el} key={el._id} />)
      ) : (
        <div className="py-6 text-center text-sm text-gray-600">
          no stories to show
        </div>
      )}
    </div>
  );
}
