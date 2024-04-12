import { Tags } from "./tag";
// Options
interface Options {
  ui: "V1" | "V2";
}
// Options
// Article
interface Article {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: Tags;
  writer: string;
  date: Date;
}
type Articles = Array<Article>;
type ArticleModels = {
  single: Article;
  list: Articles;
};
// End Article
export type ArticleProps<T extends keyof ArticleModels> = {
  data: ArticleModels[T];
  options?: Options;
};