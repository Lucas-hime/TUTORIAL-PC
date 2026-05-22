import React from 'react';

export function LessonScreen({ title, paused, onNext }: { title: string; paused: boolean; onNext: () => void }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{paused ? 'Tutorial pausado.' : 'Tutorial em execução.'}</p>
      <button onClick={onNext} disabled={paused}>Próximo</button>
    </section>
  );
}
