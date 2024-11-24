"use client";
import React from "react";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import NavTop from "@/components/NavTop";
import ArticleList from "@/components/ArticleList";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100  mt-20 sm:mt-0">
        <Banner />
        <div className="container mx-auto w-full flex mt-24 sm:mt-0">
          <section className="flex flex-col w-full lg:flex-[0.75] ">
            <NavTop />
            <ArticleList />
          </section>
          <section className="flex-[0.25]">

          </section>
        </div>
        <Social />
      </main>
    </div>
  );
}
