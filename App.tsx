import React, { useState } from 'react';
import { Button } from './components/Button';
import { MathPractice } from './components/MathPractice';
import { EnglishPractice } from './components/EnglishPractice';
import { MistakeBook } from './components/MistakeBook';
import { Summary } from './components/Summary';
import { Calculator, Languages, BookX, ScrollText } from 'lucide-react';

type ViewState = 'menu' | 'math' | 'english' | 'math_mistakes' | 'english_mistakes' | 'summary';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('menu');

  const renderContent = () => {
    switch (view) {
      case 'math':
        return <MathPractice onBack={() => setView('menu')} />;
      case 'english':
        return <EnglishPractice onBack={() => setView('menu')} />;
      case 'math_mistakes':
        return <MistakeBook type="math" onBack={() => setView('menu')} />;
      case 'english_mistakes':
        return <MistakeBook type="english" onBack={() => setView('menu')} />;
      case 'summary':
        return <Summary onBack={() => setView('menu')} />;
      default:
        return <MainMenu />;
    }
  };

  const MainMenu = () => (
    <div className="flex flex-col items-center animate-fade-in w-full max-w-4xl mx-auto">
       <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-kid-blue to-kid-orange drop-shadow-sm mb-4">
            SmartKids 快乐学习
          </h1>
          <p className="text-xl text-slate-500 font-medium">每天进步一点点！</p>
       </header>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
          <MenuCard 
            title="数学练习" 
            icon={<Calculator size={48} className="text-white" />}
            color="bg-kid-blue"
            onClick={() => setView('math')}
            desc="加减乘除 1000 以内"
          />
          <MenuCard 
            title="单词记忆" 
            icon={<Languages size={48} className="text-white" />}
            color="bg-kid-green"
            onClick={() => setView('english')}
            desc="初级英语单词"
          />
          <MenuCard 
            title="数学错题本" 
            icon={<BookX size={48} className="text-white" />}
            color="bg-kid-orange"
            onClick={() => setView('math_mistakes')}
            desc="复习算错的题目"
          />
          <MenuCard 
            title="英语错题本" 
            icon={<BookX size={48} className="text-white" />}
            color="bg-purple-400"
            onClick={() => setView('english_mistakes')}
            desc="复习拼写错误的单词"
          />
       </div>

       <div className="mt-12 w-full px-4">
          <Button variant="neutral" size="lg" className="w-full bg-white border-slate-300" onClick={() => setView('summary')}>
             <ScrollText className="mr-2" /> 查看历史学习记录
          </Button>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-yellow-200">
       {renderContent()}
    </div>
  );
};

const MenuCard = ({ title, icon, color, onClick, desc }: { title: string, icon: React.ReactNode, color: string, onClick: () => void, desc: string }) => (
  <button 
    onClick={onClick}
    className={`${color} rounded-[2rem] p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group text-left relative overflow-hidden`}
  >
    <div className="relative z-10 flex items-center gap-6">
      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
        {icon}
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">{title}</h2>
        <p className="text-white/80 font-medium">{desc}</p>
      </div>
    </div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
  </button>
);

export default App;
