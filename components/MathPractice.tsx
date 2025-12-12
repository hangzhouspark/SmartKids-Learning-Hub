import React, { useState, useEffect } from 'react';
import { generateMathSession } from '../utils/generators';
import { MathProblem } from '../types';
import { Button } from './Button';
import { addMistake, removeMistake, saveHistory } from '../services/storageService';
import { Check, X, ArrowRight, RotateCcw } from 'lucide-react';

interface MathPracticeProps {
  onBack: () => void;
}

export const MathPractice: React.FC<MathPracticeProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<MathProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [score, setScore] = useState(0);
  const [wrongItems, setWrongItems] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize practice with selected count
  const startPractice = (count: number) => {
    setQuestions(generateMathSession(count));
  };

  const handleCheck = () => {
    if (!input) return;
    
    const currentQ = questions[currentIndex];
    const isCorrect = parseInt(input) === currentQ.answer;

    if (isCorrect) {
      setStatus('correct');
      setScore(s => s + 1);
      // Logic for Mistake Book: If this was a retry, remove it from mistakes
      if (currentQ.isMistakeRetry) {
        removeMistake('math', currentQ.id);
      }
      // Auto advance after short delay
      setTimeout(nextQuestion, 1000);
    } else {
      setStatus('wrong');
      // Logic for Mistake Book: Add to mistakes
      addMistake('math', currentQ);
      setWrongItems(prev => [...prev, `${currentQ.expression} = ${currentQ.answer} (你填了: ${input})`]);
    }
  };

  const nextQuestion = () => {
    setStatus('idle');
    setInput('');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      finishPractice();
    }
  };

  const finishPractice = () => {
    setIsFinished(true);
  };

  // Effect to save history only when finished
  useEffect(() => {
    if (isFinished && questions.length > 0) {
      const finalScore = Math.round((score / questions.length) * 100);
      saveHistory({
        id: crypto.randomUUID(),
        date: new Date().toLocaleString(),
        type: '数学练习',
        totalQuestions: questions.length,
        score: finalScore,
        wrongItems
      });
    }
  }, [isFinished, score, questions.length, wrongItems]);

  // View: Summary (Finished)
  if (isFinished) {
    const finalScore = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-kid-blue mb-4">🎉 练习完成!</h2>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center text-2xl mb-4 border-b pb-4">
                <span>总题数:</span>
                <span className="font-bold">{questions.length}</span>
            </div>
            <div className="flex justify-between items-center text-2xl mb-4 border-b pb-4">
                <span>正确率:</span>
                <span className={`font-bold ${finalScore === 100 ? 'text-green-500' : 'text-orange-500'}`}>
                    {finalScore}%
                </span>
            </div>

            {wrongItems.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-red-500 mb-2">错题回顾:</h3>
                    <ul className="text-lg text-gray-600 space-y-2 bg-red-50 p-4 rounded-xl">
                        {wrongItems.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        <Button onClick={onBack} size="lg">返回主页</Button>
      </div>
    );
  }

  // View: Setup (Select Count)
  if (questions.length === 0) {
    const counts = [10, 20, 30, 50, 100];
    return (
      <div className="max-w-2xl mx-auto w-full text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-kid-blue mb-8">请选择题目数量</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
           {counts.map(num => (
             <button 
               key={num}
               onClick={() => startPractice(num)}
               className="bg-white border-b-4 border-blue-200 text-blue-500 hover:bg-blue-50 hover:border-blue-400 font-bold text-2xl py-6 rounded-2xl shadow-sm transition-all active:scale-95"
             >
               {num} 题
             </button>
           ))}
        </div>
        <Button variant="neutral" onClick={onBack}>返回</Button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500 text-xl">进度: {currentIndex + 1} / {questions.length}</span>
        <Button variant="neutral" size="sm" onClick={onBack}>退出</Button>
      </div>

      <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
        {currentQ.isMistakeRetry && (
            <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
                错题复习
            </div>
        )}
        
        <div className="text-6xl font-bold text-slate-700 mb-10 font-mono">
          {currentQ.expression} = ?
        </div>

        {status === 'idle' ? (
          <div className="flex gap-4 justify-center">
            <input 
              type="number" 
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              className="text-center text-4xl border-b-4 border-blue-300 outline-none w-40 py-2 bg-blue-50 rounded-xl focus:border-blue-500 transition-colors"
              autoFocus
            />
            <Button onClick={handleCheck} size="lg">提交</Button>
          </div>
        ) : (
          <div className="animate-bounce-in">
            {status === 'correct' ? (
                <div className="flex flex-col items-center text-green-500">
                    <Check size={80} />
                    <span className="text-3xl font-bold">答对了!</span>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-red-500 flex flex-col items-center mb-4">
                        <X size={80} />
                        <span className="text-3xl font-bold">答错了!</span>
                    </div>
                    <p className="text-2xl text-gray-600 mb-6">
                        正确答案是: <span className="font-bold text-blue-600">{currentQ.answer}</span>
                    </p>
                    <Button onClick={nextQuestion} variant="neutral" size="lg" className="w-full">
                        下一题 <ArrowRight className="ml-2" />
                    </Button>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};