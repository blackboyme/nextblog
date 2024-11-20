"use client";
import React from "react";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner"

export default function Home() {


  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100">
        <Banner />
      </main>
    </div>
  );
}
