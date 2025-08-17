import React from "react";
import Hero from "../components/Hero";
import TripPreview from "../components/TripPreview";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import TargetUsers from "../components/TargetUsers";
import TechnicalSpecs from "../components/TechnicalSpecs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TripPreview />
      <Features />
      <UseCases />
      <TargetUsers />
      <TechnicalSpecs />
    </>
  );
}
