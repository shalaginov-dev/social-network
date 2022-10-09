import s from "./Pagination.module.css";
import React, {memo, useState} from "react";

interface IPaginationProps {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = memo(({
                                    pageSize,
                                    totalItemsCount,
                                    currentPage,
                                    onPageChanged,
                                    portionSize
                                }: IPaginationProps) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)
    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={s.paginationWrapper}>
            {
                portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>prev</button>
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => (
                        <div
                            key={p}
                            className={currentPage === p ? s.selectedPage : s.page}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                        >{p}</div>)
                    )
            }
            {
                portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>next</button>
            }
        </div>
    )
})