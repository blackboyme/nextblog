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
        <div className="container mx-auto w-full flex">
          <section className="flex flex-col flex-[0.75] ">
              <div className="flex justify-start items-center gap-4 bg-white border-gray-500  h-20 rounded-lg p-3">
                  <div className="p-2 bg-blue-500 rounded-lg text-white">
                    首页
                  </div>
                  <div>
                    感情
                  </div>
                  <div>
                    恋爱
                  </div>
                  <div>
                    回忆
                  </div>
                  <div>
                    &gt;&gt;
                  </div>
                  <div>
                    更多
                  </div>
              </div>
              <div className="bg-green-100 h-full">

              </div>
          </section>
          <section>
            
          </section>
        </div>
      </main>
    </div>
  );
}
