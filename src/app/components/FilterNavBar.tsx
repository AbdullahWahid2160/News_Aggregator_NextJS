"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  "Top",
  "Business",
  "Entertainment",
  "Environment",
  "Food",
  "Health",
  "Politics",
  "Science",
  "Sports",
  "Technology",
  "Tourism",
  "World",
];

export default function FilterNews() {
  const pathName = usePathname();
  return (
    <nav className="text-reg p-2 m-1 align-items-center align-self-center ">
      {categories.map((category) => (
        <Link
          href={`/news/${category}`}
          className={
            (category === "Top" && pathName === "/") ||
            pathName === `/news/${category}`
              ? "p-2 m-2 border-2 bg-gradient-to-r to-[#cbd5e1] from-[#64748b]"
              : "p-2 m-2 border-2"
          }
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
