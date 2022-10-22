import React from "react";
import s from "./Post.module.css"
import {IPhotos} from "../../../../state/types/profile-types";

interface IPostProps {
    message: string
    likesCounter: number
    photos: IPhotos
}

export const Post = ({message, likesCounter, photos}: IPostProps) => {
    return (
        <div className={s.item}>
            <img
                src={photos.small}
                alt="avatar"/>
            {message}
            <div>
                <span>like </span> {likesCounter}
            </div>
        </div>
    )
}
