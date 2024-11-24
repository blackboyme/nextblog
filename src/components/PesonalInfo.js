import React from 'react'

export default function PesonalInfo() {
    return (
        <div className='group flex flex-col items-center h-80 bg-[#5268F0] w-full rounded-lg'>
            <div className='mt-3 group/tip py-[2px] px-2 bg-[#7587F3] hover:bg-white rounded-full cursor-pointer'>
                <span className='text-[12px] group-hover/tip:text-[14px] group-hover/tip:text-gray-900 text-white'>不要太熬夜了，早睡更健康</span>
            </div>
            <div className='hidden group-hover:block mt-10 w-full px-6 min-h-40'>
                <span className='text-white'>你好啊，我是Gmoonlight1。我的MBTI是ISFJ。这是一种能干、肯干的个性类型，并且多才多艺。很高兴认识你！</span>
            </div>
            <div className='relative flex group-hover:hidden mt-10 w-full px-6 justify-center items-center min-h-40'>
                <div className='flex items-center justify-center bg-white w-[136px] h-[136px] rounded-full'>
                    <div className='flex items-center justify-center bg-[#5268F0] w-32 h-32 rounded-full'>
                        <img src='/okgirl.png' alt='184064199' className='w-32 h-32 rounded-full'></img>
                    </div>
                </div>
                <div className='absolute top-[112px] left-[180px] flex items-center justify-center bg-white w-8 h-8 rounded-full'>
                    <img src='/bilismile.gif' alt='184064199' className='w-6 h-6 rounded-full'></img>
                </div>
            </div>
            <div className='flex items-center justify-center bg-white w-full h-10 rounded-full'>
                <span className='text-gray-900'>点击头像查看更多信息</span>
            </div>
        </div>
    )
}
