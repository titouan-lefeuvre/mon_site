"use client";

import { useState } from "react";
   
import IA_image from "../component/IA_image.jpg";

import MenuDeroulant from "../component/menu_deroulant";





type Question = {
  question: string;
  options: string[];
  answer: number;
};

const questions: Question[] = [
  {
    question: "Que signifie IA ?",
    options: [
      " Intelligence Artificielle -",
      "- Internet Avancé -",
      "- Information Automatique ",
    ],
    answer: 0,
  },
  {
    question: "Quel outil IA reproduis des émotions ?",
    options: ["Copilot -", "- Claude -", "- ChatGPT "],
    answer: 2,
  },
  {
    question: "L'IA simule des émotions pour controler l'humanité ?",
    options: [" Oui -", "- Non "],
    answer: 1,
  },
  {
    question: "L'IA se base uniquement sur les mots choisis d'un message pour analyser tes émotions ?",
    options: [" Oui -", "- Non "],
    answer: 1,
  }
];

export default function QuizIA() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selectedIndex: number) => {
    if (
      selectedIndex ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
    <main className="min-h-screen bg-center bg-fixed bg-black/70 bg-no-repeat bg-slate-950 flex flex-col font-sans" 
    style={{
  backgroundImage:

  `url(${IA_image.src})`,
  backgroundSize: "100%",
}}>   
    <MenuDeroulant />
        <div className="ml-64 p-8"></div>

      <div className="quiz-result ml-64 p-8  text-white mt-50 text-4xl">
        <h2>Quiz terminé !</h2>
        <p>
          Score : {score}/{questions.length}
        </p>

        {score === questions.length && (
          <p>🏆 Expert en IA !</p>
        )}

        {score >= 2 && score < questions.length && (
          <p>👍 Bon niveau en IA.</p>
        )}

        {score < 2 && (
          <p>📚 Dirige toi vers la page émotions pour en apprendre plus sur l'IA.</p>
        )}
      </div>
    </main>
    );
  }


  return (
     <main className="min-h-screen bg-center bg-black/70 bg-no-repeat bg-slate-950 flex flex-col mt-15 font-sans" 
    style={{
  backgroundImage:

  `url(${IA_image.src})`,
  backgroundSize: "100%",

}}>   
    <MenuDeroulant />
        <div className="ml-64 p-8"></div>
    <h1 className="ml-64 p-8 text-6xl font-bold mb-1 text-white text-center justify-start p-15">
      Petit quiz sur l'IA
    </h1>
    <div className="text-white ml-64 p-8"></div>
   
    <div className="quiz text-white ml-64 p-8 mt-4 text-4xl">
       
      <h2 className="text-white mt-4 text-4xl">
        Question {currentQuestion + 1} / {questions.length}
      </h2>

      <h3  className="text-white mt-4 mb-4 text-4xl">
        {questions[currentQuestion].question}
      </h3>

      {questions[currentQuestion].options.map(
        (option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        )
      )}
    </div>
     </main>
    
  );
}

