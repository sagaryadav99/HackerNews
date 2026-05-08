import { Table } from "@/components/table";
import type { StoryType } from "@/types/storytypes";
import axios from "axios";
import { useEffect, useState } from "react";

export function Bookmarks() {
  const [stories, setStories] = useState<StoryType[]>([]);
  useEffect(() => {
    async function loadStories() {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${BACKEND_URL}/api/stories/user/bookmarks`,
        { headers: { authorization: token } },
      );
      setStories(result.data.stories);
    }
    loadStories();
  }, []);

  return <Table stories={stories} tableTitle={"Your BookMarks"} />;
}
