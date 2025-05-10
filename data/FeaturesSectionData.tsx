import { FeatureItem } from "@/types/FeaturesSectionTypes";
import { FaLock, FaComments, FaChartLine } from "react-icons/fa";

export const featuresData: FeatureItem[] = [
  {
    icon: FaLock,
    title: "Personalized Plans",
    description:
      "Custom workout and nutrition plans tailored to your specific goals, fitness level, and preferences.",
    link: "#",
    color: "#2563eb",
  },
  {
    icon: FaComments,
    title: "Coach Communication",
    description:
      "Direct messaging with expert coaches for real-time feedback, motivation, and adjustments to your plans.",
    link: "#",
    color: "#7c3aed",
  },
  {
    icon: FaChartLine,
    title: "Progress Tracking",
    description:
      "Comprehensive analytics and visualizations to track your progress, celebrate milestones, and stay motivated.",
    link: "#",
    color: "#059669",
  },
];
