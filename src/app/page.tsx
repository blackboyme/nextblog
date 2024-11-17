"use client";
import React from "react";
import Hero from "@/components/Hero";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full  bg-blue-100">
        <div className="container min-h-96 mx-auto flex justify-center gap-5 p-6">
          <section className="flex flex-col flex-[0.55] gap-4">
            <div className="flex-[0.7] bg-blue-500 rounded-lg" />
            <div className="flex flex-[0.3] gap-4">
              {[
                { bg: 'bg-white' },
                { bg: 'bg-blue-500' },
                { bg: 'bg-black' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex-1 ${item.bg} rounded-lg`}
                />
              ))}
            </div>
          </section>
          <section className="flex-[0.45] bg-white rounded-lg" />
        </div>
      </main>
    </div>
  );
}
