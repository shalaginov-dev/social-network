import s from './MyPhotoBlock.module.scss'

export const MyPhotoBlock =() => {
    return (
        <div className={s.myPhotoBlock}>
            <h3>My photo</h3>
            <div className={s.photoBlock}>
                <img src="https://preview.redd.it/80jykz32log21.png?auto=webp&s=957313ed1130e125d3b40c4ef513aba837057f41" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdPMc3uif1kQYWFQCQ5iPunVIIXDU2qE5lA&usqp=CAU" alt=""/>
                <img src="https://openseauserdata.com/files/c5f5f7b3dd2aa81501b5d916b4ce35da.gif" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-RXIDMnVM0bv4en5dK9OlCIIx2PuWIB4zKW04yag0reS-LpkyS9a9hdrBHXl8aCnAEw&usqp=CAU" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujowoYqrK1RATAUzQyL94PuSHCD_e1h_M2w&usqp=CAU" alt=""/>
                <img src="https://art.pixilart.com/thumb/sr26bd20d82ead0.png" alt=""/>
            </div>
        </div>
    )
}