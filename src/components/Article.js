import React from 'react'

export default function Article() {
    return (
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
    )
}
