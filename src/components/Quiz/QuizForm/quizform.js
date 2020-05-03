import React from "react";
import { connect } from "react-redux";

import * as selectors from "../../../reducers";
import * as actions from "../../../actions/quiz";

const questions = {
  1: {
    question: "¿Has tocado algún instrumento antes?",
    answers: { 1: "Si", 2: "No" },
    values: { 1: 0, 2: 0 },
  },
  2: {
    question: "¿Cuál es tu genérelo  musical favorito?",
    answers: { 1: "Pop", 2: "Rock", 3: "Dance/House" },
    values: { 1: 1, 2: 1, 3: 2 },
  },
  3: {
    question: "¿Eres zurdo o diestro?",
    answers: { 1: "Zurdo", 2: "Diestro" },
    values: { 1: 2, 2: 1 },
  },
  4: {
    question: "¿Escuchas música clásica?",
    answers: { 1: "Nunca", 2: "Algunas veces", 3: "Regularmente" },
    values: { 1: 1, 2: 1, 3: 1 },
  },
  5: {
    question: "¿Te consideras una persona inquieta?",
    answers: { 1: "Si", 2: "No" },
    values: { 1: 1.5, 2: 1 },
  },
  6: {
    question: "¿Te cuesta realizar varias cosas a la vez?",
    answers: { 1: "Si", 2: "No" },
    values: { 1: 2, 2: 2 },
  },
  7: {
    question: "¿Tienes habilidad para distinguir el ritmo en una canción?",
    answers: { 1: "Si", 2: "No" },
    values: { 1: 1, 2: 2 },
  },
};

const QuizForm = ({
  current_question,
  selected_answer,
  onSelect,
  onSubmit,
}) => {
  console.log("selected answer", selected_answer);
  return (
    <div className="quiz-container">
      <div className="question-number">
        <div>
          Pregunta{" "}
          <span className="question-num-value">{current_question}</span> de 7
        </div>
      </div>
      <div className="question">{questions[current_question].question}</div>
      <div className="options">
        {Object.keys(questions[current_question].answers).map((answer) => (
          <div
            className={
              selected_answer
                ? selected_answer === answer
                  ? "option correct"
                  : "option"
                : "option"
            }
            onClick={(e) => onSelect(answer)}
            key={answer}
          >
            {questions[current_question].answers[answer]}
          </div>
        ))}
      </div>
      <div className="answer-tracker">
        <button
          className="btn next"
          onClick={(e) => onSubmit(current_question, selected_answer)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    current_question: selectors.getCurrentQuestion(state),
    selected_answer: selectors.getSelectedAnswer(state),
  }),
  (dispatch) => ({
    onSubmit(current_question, selected_answer) {
      dispatch(
        actions.answer_question(
          questions[current_question].values[selected_answer]
        )
      );
    },
    onSelect(selected_answer) {
      dispatch(actions.select_answer(selected_answer));
    },
  })
)(QuizForm);
