import { HistoryRecord, MistakeRecord, QuestionType, MathProblem, Word } from '../types';

const HISTORY_KEY = 'smartkids_history';
const MATH_MISTAKES_KEY = 'smartkids_mistakes_math';
const ENGLISH_MISTAKES_KEY = 'smartkids_mistakes_english';

// --- History ---
export const saveHistory = (record: HistoryRecord) => {
  const current = getHistory();
  const updated = [record, ...current];
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
};

export const getHistory = (): HistoryRecord[] => {
  const data = localStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
};

export const exportHistoryToCSV = () => {
  const history = getHistory();
  if (history.length === 0) return;

  const headers = ['Date', 'Type', 'Total', 'Score', 'Errors'];
  const rows = history.map(h => [
    h.date,
    h.type,
    h.totalQuestions,
    `${h.score}%`,
    `"${h.wrongItems.join('; ')}"` // Escape commas in content
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `study_record_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- Mistakes ---
export const getMistakes = (type: QuestionType): MistakeRecord[] => {
  const key = type === 'math' ? MATH_MISTAKES_KEY : ENGLISH_MISTAKES_KEY;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const addMistake = (type: QuestionType, content: MathProblem | Word) => {
  const mistakes = getMistakes(type);
  // Avoid duplicates based on content
  const exists = mistakes.some(m => {
    if (type === 'math') return (m.content as MathProblem).expression === (content as MathProblem).expression;
    return (m.content as Word).en === (content as Word).en;
  });

  if (!exists) {
    const newMistake: MistakeRecord = {
      id: crypto.randomUUID(),
      type,
      content,
      addedAt: Date.now()
    };
    mistakes.push(newMistake);
    const key = type === 'math' ? MATH_MISTAKES_KEY : ENGLISH_MISTAKES_KEY;
    localStorage.setItem(key, JSON.stringify(mistakes));
  }
};

export const removeMistake = (type: QuestionType, contentId: string) => {
  const mistakes = getMistakes(type);
  const filtered = mistakes.filter(m => {
    if (type === 'math') return (m.content as MathProblem).id !== contentId;
    return (m.content as Word).id !== contentId;
  });
  const key = type === 'math' ? MATH_MISTAKES_KEY : ENGLISH_MISTAKES_KEY;
  localStorage.setItem(key, JSON.stringify(filtered));
};
