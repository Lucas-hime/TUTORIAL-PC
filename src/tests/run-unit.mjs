import { getLessonOrder, getTutorialControls } from '../engines/lesson-engine.mjs';
import { canAdvance } from '../engines/action-verification-engine.mjs';
if (getLessonOrder()[0] !== 'Conhecendo o tutorial') throw new Error('ordem inválida');
if (getTutorialControls().length !== 8) throw new Error('controles incompletos');
if (canAdvance([true,true]) !== true || canAdvance([true,false]) !== false) throw new Error('gate inválido');
console.log('Testes unitários OK');
