import lessons from '../lessons/lessons.json' with { type: 'json' };
export function getLessonOrder() { return lessons.modules; }
export function getTutorialControls() { return lessons.tutorialControls; }
