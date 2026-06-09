import { Table } from "@/components/table";
import type { StoryType } from "@/types/storytypes";
import axios from "axios";
import { useEffect, useState } from "react";

export function LandingPage() {
  const [stories, setStories] = useState<StoryType[]>([]);

  useEffect(() => {
    async function loadStories() {
      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
        const result = await axios.get(`${BACKEND_URL}/api/stories`);
        setStories(result.data.stories);
      } catch (e) {
        console.log(e);
      }
    }
    loadStories();
  }, []);

  return <Table stories={stories} tableTitle={"Hacker News Top 30"} />;
}
