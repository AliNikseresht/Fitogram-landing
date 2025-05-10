import FAQPageClient from "./_components/FAQPageClient";
import { faqData } from "@/data/faqData";

const FAQPage = () => {
  return <FAQPageClient faqData={faqData} />;
};

export default FAQPage;
