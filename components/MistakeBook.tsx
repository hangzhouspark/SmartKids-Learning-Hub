import React, { useState, useEffect } from 'react';
import { getMistakes } from '../services/storageService';
import { QuestionType, MistakeRecord, MathProblem, Word } from '../types';
import { Button } from './Button';
import { Trash2 } from 'lucide-react';

interface MistakeBookProps {
  type: QuestionType;
  onBack: () => void;
}

export const MistakeBook: React.FC<MistakeBookProps> = ({ type, onBack }) => {
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);

  useEffect(() => {
    setMistakes(getMistakes(type));
  }, [type]);

  return (
    <div className="max-w-3xl mx-auto w-full">
       <div className="flex justify-between items-center mb-6">
         <h2 className="text-3xl font-bold text-slate-700">
            {type === 'math' ? '🧮 数学错题本' : '📕 英语错题本'}
         </h2>
         <Button variant="neutral" onClick={onBack}>返回</Button>
       </div>

       {mistakes.length === 0 ? (
         <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
            <span className="text-6xl block mb-4">🌟</span>
            <h3 className="text-2xl font-bold text-gray-400">太棒了！目前没有错题。</h3>
            <p className="text-gray-400 mt-2">错题会在练习中自动消除哦。</p>
         </div>
       ) : (
         <div className="grid gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-800 mb-2 text-center">
                💡 提示：这些错题会自动出现在下次练习中。只要答对一次，它们就会消失！
            </div>
            {mistakes.map((m) => {
                if (type === 'math') {
                    const content = m.content as MathProblem;
                    return (
                        <div key={m.id} className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-red-400 flex justify-between items-center">
                            <span className="text-3xl font-mono font-bold text-slate-700">{content.expression} = ?</span>
                            <span className="text-gray-400 text-sm">正确答案: {content.answer}</span>
                        </div>
                    );
                } else {
                    const content = m.content as Word;
                    return (
                        <div key={m.id} className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-red-400 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-slate-800">{content.en}</span>
                                <span className="text-xl text-gray-500">{content.zh}</span>
                            </div>
                        </div>
                    );
                }
            })}
         </div>
       )}
    </div>
  );
};