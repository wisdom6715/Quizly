import style from './multichoice.module.css'
export default function MultichoiceOption(){
    return(
        <>
            <div className={style.OptionContainer}>
                <div className={style.optionTag}>
                    <input type="checkbox" name="" id="" />
                    <p className={style.option}>First Option</p>
                </div>
                <div className={style.actionButtons}>
                    <p>edit</p>
                    <p>delete</p>
                </div>
            </div>
            <button className={style.addAnswerBtn}>Add options</button>                        
        </>
    )
}