import { MathProblem, Word } from '../types';
import { getMistakes } from '../services/storageService';
import { VOCABULARY_DB } from './vocabulary';

// Use the imported large vocabulary list
const BASIC_WORDS: Word[] = VOCABULARY_DB;

export const generateMathSession = (count: number = 10): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  // 1. Try to get mistakes first
  const mistakes = getMistakes('math');
  // Use up to 50% of the session for mistakes if available
  const mistakesToRetry = mistakes.slice(0, Math.ceil(count / 2)); 
  
  mistakesToRetry.forEach(m => {
    problems.push({ ...(m.content as MathProblem), isMistakeRetry: true });
  });

  // 2. Fill the rest with new random problems
  // If we have enough mistakes, we might need fewer new questions
  const neededNew = count - problems.length;
  for (let i = 0; i < neededNew; i++) {
    problems.push(generateRandomMathProblem());
  }

  // Shuffle
  return problems.sort(() => Math.random() - 0.5);
};

const generateRandomMathProblem = (): MathProblem => {
  const operators = ['+', '-', '*', '/'];
  const op = operators[Math.floor(Math.random() * operators.length)];
  let a = 0, b = 0, answer = 0, expression = '';

  if (op === '+') {
    a = Math.floor(Math.random() * 900) + 1; // 1-900
    b = Math.floor(Math.random() * (1000 - a)); 
    answer = a + b;
    expression = `${a} + ${b}`;
  } else if (op === '-') {
    a = Math.floor(Math.random() * 900) + 10; 
    b = Math.floor(Math.random() * a); 
    answer = a - b;
    expression = `${a} - ${b}`;
  } else if (op === '*') {
    // Limit multiplication to easier numbers for primary school 
    // (e.g., 1-20 * 1-20 or 1-100 * 1-9)
    if (Math.random() > 0.5) {
        a = Math.floor(Math.random() * 90) + 10;
        b = Math.floor(Math.random() * 9) + 2;
    } else {
        a = Math.floor(Math.random() * 20) + 1;
        b = Math.floor(Math.random() * 20) + 1;
    }
    answer = a * b;
    expression = `${a} × ${b}`;
  } else {
    // Division: ensure integer result. generate via mult.
    const result = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 10) + 2; 
    a = result * b;
    answer = result;
    expression = `${a} ÷ ${b}`;
  }

  return {
    id: crypto.randomUUID(),
    expression,
    answer,
    isMistakeRetry: false
  };
};

export const generateWordSession = (count: number = 10): Word[] => {
    const sessionWords: Word[] = [];
    
    // 1. Get mistakes
    const mistakes = getMistakes('english');
    const mistakesToRetry = mistakes.slice(0, Math.ceil(count / 2));

    mistakesToRetry.forEach(m => {
        sessionWords.push({ ...(m.content as Word), isMistakeRetry: true });
    });

    const remainingCount = count - sessionWords.length;

    // 2. Get random words from the large DB
    // Create a pool of IDs already in session to avoid duplicates (from mistakes)
    const existingIds = new Set(sessionWords.map(w => w.id));
    
    // Filter available pool
    const availablePool = BASIC_WORDS.filter(w => !existingIds.has(w.id));
    
    // Shuffle the available pool completely to ensure high randomness
    // Using the Fisher-Yates shuffle algorithm is better for large arrays than sort(random)
    // but for 500 items sort is okay. We'll use a simple random selection loop.
    
    // Clone pool to allow splicing (picking without replacement)
    const pool = [...availablePool];

    for (let i = 0; i < remainingCount; i++) {
        if (pool.length === 0) {
            // If we run out of words (unlikely with 500+ words unless user does >500 questions),
            // we stop or we could reset pool. Here we just stop to avoid duplicates.
            break; 
        }
        const index = Math.floor(Math.random() * pool.length);
        sessionWords.push(pool[index]);
        pool.splice(index, 1); // Remove selected to prevent duplicates in this session
    }

    return sessionWords.sort(() => Math.random() - 0.5);
}
