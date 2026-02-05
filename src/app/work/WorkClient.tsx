"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Input, Select } from "@/components/Inputs";
import { projects, projectTags } from "@/content/projects";
import { cn } from "@/lib/utils";

export const WorkClient = () => {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Featured");

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeTag !== "All") {
      result = result.filter((project) => project.tags.includes(activeTag));
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.industry.toLowerCase().includes(query)
      );
    }

    if (sort === "Newest") {
      result.sort((a, b) => b.year - a.year);
    } else {
      result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [activeTag, search, sort]);

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <Input
          placeholder="Search by industry or keyword"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full"
        />
        <Select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="w-full lg:w-40"
        >
          <option value="Featured">Featured</option>
          <option value="Newest">Newest</option>
        </Select>
        <div className="flex flex-wrap gap-2">
          {["All", ...projectTags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition sm:text-sm",
                activeTag === tag
                  ? "border-accent/60 text-accent"
                  : "border-border text-textSecondary hover:text-textPrimary"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
};
