import style from './multichoice.module.css'
export default function MultichoiceOption(){
    return(
        <>
            <div>
                <div className={style.OptionContainer}>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p className={style.option}>First Option</p>
                    </div>
                    <div>
                        <p>edit</p>
                        <p>delete</p>
                    </div>
                </div>
                <button className={style.addAnswerBtn}>Add options</button>
            </div>
            
        </>
    )
}