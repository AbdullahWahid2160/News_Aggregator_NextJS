import FilterNews from "@/app/components/FilterNavBar";
import Header from "@/app/components/Header";
import NewsCard from "@/app/components/NewsCard";

export interface NewsCardType {
  article_id: string;
  title: string;
  link: string;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: string;
  country: Array<string>;
  category: Array<string>;
  language: string;
}

const fetchNews = async (slug: string | "Top"): Promise<NewsCardType[]> => {
  const news = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_29210cd7861fa5061dc3867c9d32d8d80539f&category=${slug}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
  return news;
};

interface NewsListProps {
  slug: string;
  params: { slug: string };
}

export default async function NewsList(Params: NewsListProps) {
  let slug = "";
  if (Params.params.slug === "") {
    slug = Params.slug;
  } else {
    slug = Params.params.slug;
  }
  const news = await fetchNews(slug);

  return (
    <main>
      <Header />
      <div className="p-5 flex flex-wrap justify-center">
        <FilterNews />
      </div>
      <div className="px-10 flex flex-wrap justify-center">
        {news.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    </main>
  );
}
