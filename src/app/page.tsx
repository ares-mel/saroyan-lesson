import React from 'react';
import Hero from './components/Hero';
import ContextSection from './components/ContextSection';
import CinemaSection from './components/CinemaSection';
import QuizSection from './components/QuizSection';
import VocabularyDeck from './components/VocabularyDeck';
import WritingTask from './components/WritingTask';

const App = () => {
  return (
    <div>
      <Hero />
      <ContextSection />
      <CinemaSection />
      <QuizSection />
      <VocabularyDeck />
      <WritingTask />
    </div>
  );
};

export default App;