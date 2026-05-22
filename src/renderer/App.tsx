import React, { useMemo, useState } from 'react';
import { OverlayControls } from './components/OverlayControls';
import { LessonScreen } from './screens/LessonScreen';
import { melSvg } from '../assets/MelMascot';
import { minieSvg } from '../assets/MinieMascot';

type Lesson = { title: string; instruction: string; demonstration: string; userAction: string; validation: string; gate: string };
const tutorialLessons: Lesson[] = [
  { title: 'Abrir o tutorial pelo atalho', instruction: 'Abra pelo atalho na área de trabalho.', demonstration: 'Mel mostra o atalho e duplo clique.', userAction: 'Dar duplo clique no atalho.', validation: 'Confirma abertura do app.', gate: 'Só avança após confirmação.' },
  { title: 'Entender overlay', instruction: 'Reconhecer Mel por cima da tela.', demonstration: 'Mel aparece no canto seguro.', userAction: 'Identificar overlay vs programa real.', validation: 'Resposta correta na pergunta visual.', gate: 'Bloqueia avanço sem acerto.' },
  { title: 'Pausar', instruction: 'Use Pausar.', demonstration: 'Ponteiro guia no botão.', userAction: 'Clique em Pausar.', validation: 'Estado muda para pausado.', gate: 'Exige ação correta.' },
  { title: 'Retomar', instruction: 'Use Retomar.', demonstration: 'Destaque no botão flutuante.', userAction: 'Clique em Retomar.', validation: 'Retorna ao estado ativo.', gate: 'Exige retomada confirmada.' },
  { title: 'Repetir demonstração', instruction: 'Repetir é permitido.', demonstration: 'Reproduz a etapa novamente.', userAction: 'Clique em Repetir demonstração.', validation: 'Contador de repetição incrementa.', gate: 'Exige repetir 1 vez.' },
  { title: 'Estou perdida', instruction: 'Use quando não achar a etapa.', demonstration: 'Traz foco para área correta.', userAction: 'Clique em Estou perdida.', validation: 'Painel volta para etapa.', gate: 'Exige uso do recurso.' },
  { title: 'Fechar com segurança', instruction: 'Feche sem perder progresso.', demonstration: 'Mel explica salvamento.', userAction: 'Clique Fechar tutorial e confirme.', validation: 'Progresso persistido.', gate: 'Exige fechamento seguro.' },
  { title: 'Abrir novamente e continuar', instruction: 'Reabra e continue.', demonstration: 'Botão continuar exibido.', userAction: 'Selecionar continuar de onde parou.', validation: 'Etapa restaurada.', gate: 'Exige retomada do progresso.' }
];

function MascotLayer() {
  return <section aria-label="mascots"><div dangerouslySetInnerHTML={{ __html: melSvg }} /><div dangerouslySetInnerHTML={{ __html: minieSvg }} /></section>;
}

function HomeScreen({ start }: { start: () => void }) { return <section><h2>HomeScreen</h2><button onClick={start}>Iniciar módulo</button></section>; }
function ModuleScreen({ name, children }: { name: string; children: React.ReactNode }) { return <section><h2>ModuleScreen: {name}</h2>{children}</section>; }
function MasteryGate({ passed }: { passed: boolean }) { return <p>{passed ? 'MasteryGate: aprovado' : 'MasteryGate: bloqueado'}</p>; }

export function App() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const lesson = tutorialLessons[lessonIndex];
  const canAdvance = useMemo(() => !paused && (lesson.title !== 'Repetir demonstração' || repeatCount > 0), [paused, lesson.title, repeatCount]);

  return (
    <main className="app-shell">
      <h1>AppShell - Mel e Minie Tutor PC</h1>
      <OverlayControls
        paused={paused}
        onPause={() => setPaused(true)}
        onResume={() => setPaused(false)}
        onRepeat={() => setRepeatCount((n) => n + 1)}
        onImLost={() => setLessonIndex(0)}
        onClose={() => setPaused(true)}
      />
      <MascotLayer />
      {!started ? <HomeScreen start={() => setStarted(true)} /> : (
        <ModuleScreen name="Conhecendo a Mel e a Minie">
          <LessonScreen title={lesson.title} paused={paused} onNext={() => canAdvance && setLessonIndex((i) => Math.min(i + 1, tutorialLessons.length - 1))} />
          <ul>
            <li>Instrução: {lesson.instruction}</li>
            <li>Demonstração: {lesson.demonstration}</li>
            <li>Ação da usuária: {lesson.userAction}</li>
            <li>Validação: {lesson.validation}</li>
            <li>Gate de avanço: {lesson.gate}</li>
          </ul>
          <p>ProgressState: aula {lessonIndex + 1} de {tutorialLessons.length}</p>
          <MasteryGate passed={canAdvance} />
        </ModuleScreen>
      )}
    </main>
  );
}
