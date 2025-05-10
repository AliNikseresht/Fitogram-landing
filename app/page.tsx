import CallToActionSection from "@/components/ui/CallToActionSection";
import CoachesSection from "@/components/ui/CoachesSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import FitnessJourneySection from "@/components/ui/FitnessJourneySection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <FitnessJourneySection />
      <FeaturesSection />
      <CoachesSection />
      <CallToActionSection />
    </div>
  );
}
