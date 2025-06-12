import React from "react";
import { featuresData } from "@/data/FeaturesSectionData";
import { FeatureItem } from "@/types/FeaturesSectionTypes";

const FeaturesSection = () => {
  return (
    <section className="w-full lg:py-10 px-3 md:px-5 text-center">
      <h2 className="font-bold text-xl md:text-3xl lg:text-5xl mb-2">
        Powerful Features for Your Fitness Goals
      </h2>
      <p className="text-xs md:text-sm lg:text-base mx-auto mb-10">
        Everything you need to transform your fitness journey in one powerful
        platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {featuresData.map((feature: FeatureItem, index: number) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-[#f9fafb] border border-gray-100 shadow-sm rounded-xl p-6 hover:shadow-md transition text-start"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                <Icon className="text-2xl" color={feature.color} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-800 mb-4">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
