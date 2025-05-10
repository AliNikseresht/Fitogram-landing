import Image from "next/image";
import CallToActionImage from "@/public/landing-banner.png";

const CallToActionSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#2962eb] to-[#7b3aed] py-16 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white max-w-xl">
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="mb-6 text-xs md:text-sm lg:text-base text-white/90">
            Join thousands of users who have already achieved their fitness
            goals with FitPulse. Whether you&#39;re a fitness enthusiast or a professional coach, we have the perfect solution for you.

          </p>
          <div className="flex gap-2">
            <button className="bg-[#fff] text-xs md:text-base c-blue px-3 md:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
              Sign Up as User
            </button>
            <button className="border border-[#fff] text-[#fff] text-xs md:text-base px-3 md:px-6 py-2 rounded-full font-medium hover:bg-[#fff] hover:c-blue cursor-pointer transition duration-200">
              Join as Coach
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={CallToActionImage}
              alt="Coach and Trainee"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
