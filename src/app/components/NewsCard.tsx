import Link from "next/link";
import { NewsCardType } from "../news/[slug]/page";

interface NewsCardProps {
  news: NewsCardType;
}
export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="w-70 h-100 m-4 rounded overflow-hidden border cursor-pointer">
      <Link href={`/news/${news.category[0]}/details/${news.article_id}`}>
        <img src={news.image_url} alt="" className="w-full h-40" />
        <div className="p-1 w-80 h-100">
          <h3 className="font-bold text-2xl mb-2 text-black">{news.title}</h3>
          <div className="flex items-start text-gray-700">
            <div className="flex mb-2">Country:</div>
            <p className="ml-2">{news.country}</p>
          </div>
          <div className="flex text-reg font-light capitalize text-gray-500">
            <p className=" mr-3">Published Date: </p>
            <p>{news.pubDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
