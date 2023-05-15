import { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface BlogArticle extends Pick<ParsedContent, string> {
  _path: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}
