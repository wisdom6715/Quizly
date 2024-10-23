import style from './fillgap.module.css'
export default function FillGap(){
    return (
        <>
            <div className={style.fillGapContainer}>
                <input type="text"  placeholder='Enter your answer' className={style.fillGapInput}/>
            </div>
        </>
    )
}