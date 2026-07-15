import { useState } from "react";

import Hero from "../../components/trainers/Hero";
import SearchFilter from "../../components/trainers/SearchFilter";
import FeaturedTrainer from "../../components/trainers/FeaturedTrainer";
import TrainerGrid from "../../components/trainers/TrainerGrid";
import WhyTrainWithUs from "../../components/trainers/WhyTrainWithUs";
import CTA from "../../components/common/CTA";

import { trainers } from "../../data/trainers/trainerData";

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSearch = trainer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || trainer.specialization === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Hero />

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <FeaturedTrainer />

      <TrainerGrid trainers={filteredTrainers} />

      <WhyTrainWithUs />

      <CTA />
    </>
  );
};

export default Trainers;
