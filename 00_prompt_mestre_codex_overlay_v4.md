# Prompt mestre para Codex V4

Você é um desenvolvedor sênior especialista em Windows 11, Electron, React, TypeScript, acessibilidade, UI Automation, overlays, testes automatizados, design system e instaladores Windows.

Construa um aplicativo chamado Mel e Minie Tutor PC.

Este app será usado por uma senhora de 61 anos, no Windows 11, com duas telas, para aprender computador trabalhando sobre os programas reais.

Não faça MVP.

Não faça prova de conceito.

Não entregue código parcial.

Não entregue placeholder.

Não deixe TODO.

Não deixe função vazia.

Não deixe componente fake.

Não escreva código sem teste quando o comportamento for crítico.

Não use imagem externa.

Não dependa de internet para o app funcionar depois de instalado.

Não esconda limitações técnicas. Quando algo não puder ser validado automaticamente com confiabilidade, use validação híbrida e registre isso no código e no fluxo pedagógico.

## Objetivo real

A usuária deve aprender a usar

1. O próprio tutorial.
2. Windows 11 com duas telas.
3. Explorador de Arquivos.
4. Word real.
5. PowerPoint real.
6. Navegador real.
7. ChatGPT no navegador.
8. Organização básica do computador.

## Personagens obrigatórias

Mel e Minie são duas cachorrinhas da raça yorkshire.

Elas devem aparecer visualmente como duas cachorrinhas pequenas, expressivas e amigáveis.

Mel é a professora principal.

Mel é uma cachorrinha yorkshire de pelo preto com marrom.

Minie é a assistente de dicas.

Minie é uma cachorrinha yorkshire de pelo prateado com marrom e orelhinhas pontudas.

Não desenhar Mel nem Minie como clipes.

Não desenhar como robôs.

Não desenhar como humanas.

Não desenhar como ícones abstratos.

Não desenhar como personagens famosos.

Não usar Clippy.

Não usar asset da Microsoft.

Não usar asset da Disney.

Não usar imagem baixada da internet.

Criar Mel e Minie como SVG próprio no projeto.

Arquivos obrigatórios

MelMascot.tsx

MinieMascot.tsx

MascotRunAnimation.tsx

MascotSpeechBubble.tsx

## Comportamento da Mel

Quando uma aula começa, Mel aparece e corre para um canto seguro da tela.

Canto seguro significa

1. Não cobre botão.
2. Não cobre campo de digitação.
3. Não cobre menu.
4. Não cobre texto importante.
5. Não cobre área destacada.
6. Não cobre a barra de tarefas.
7. Não cobre o botão Fechar tutorial.
8. Não cobre o botão Pausar.

Mel explica o conceito e conduz a aula.

Mel fala em frases curtas.

## Comportamento da Minie

Minie aparece para dica, atalho, cuidado ou facilidade.

Minie é menor que Mel.

Minie tem pelo prateado com marrom e orelhinhas pontudas.

Minie não aparece com texto longo.

Minie não deve disputar atenção com Mel.

## Conceito central do app

O app é um tutor em overlay sobre o ambiente real.

Ele abre e guia programas reais.

O overlay deve mostrar visualmente onde a usuária deve olhar e clicar.

Toda aula prática deve usar pelo menos um recurso visual

1. Ponteiro guia animado.
2. Destaque piscante.
3. Seta.
4. Máscara de foco.
5. Balão de explicação.
6. Demonstração curta.

## Programas reais

O tutor deve trabalhar sobre

1. Windows 11.
2. Explorador de Arquivos.
3. Microsoft Word.
4. Microsoft PowerPoint.
5. Navegador padrão.
6. ChatGPT no navegador.

Simulação só pode ser usada como fallback, explicação preparatória ou modo de segurança.

O fluxo principal deve acontecer em ambiente real.

## Primeira aula obrigatória

Antes de ensinar Windows, Word ou qualquer outro programa, o app deve ensinar a própria usuária a usar o tutorial.

Módulo zero

Conhecendo a Mel e a Minie

Aulas obrigatórias

1. Abrir o tutorial pelo atalho da área de trabalho.
2. Entender que a Mel aparece por cima da tela.
3. Pausar o tutorial.
4. Retomar o tutorial.
5. Repetir demonstração.
6. Usar o botão Estou perdida.
7. Fechar o tutorial com segurança.
8. Abrir novamente e continuar de onde parou.

Essa aula deve ser instalada e executada no primeiro uso.

## Ordem lógica obrigatória

1. Conhecendo o tutorial.
2. Janelas e duas telas no Windows 11.
3. Explorador de Arquivos.
4. Word real.
5. PowerPoint real.
6. Internet.
7. ChatGPT.
8. Organização do PC.
9. Revisões.

Não colocar Word antes de janelas, telas, Explorador e pastas.

## Validação antes de avançar

A usuária não pode avançar apenas clicando em Próximo.

Cada etapa deve ter método de validação.

Tipos aceitos

1. Pasta existe.
2. Arquivo existe.
3. Janela ativa correta.
4. Elemento detectado por UI Automation.
5. Clique em região correta no overlay.
6. Pergunta visual.
7. Ordenação de passos.
8. Repetição prática.
9. Checklist com confirmação e pergunta de controle.

A próxima etapa só libera se

1. A tarefa foi feita.
2. A fixação foi aprovada.
3. Ou o familiar usou desbloqueio responsável.

## Desbloqueio responsável

O desbloqueio manual deve existir, mas não pode ficar fácil para a usuária acionar sem querer.

Fica em Configurações avançadas.

Exige confirmação.

Registra no progresso.

## Stack obrigatória

Electron.

React.

TypeScript.

Vite.

Tailwind.

Electron Builder.

Playwright.

Vitest.

Helper nativo Windows em .NET 8 para UI Automation.

Armazenamento local em JSON.

## Arquitetura obrigatória

Electron main process.

Renderer React.

Preload seguro.

OverlayWindow transparente e sempre no topo.

ControlPanelWindow.

Overlay por monitor.

Windows UI Automation Helper em .NET.

Lesson Engine.

Overlay Guidance Engine.

Action Verification Engine.

Mastery Test Engine.

Progress Service.

Settings Service.

Installer NSIS.

## Segurança obrigatória no Electron

nodeIntegration false.

contextIsolation true.

sandbox true quando viável.

Não expor ipcRenderer.

Não aceitar comando arbitrário do renderer.

Não abrir conteúdo remoto dentro do Electron.

Usar shell.openExternal apenas com URLs validadas.

## Overlay obrigatório

O overlay deve

1. Ser transparente.
2. Ficar sempre no topo.
3. Funcionar com duas telas.
4. Deixar clique passar para o programa real quando não for botão do tutor.
5. Capturar clique nos botões do tutor.
6. Mostrar ponteiro guia.
7. Mostrar destaque piscante.
8. Mostrar Mel e Minie em área segura.
9. Ter botão Fechar tutorial sempre visível.
10. Ter botão Pausar sempre visível.
11. Ter botão Repetir demonstração.
12. Ter botão Estou perdida.

## Duas telas

O app deve detectar monitores.

O overlay deve aparecer no monitor onde está a janela alvo.

Se a janela for arrastada para outra tela, o overlay deve acompanhar.

O app deve ensinar a mover janelas entre telas.

## Design obrigatório

Fonte grande por padrão.

Alto contraste opcional.

Botões grandes.

Sem texto cortado.

Sem sobreposição.

Sem overflow horizontal.

Personagens nunca cobrem ações.

Botão Fechar tutorial nunca fica escondido.

## Testes obrigatórios

O projeto só pode ser declarado pronto se passar em

npm run typecheck

npm run lint

npm run test

npm run test:e2e

npm run test:layout

npm run test:overlay

npm run build:win

## Critério final

Antes de responder que terminou, gere um relatório chamado

RELATORIO_FINAL_DE_ENTREGA.md

Esse relatório deve conter

1. O que foi implementado.
2. Como rodar.
3. Como gerar instalador.
4. Como testar overlay.
5. Como testar duas telas.
6. Como testar abrir e fechar tutorial.
7. Quais validações automáticas existem.
8. Quais validações são híbridas.
9. Lista de todos os testes executados.
10. Declaração de que não há TODO, placeholder ou componente fake.
