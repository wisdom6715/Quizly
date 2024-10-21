import style from './quizz.module.css'
export default function Quizz(){
    return (
        <div className={style.quizzPageContainer}>
            <div className={style.generalContainer}>
                <div className={style.HeaderContainer}>
                   {/* Header div  */}
                </div>
                <div className={style.quizzQuestionContainer}>
                    {/* Quiz questions */}
                    <div className={style.quizzListNumber}>
                        {/* Quiz number list container */}
                        <div className={style.questionsCount}>
                            <p>Question: </p>
                            {/* add question icon */}
                            <p>icon</p>
                        </div>
                        <div className={style.quizzLists}>
                            {/* Quiz number list */}
                            <div className={style.question}></div>
                        </div>
                        <div className={style.resultMessage}></div>
                    </div>
                    <div className={style.quizzCreationContainer}>
                        {/* Quizz Questions creation container */}
                        <div className={style.quizzQuestion}></div>
                        <button className={style.addQuestionBtn}>Add More Questions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}