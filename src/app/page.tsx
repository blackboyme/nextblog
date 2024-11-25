"use client";
import React from "react";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import NavTop from "@/components/NavTop";
import ArticleList from "@/components/ArticleList";

import PesonalInfo from "@/components/PesonalInfo";
import Announcement from "@/components/Announcement";

export default function Home() {
  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100  mt-20 sm:mt-0">
        <Banner />
        <div className="container mx-auto w-full flex mt-24 sm:mt-0">
          <div className="flex w-full justify-between gap-6">
            <section className="flex flex-col w-full ">
              <NavTop />
              <ArticleList />
            </section>
            <section className="hidden w-[300px] lg:flex flex-col">
              <PesonalInfo />
              <Announcement />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
