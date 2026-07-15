import { useMemo, useState } from "react";

import Hero from "../../components/schedule/Hero";
import QuickStats from "../../components/schedule/QuickStats";
import SearchFilter from "../../components/schedule/SearchFilter";
import ScheduleTable from "../../components/schedule/ScheduleTable";

import { classSchedules } from "../../data/schedule/classSchedules";
import FeaturedClass from "../../components/schedule/FeaturedClass.jsx";
import Guidelines from "../../components/schedule/Guidelines.jsx";

import CTA from "../../components/common/CTA.jsx";

const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSchedules = useMemo(() => {
    return classSchedules.filter((schedule) => {
      const matchesCategory =
        activeCategory === "All" || schedule.category === activeCategory;

      const keyword = searchTerm.toLowerCase();

      const matchesSearch =
        schedule.className.toLowerCase().includes(keyword) ||
        schedule.trainer.toLowerCase().includes(keyword) ||
        schedule.day.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <>
      <Hero />

      <QuickStats />

      <SearchFilter
        resultCount={filteredSchedules.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ScheduleTable schedules={filteredSchedules} />

      <FeaturedClass />

      <Guidelines />

      <CTA />
    </>
  );
};

export default Schedule;
