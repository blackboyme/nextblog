import React from 'react'

export default function Announcement() {
  return (
    <div className='flex flex-col mt-6 bg-white rounded-lg pl-6 py-6 pr-4'>
        <div className='font-bold'>
            <span>📢 Announcement</span>
        </div>
        <div className='pt-1'>
            <span className=''>欢迎来自</span>
            <span className='text-blue-400 font-bold'>四川省 成都市 武侯区</span>
        </div>
        <div className='pt-1'>
            <span className=''>的小友💗</span>
        </div>
        <div className='pt-1'>
            <span className=''>我吃火锅，你吃火锅底料🍂</span>
        </div>
        <div className='pt-1'>
            <span className=''>当前位置距离博主</span>
            <span className='text-blue-400 font-bold'>20</span>
            <span className=''>公里！</span>
        </div>
        <div className='pt-1'>
            <span className=''>您的IP地址为：</span>
            <span className='text-blue-500 font-bold'>192.168.1.1</span>
        </div>
        <div className='pt-1'>
            <span className=''>⏰下午好，饮茶先啦！🫖</span>
        </div>
    </div>
  )
}
