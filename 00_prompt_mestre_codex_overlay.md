# Prompt mestre para Codex

Você é um desenvolvedor sênior de Windows, Electron, acessibilidade e automação de interface.

Crie um aplicativo chamado Mel e Minie Tutor PC.

O app será usado por uma senhora de 61 anos, no Windows 11, com duas telas, para aprender computador trabalhando sobre os programas reais.

Não faça um MVP.

Construa a base completa e correta, com arquitetura segura, layout testável, overlay funcional, validação de aprendizado e instalador único.

## Conceito

O app funciona como tutor em overlay.

A Mel é a professora principal.

A Mel é uma yorkshire de pelo preto com marrom.

Quando uma aula começa, a Mel aparece correndo até o canto da tela e começa a ensinar.

A Minie é a assistente de dicas.

A Minie é uma yorkshire de pelo prateado com marrom e orelhinhas pontudas.

A Minie aparece quando houver dica, atalho, facilidade ou alerta.

## Regra principal

Ensinar em cima do ambiente real.

O tutor deve abrir e guiar o uso de

1. Explorador de Arquivos.
2. Word.
3. PowerPoint.
4. Navegador.
5. ChatGPT no navegador.
6. Recursos do Windows 11 com duas telas.

## Demonstração visual obrigatória

Toda aula prática deve usar pelo menos um destes recursos

1. Ponteiro guia animado.
2. Destaque piscante no local correto.
3. Seta de indicação.
4. Balão explicando a parte da interface.
5. Mini demonstração antes da usuária clicar.

Exemplo

Para aumentar o texto no Word, o app deve

1. Ativar a janela do Word.
2. Destacar o texto selecionado ou pedir para selecionar.
3. Mostrar um ponteiro guia indo até a área de tamanho da fonte.
4. Piscar a região correta da faixa superior.
5. Mel explica o que é tamanho da fonte.
6. Minie dá dica curta.
7. A usuária executa.
8. O app verifica se a tarefa foi feita ou aplica teste de fixação.

## Validação antes de avançar

A usuária não pode avançar apenas clicando em Próximo.

Cada etapa deve ter um método de validação.

Tipos de validação

1. Validação automática por arquivo.
2. Validação automática por janela ativa.
3. Validação por UI Automation.
4. Validação por pergunta visual.
5. Validação por teste prático.
6. Validação por checklist com confirmação e pergunta de controle.

O app só libera a próxima aula quando

1. A tarefa foi feita.
2. A usuária passou no teste de fixação.
3. Ou o familiar desbloqueou manualmente em modo responsável.

## Importante sobre programas reais

Nem tudo dentro de Word, PowerPoint ou navegador pode ser detectado com 100 por cento de confiabilidade.

Por isso, implemente validação híbrida.

Ordem de preferência

1. Validar automaticamente quando possível.
2. Usar UI Automation quando o elemento for detectável.
3. Validar por evidência de arquivo quando a tarefa envolve salvar, criar ou mover.
4. Fazer pergunta de fixação quando a ação visual não puder ser detectada.
5. Permitir desbloqueio responsável apenas em menu protegido.

## Stack obrigatória

Electron.

React.

TypeScript.

Vite.

Tailwind.

Electron Builder.

Playwright.

Helper nativo Windows em .NET 8 para UI Automation.

Armazenamento local em JSON.

## Arquitetura obrigatória

1. Electron main process.
2. Renderer React.
3. Preload seguro com contextBridge.
4. OverlayWindow transparente e sempre no topo.
5. ControlPanelWindow para painel do tutor.
6. Overlay por monitor usando screen.getAllDisplays.
7. Windows UI Automation Helper em .NET.
8. Lesson Engine.
9. Action Verification Engine.
10. Mastery Test Engine.
11. Content JSON.
12. Local Storage.
13. Installer NSIS.

## Segurança Electron

nodeIntegration false.

contextIsolation true.

Não expor ipcRenderer.

Não executar comando arbitrário vindo do renderer.

Preload deve expor APIs específicas e validadas.

## Overlay técnico

O overlay deve

1. Ser transparente.
2. Ficar sempre no topo.
3. Ignorar cliques na maior parte da tela.
4. Capturar clique apenas em botões do tutor.
5. Ter ponteiro guia próprio.
6. Ter destaque visual com animação.
7. Trabalhar em múltiplos monitores.
8. Reposicionar quando a janela alvo mudar de tela.
9. Ter botão Fechar tutorial.
10. Ter modo Pausar.

## Comportamento da Mel

Ao começar uma aula

1. Mel aparece no centro por no máximo 1 segundo.
2. Mel corre até o canto seguro da tela.
3. O canto escolhido não pode cobrir botão importante.
4. Se o canto estiver ocupado, escolher outro.
5. Mel fala em balão curto.

## Comportamento da Minie

Minie aparece somente quando houver dica.

Ela fica menor que Mel.

Ela não disputa atenção com a instrução principal.

## Ordem lógica das aulas

1. Janelas e duas telas.
2. Explorador de Arquivos.
3. Word.
4. PowerPoint.
5. Internet.
6. ChatGPT.
7. Organização e revisões.

## Regras de design

Sem sobreposição.

Sem botão escondido.

Sem texto cortado.

Sem overflow horizontal.

Fonte grande.

Alto contraste opcional.

Botão de fechar tutorial sempre visível.

## Testes obrigatórios

1. Typecheck.
2. Lint.
3. Testes unitários.
4. Testes de fluxo.
5. Testes de overlay.
6. Testes de múltiplos monitores com mock.
7. Testes de bounding box para sobreposição.
8. Testes de fixação.
9. Build do instalador Windows.

## Instalador

Gerar um instalador único

Mel_e_Minie_Tutor_PC_Instalador.exe

O instalador deve criar atalho na área de trabalho e no menu iniciar.

## Entrega final

O projeto só está pronto quando

1. O app instala no Windows 11.
2. O overlay aparece sobre programas reais.
3. O app abre Explorador, Word, PowerPoint, navegador e ChatGPT.
4. O ponteiro guia funciona.
5. O destaque piscante funciona.
6. O avanço depende de validação.
7. O app funciona com duas telas.
8. O app pode ser fechado ou pausado a qualquer momento.
