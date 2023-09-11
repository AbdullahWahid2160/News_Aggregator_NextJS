import FilterNews from "./components/FilterNavBar";
import Header from "./components/Header";
import NewsList from "./news/[slug]/page";

export default async function Home() {
  return (
    <NewsList
      slug={"Top"}
      params={{
        slug: "",
      }}
    />
  );
}
