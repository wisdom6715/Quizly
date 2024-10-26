import React from 'react'
import style from './questiontypeintro.module.css'

const QuestionTypeIntro = () => {
  return (
    <div className={style.QuestionTypeIntroContainer}>
        <img className={style.tagImage}  src="/src/assets/images/Quiz logo with speech bubble icon.jpeg" alt="" />
        <p className={style.stats}>Create Quiz with ease </p>
    </div>
  )
}

export default QuestionTypeIntro