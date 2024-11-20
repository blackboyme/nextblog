"use client";
import React from "react";
import Hero from "@/components/Hero";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const boxesGroupOne = [
    { bg: "bg-red-500", letter: "I", delay: "slide-box-1" },
    { bg: "bg-orange-400", letter: "L", delay: "slide-box-2" },
    { bg: "bg-white", letter: "O", delay: "slide-box-3" },
    { bg: "bg-blue-400", letter: "V", delay: "slide-box-4" },
    { bg: "bg-green-500", letter: "E", delay: "slide-box-5" },
    { bg: "bg-purple-500", letter: "U", delay: "slide-box-6" }
  ];

  const boxesGroupTwo = [
    { bg: "bg-pink-500", letter: "M", delay: "slide-box2-1" },
    { bg: "bg-yellow-400", letter: "Y", delay: "slide-box2-2" },
    { bg: "bg-teal-500", letter: "B", delay: "slide-box2-3" },
    { bg: "bg-indigo-400", letter: "A", delay: "slide-box2-4" },
    { bg: "bg-rose-500", letter: "B", delay: "slide-box2-5" },
    { bg: "bg-cyan-500", letter: "Y", delay: "slide-box2-6" }
  ];

  const square = [
    { bg: "bg-blue-500", text: "日落", trans: "sun" },
    { bg: "bg-orange-500", text: "瞬间", trans: "memo" },
    { bg: "bg-green-500", text: "生活", trans: "life" },
  ]

  return (
    <div>
      <Hero />
      <main id="wrapper" className="w-full bg-blue-100">
        <div className="container min-h-96 mx-auto flex justify-center gap-5 p-6">
          <section className="flex flex-col flex-[0.55] gap-4">
            <div id='face' className="flex-[0.7] group bg-white rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 z-30 transition-all duration-300 group-hover:backdrop-blur-sm group-hover:bg-purple-400/80" />
              <div className="absolute inset-0 z-20">
                <div className="absolute top-0 right-0 w-full h-full">
                  <div className="relative w-full h-full">
                    {/* 第一组方框 */}
                    {boxesGroupOne.map((box, index) => (
                      <div
                        key={`group1-${index}`}
                        className={`absolute w-16 h-16 ${box.bg} rounded-xl shadow-lg flex items-center justify-center slide-box ${box.delay}`}
                        style={{
                          right: '60px',
                          top: '-20px',
                        }}
                      >
                        <span className={`text-3xl font-bold ${box.bg === 'bg-white' ? 'text-gray-800' : 'text-white'}`}>
                          {box.letter}
                        </span>
                      </div>
                    ))}

                    {/* 第二组方框 */}
                    {boxesGroupTwo.map((box, index) => (
                      <div
                        key={`group2-${index}`}
                        className={`absolute w-16 h-16 ${box.bg} rounded-xl shadow-lg flex items-center justify-center slide-box-2 ${box.delay}`}
                        style={{
                          right: '12px',
                          top: '80px',
                        }}
                      >
                        <span className="text-3xl font-bold text-white">
                          {box.letter}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id='face1' className="relative z-40 p-10 group-hover:opacity-0 transition-opacity duration-100">
                <div className="text-4xl text-gray-800"><span>以温柔之心，</span></div>
                <div className="text-4xl text-gray-800"><span>守护真爱之人</span></div>
                <div className="text-sm text-gray-500 mt-1"><span>limengyue.love</span></div>
              </div>
              <div id='face2' className="absolute inset-0 z-40 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                <div>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-white"
                    size="5x"
                  />
                </div>
                <div className="pt-2 text-white flex items-center justify-start">
                  <span className="text-5xl mr-3">随便逛逛</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white"
                    size="4x"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-[0.3] gap-4">
              {
                square.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-1 ${item.bg} rounded-lg hover-elastic flex flex-col justify-center pl-4`}
                  >
                    <div className="text-white text-xl">{item.text}</div>
                    <div className="text-gray-300 text-sm ">{item.trans}</div>
                  </div>
                ))}
            </div>
          </section>
          <section className="flex-[0.45] bg-white rounded-lg" >
            {/* <img src="/bg.jpg" alt="bu" className="h-100">
            </img> */}
            </section>
        </div>
      </main>
    </div>
  );
}
