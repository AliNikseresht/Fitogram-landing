import { coachesData } from "@/data/coachesData";
import { allTags } from "@/data/TagsData";
import CoachesClient from "./_components/CoachesClient";

const CoachesPage = () => {
  return <CoachesClient coaches={coachesData} tags={allTags} />;
};

export default CoachesPage;
