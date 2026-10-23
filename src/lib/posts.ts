import { getCollection } from "astro:content";
import { SITE } from "../site.config";

// Published posts, newest first. Drafts only show up in `npm run dev`.
export async function getPosts() {
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString(SITE.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
