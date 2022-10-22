import {memo} from "react";

interface IContactsProps {
    contactTitle: string
    link: string | null
}

export const Contact = memo(({contactTitle, link}: IContactsProps) => {

    return (
        <div><b>{contactTitle}</b>: {link}</div>
    )
})