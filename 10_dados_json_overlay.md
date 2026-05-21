# Estrutura de dados do conteúdo overlay

## Lesson

Campos

id.

moduleId.

title.

objective.

realApp.

requiresOverlay.

requiresMastery.

steps.

masteryGate.

reviewSchedule.

## Step

Campos

id.

type.

melSays.

minieTip.

targetApp.

targetWindow.

targetElement.

fallbackTarget.

visualAid.

instruction.

verification.

onSuccess.

onFail.

## visualAid

Tipos

pointerGuide.

pulseHighlight.

focusMask.

arrow.

mascotRun.

speechBubble.

## targetElement

Campos

automationName.

controlType.

relativeRegion.

preferredMonitor.

fallbackCoordinates.

## verification

Tipos

fileExists.

folderExists.

activeWindow.

uiaElementVisible.

regionClick.

multipleChoice.

sequenceOrder.

manualResponsibleCheck.

## masteryGate

Campos

requiredScore.

tasks.

questions.

repeatWithoutGuide.

responsibleUnlockAllowed.

## Exemplo

Aula

Aumentar texto no Word

Etapas

1. Abrir Word.
2. Criar documento.
3. Digitar frase.
4. Selecionar texto.
5. Destacar controle de fonte.
6. Aumentar tamanho.
7. Teste visual.
8. Repetir sem ponteiro.

Gate

1. Identificar onde muda tamanho.
2. Aumentar texto de outra frase.
3. Acertar pergunta de função.
