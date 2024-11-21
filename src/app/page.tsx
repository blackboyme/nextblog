"use client";
import React from "react";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner"
import NavTop from "@/components/NavTop"

export default function Home() {


  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100">
        <Banner />
        <div className="container mx-auto w-full flex">
          <section className="flex flex-col flex-[0.75] ">
            <NavTop />
            <div className="w-full mt-6">
              <div className="flex gap-6">
                <div className="h-[410px] w-full">
                  <div className="h-[250px] ">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="h-[160px]  bg-white rounded-bl-lg rounded-br-lg"></div>
                </div>
                <div className="h-[410px] w-full">
                  <div className="h-[250px]  ">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="relative flex flex-col h-[160px]  bg-white rounded-bl-lg rounded-br-lg p-6">
                    <div className="flex text-gray-500 justify-start gap-2 text-[12px]">
                      <span>回忆</span>
                      <span>未读</span>
                    </div>
                    <div className="text-black text-xl mt-1">和你一起把无聊的生活过得有趣</div>
                    <div className="flex absolute bottom-6 text-gray-500 justify-between w-full">
                      <div className="flex">
                        <span>回忆</span>
                        <span>未读</span>
                      </div>
                      <div className="">
                        <span>2小时前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>

          </section>
        </div>
      </main>
    </div>
  );
}
