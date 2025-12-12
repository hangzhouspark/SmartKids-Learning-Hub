export type QuestionType = 'math' | 'english';

export interface MathProblem {
  id: string;
  expression: string; // e.g., "15 + 20"
  answer: number;
  isMistakeRetry: boolean;
}

export interface Word {
  id: string;
  en: string;
  zh: string;
  isMistakeRetry?: boolean;
}

export interface HistoryRecord {
  id: string;
  date: string;
  type: string; // "数学练习" | "单词记忆"
  totalQuestions: number;
  score: number;
  wrongItems: string[]; // List of wrong questions/words for display
}

export interface MistakeRecord {
  id: string;
  type: QuestionType;
  content: MathProblem | Word;
  addedAt: number;
}
