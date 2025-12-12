import React, { useState, useEffect } from 'react';
import { generateWordSession } from '../utils/generators';
import { Word } from '../types';
import { Button } from './Button';
import { addMistake, removeMistake, saveHistory } from '../services/storageService';
import { Check, X, ArrowRight } from 'lucide-react';

interface EnglishPracticeProps {
  onBack: () => void;
}

type Mode = 'en_to_zh' | 'zh_to_en' | null;

export const EnglishPractice: React.FC<EnglishPracticeProps> = ({ onBack }) => {
  const [mode, setMode] = useState<Mode>(null);
  const [count, setCount] = useState<number>(10);
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [score, setScore] = useState(0);
  const [wrongItems, setWrongItems] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const startPractice = (selectedMode: Mode) => {
    setMode(selectedMode);
    setWords(generateWordSession(count));
  };

  const handleCheck = () => {
    if (!input) return;
    
    const currentW = words[currentIndex];
    const cleanInput = input.trim().toLowerCase();
    
    let isCorrect = false;
    let correctAns = '';

    if (mode === 'en_to_zh') {
        // Simple string includes for Chinese to be lenient, or exact match
        isCorrect = currentW.zh.includes(cleanInput); 
        correctAns = currentW.zh;
    } else {
        isCorrect = cleanInput === currentW.en.toLowerCase();
        correctAns = currentW.en;
    }

    if (isCorrect) {
      setStatus('correct');
      setScore(s => s + 1);
      if (currentW.isMistakeRetry) {
        removeMistake('english', currentW.id);
      }
      setTimeout(nextQuestion, 1000);
    } else {
      setStatus('wrong');
      addMistake('english', currentW);
      setWrongItems(prev => [...prev, `${currentW.en} ↔ ${currentW.zh}`]);
    }
  };

  const nextQuestion = () => {
    setStatus('idle');
    setInput('');
    if (currentIndex < words.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      finishPractice();
    }
  };

  const finishPractice = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    if (isFinished && mode && words.length > 0) {
      const finalScore = Math.round((score / words.length) * 100);
      saveHistory({
        id: crypto.randomUUID(),
        date: new Date().toLocaleString(),
        type: `单词记忆 (${mode === 'en_to_zh' ? '英译中' : '中译英'})`,
        totalQuestions: words.length,
        score: finalScore,
        wrongItems
      });
    }
  }, [isFinished, score, words.length, wrongItems, mode]);

  // View: Setup (Mode and Count Selection)
  if (!mode) {
    return (
      <div className="max-w-2xl mx-auto w-full text-center animate-fade-in">
         <h2 className="text-3xl font-bold text-kid-blue mb-6">设置练习</h2>
         
         <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
             <h3 className="text-xl text-gray-500 mb-4 font-bold">1. 选择题目数量</h3>
             <div className="flex flex-wrap justify-center gap-3">
                {[10, 20, 30, 50, 100].map(num => (
                    <button
                        key={num}
                        onClick={() => setCount(num)}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all border-b-4 ${
                            count === num 
                            ? 'bg-kid-green text-white border-green-600 scale-105' 
                            : 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'
                        }`}
                    >
                        {num}
                    </button>
                ))}
             </div>
         </div>

         <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
            <h3 className="text-xl text-gray-500 mb-4 font-bold">2. 选择模式开始</h3>
            <div className="grid gap-4">
                <Button size="xl" onClick={() => startPractice('en_to_zh')} className="bg-purple-400 border-purple-600 hover:bg-purple-500">
                    看英文写中文 (Apple → 苹果)
                </Button>
                <Button size="xl" onClick={() => startPractice('zh_to_en')} className="bg-pink-400 border-pink-600 hover:bg-pink-500">
                    看中文写英文 (苹果 → Apple)
                </Button>
            </div>
         </div>
         
         <Button variant="neutral" onClick={onBack}>返回</Button>
      </div>
    );
  }

  // View: Summary (Finished)
  if (isFinished) {
    const finalScore = Math.round((score / words.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 animate-fade-in">
        <h2 className="text-4xl font-bold text-kid-blue mb-4">🎉 练习完成!</h2>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center text-2xl mb-4 border-b pb-4">
                <span>总题数:</span>
                <span className="font-bold">{words.length}</span>
            </div>
            <div className="flex justify-between items-center text-2xl mb-4 border-b pb-4">
                <span>正确率:</span>
                <span className={`font-bold ${finalScore === 100 ? 'text-green-500' : 'text-orange-500'}`}>
                    {finalScore}%
                </span>
            </div>

            {wrongItems.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-red-500 mb-2">需要复习的单词:</h3>
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

  const currentW = words[currentIndex];

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500 text-xl">单词: {currentIndex + 1} / {words.length}</span>
        <Button variant="neutral" size="sm" onClick={onBack}>退出</Button>
      </div>

      <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
        {currentW.isMistakeRetry && (
            <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
                错题复习
            </div>
        )}
        
        <div className="text-5xl font-bold text-slate-700 mb-4">
            {mode === 'en_to_zh' ? currentW.en : currentW.zh}
        </div>
        <p className="text-gray-400 mb-8 text-lg">
            ({mode === 'en_to_zh' ? '请输入中文意思' : '请输入英文拼写'})
        </p>

        {status === 'idle' ? (
          <div className="flex gap-4 justify-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              className="text-center text-3xl border-b-4 border-purple-300 outline-none w-64 py-2 bg-purple-50 rounded-xl focus:border-purple-500 transition-colors"
              autoFocus
            />
            <Button onClick={handleCheck} size="lg">提交</Button>
          </div>
        ) : (
          <div className="animate-bounce-in">
            {status === 'correct' ? (
                <div className="flex flex-col items-center text-green-500">
                    <Check size={80} />
                    <span className="text-3xl font-bold">正确!</span>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-red-500 flex flex-col items-center mb-4">
                        <X size={80} />
                        <span className="text-3xl font-bold">答错了!</span>
                    </div>
                    <p className="text-2xl text-gray-600 mb-6">
                        正确答案: <br/>
                        <span className="font-bold text-purple-600 text-4xl">
                            {mode === 'en_to_zh' ? currentW.zh : currentW.en}
                        </span>
                    </p>
                    <Button onClick={nextQuestion} variant="neutral" size="lg" className="w-full">
                        下一个 <ArrowRight className="ml-2" />
                    </Button>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};