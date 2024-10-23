import style from './truefalse.module.css'
export default function TrueFalse(){
    return(
        <>
            <div className={style.trueFalseContainer}>
                <div className={style.trueContainer}>
                    <input type="checkbox" name="" id="" />
                    <p>True</p>
                </div>
                <div className={style.falseContainer}>
                    <input type="checkbox" name="" id="" />
                    <p>False</p>
                </div>
            </div>
        </>
    )
}