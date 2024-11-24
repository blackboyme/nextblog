"use client";
import React from "react";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner"
import NavTop from "@/components/NavTop"

export default function Home() {


  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100  mt-20 sm:mt-0">
        <Banner />
        <div className="container mx-auto w-full flex mt-24 sm:mt-0">
          <section className="flex flex-col w-full lg:flex-[0.75] ">
            <NavTop />
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-0 mt-6">
                <div id="paper" className="h-[410px] w-full mt-6 lg:mt-0">
                  <div className="h-[250px]">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="relative flex flex-col h-[160px]  bg-white rounded-bl-lg rounded-br-lg p-6">
                    <div className="flex text-gray-500 justify-start gap-2 text-[12px]">
                      <span>回忆</span>
                      <span>未读</span>
                    </div>
                    <div className="text-black text-xl mt-1">和你一起把无聊的生活过得有趣</div>
                    <div className="flex absolute text-gray-500 justify-between w-[calc(100%-3rem)] bottom-6">
                      <div>
                        <span className="pr-2"># 回忆</span>
                        <span className="pr-2"># 未读</span>
                      </div>
                      <div>
                        <span>2小时前</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="paper" className="h-[410px] w-full mt-6 lg:mt-0">
                  <div className="h-[250px]  ">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="relative flex flex-col h-[160px]  bg-white rounded-bl-lg rounded-br-lg p-6">
                    <div className="flex text-gray-500 justify-start gap-2 text-[12px]">
                      <span>回忆</span>
                      <span>未读</span>
                    </div>
                    <div className="text-black text-xl mt-1">和你一起把无聊的生活过得有趣</div>
                    <div className="flex absolute text-gray-500 justify-between w-[calc(100%-3rem)] bottom-6">
                      <div>
                        <span className="pr-2"># 回忆</span>
                        <span className="pr-2"># 未读</span>
                      </div>
                      <div>
                        <span>2小时前</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="paper" className="h-[410px] w-full mt-6 lg:mt-0">
                  <div className="h-[250px]  ">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="relative flex flex-col h-[160px]  bg-white rounded-bl-lg rounded-br-lg p-6">
                    <div className="flex text-gray-500 justify-start gap-2 text-[12px]">
                      <span>回忆</span>
                      <span>未读</span>
                    </div>
                    <div className="text-black text-xl mt-1">和你一起把无聊的生活过得有趣</div>
                    <div className="flex absolute text-gray-500 justify-between w-[calc(100%-3rem)] bottom-6">
                      <div>
                        <span className="pr-2"># 回忆</span>
                        <span className="pr-2"># 未读</span>
                      </div>
                      <div>
                        <span>2小时前</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="paper" className="h-[410px] w-full mt-6 lg:mt-0">
                  <div className="h-[250px]  ">
                    <img src="/paper.png" alt="cesd" className="object-cover object-center h-full w-full rounded-tl-lg rounded-tr-lg" />
                  </div>
                  <div className="relative flex flex-col h-[160px]  bg-white rounded-bl-lg rounded-br-lg p-6">
                    <div className="flex text-gray-500 justify-start gap-2 text-[12px]">
                      <span>回忆</span>
                      <span>未读</span>
                    </div>
                    <div className="text-black text-xl mt-1">和你一起把无聊的生活过得有趣</div>
                    <div className="flex absolute text-gray-500 justify-between w-[calc(100%-3rem)] bottom-6">
                      <div>
                        <span className="pr-2"># 回忆</span>
                        <span className="pr-2"># 未读</span>
                      </div>
                      <div>
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
