export const verificationTypes = new Set(['folderExists','fileExists','activeWindow','uiaElementVisible','regionClick','multipleChoice','sequenceOrder','repeatPractice','checklistControl']);
export function canAdvance(completed) { return completed.every(Boolean); }
