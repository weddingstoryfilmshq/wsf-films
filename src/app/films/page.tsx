import FeaturedPlayer from "@/components/films/FeaturedPlayer";
import FilmInformation from "@/components/films/FilmInformation";
import FilmActions from "@/components/films/FilmActions";
import LeaveWish from "@/components/films/LeaveWish";
import KindWishes from "@/components/films/KindWishes";
import MoreStories from "@/components/films/MoreStories";
import FilmsCTA from "@/components/films/FilmsCTA";

export default function FilmsPage() {
  return (
    <>
      <FeaturedPlayer />

      <FilmInformation />

      <FilmActions />

      <LeaveWish />

      <KindWishes />

      <MoreStories />

      <FilmsCTA />
    </>
  );
}