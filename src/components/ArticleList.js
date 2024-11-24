import React from 'react'
import Article from './Article'
import { Pagination } from "@nextui-org/react";

export default function ArticleList() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-0 mt-6">
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
            <Pagination showControls variant="flat" color="success" total={10} initialPage={1} className="flex justify-center my-4" />
        </div>
    )
}
