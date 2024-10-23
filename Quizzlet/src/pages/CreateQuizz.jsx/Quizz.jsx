import MultichoiceOption from '../../components/MultichoiceOption'
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
                        <div className={style.quizzQuestion}>
                            <div className={style.chooseQuestionType}>
                                <select name="" id="" className={style.questionType}>
                                    <option value="">Multiple choice</option>
                                    <option value="">Fill gap</option>
                                    <option value="">True or False</option>
                                </select>
                                <label htmlFor="">Required: <input type="checkbox" name="" id="" className={style.requiredTab}/></label>
                            </div>
                            <div>
                                <div className={style.inputContainer}>
                                    <div className={style.questionNumbering}>
                                        <p>question icon</p>
                                        <p>Question: </p>
                                    </div>
                                    <div className={style.questionInputContainer}>
                                        <textarea type="text" className={style.inputQuestion}/>
                                        <div className={style.addImage}> Add image</div>
                                    </div>
                                </div>
                                {/* conditional rendering of type of option component */}
                                <div className={style.questionOptions}>
                                    {/* Multichoice/ true/false/ / fill gap component */}
                                    <MultichoiceOption className={style.multichoiceOptionComponent}/>
                                </div>
                            </div>
                            {/* Test properties such as time, point per question  */}
                            <div className={style.testUtils}>
                                <label htmlFor="">
                                    <input type="text" className={style.util}/>
                                    Time
                                </label>
                                <label htmlFor="">
                                    <input type="text" className={style.util}/>
                                    Points
                                </label>                                    
                            </div>
                        </div>
                        <button className={style.addQuestionBtn}>Add More Questions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}