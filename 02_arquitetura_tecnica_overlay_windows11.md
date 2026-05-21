# Arquitetura técnica para overlay no Windows 11

## Objetivo técnico

Criar um tutor overlay que trabalha sobre programas reais no Windows 11.

## Componentes

### Electron App

Responsável por

1. Janela principal.
2. Janela de controle.
3. Overlay transparente.
4. Comunicação com helper nativo.
5. Armazenamento local.
6. Instalador.

### OverlayWindow

Janela transparente, sem borda, sempre no topo.

Funções

1. Mostrar Mel.
2. Mostrar Minie.
3. Mostrar ponteiro guia.
4. Mostrar destaque piscante.
5. Mostrar setas.
6. Mostrar máscara de foco.
7. Mostrar botões do tutor.

### ControlPanelWindow

Janela pequena de controle.

Funções

1. Escolher aula.
2. Ver progresso.
3. Pausar.
4. Encerrar.
5. Ajustar fonte.
6. Escolher tela ativa.

### Windows UI Automation Helper

Aplicativo auxiliar em .NET 8.

Funções

1. Encontrar janela ativa.
2. Encontrar janela do Explorador.
3. Encontrar janela do Word.
4. Encontrar janela do PowerPoint.
5. Encontrar navegador.
6. Listar elementos de interface detectáveis.
7. Retornar bounding rectangles.
8. Verificar se controle esperado existe.
9. Ajudar a posicionar destaque.

### Lesson Engine

Controla

1. Aula atual.
2. Etapa atual.
3. Recurso visual necessário.
4. Validação necessária.
5. Teste de fixação.
6. Revisão.

### Action Verification Engine

Valida ações.

Tipos

1. Verificar arquivo ou pasta criada.
2. Verificar janela ativa.
3. Verificar título da janela.
4. Verificar elemento por UI Automation.
5. Verificar resposta de teste.
6. Verificar clique em região correta do overlay.
7. Verificar repetição prática.

### Mastery Test Engine

Bloqueia avanço até fixar.

Tipos de teste

1. Clique na área correta.
2. Escolha a resposta certa.
3. Repita a tarefa sem ponteiro guia.
4. Explique o conceito com opção simples.
5. Encontre o botão sem destaque.
6. Complete sequência.

## Electron seguro

BrowserWindow

nodeIntegration false.

contextIsolation true.

sandbox quando possível.

preload isolado.

contextBridge com APIs específicas.

## APIs expostas ao renderer

overlay.showHighlight.

overlay.showPointerPath.

overlay.showMascot.

overlay.hideAll.

overlay.pause.

overlay.closeLesson.

windows.openExplorer.

windows.openWord.

windows.openPowerPoint.

windows.openBrowser.

windows.getDisplays.

windows.getActiveWindow.

uia.findElement.

uia.getElementRect.

verification.checkFolderExists.

verification.checkFileExists.

progress.save.

progress.load.

settings.save.

settings.load.

## Múltiplos monitores

Usar screen.getAllDisplays.

Criar overlay por monitor ou um overlay reposicionado por monitor ativo.

Preferência

Um overlay por monitor.

Motivo

Evita falha quando a janela alvo está na segunda tela.

Cada overlay sabe

1. Display id.
2. Bounds.
3. Scale factor.
4. Área segura para Mel.
5. Área segura para botões.

## Camadas do overlay

1. Máscara de foco.
2. Destaque piscante.
3. Ponteiro guia.
4. Setas.
5. Personagens.
6. Balões.
7. Botões de controle.

Botões ficam sempre na camada mais alta.

## Clique através do overlay

A área transparente deve deixar o clique passar para o programa real.

Os botões do tutor devem receber clique.

Estratégia

1. Usar setIgnoreMouseEvents quando o overlay estiver apenas demonstrando.
2. Desativar ignoreMouseEvents quando a usuária passa o mouse em botão do tutor.
3. Como fallback, usar janela pequena separada para botões de controle.

## Localização dos elementos

Ordem para achar onde destacar

1. UI Automation por nome do controle.
2. UI Automation por tipo de controle.
3. Janela ativa e coordenadas relativas.
4. Coordenada calibrada por resolução.
5. Modo manual com instrução visual genérica.

## Limitação honesta

UI Automation não garante detectar tudo em todos os programas e versões do Office ou navegador.

Por isso, o app deve sempre ter fallback.

Fallbacks

1. Destaque por região aproximada.
2. Demonstração com ponteiro guia.
3. Teste de fixação por pergunta.
4. Confirmação com tarefa repetida.
5. Desbloqueio responsável.

## Word e PowerPoint

Trabalhar sobre os programas reais.

Usar UI Automation quando possível.

Validar por arquivo quando possível.

Exemplos

Salvar documento

Verificar arquivo criado na pasta de treino.

Abrir Word

Verificar janela ativa com título do Word.

Criar PowerPoint salvo

Verificar arquivo .pptx na pasta de treino.

Aumentar fonte

Preferir teste de fixação visual, porque detectar tamanho real pode ser instável.

## ChatGPT

Abrir no navegador.

Ensinar

1. Campo de mensagem.
2. Novo chat.
3. Enviar prompt.
4. Ler resposta.
5. Pedir explicação mais simples.
6. Pedir passo a passo.
7. Nunca colocar senha, CPF, cartão ou dados sensíveis sem necessidade.

## Instalação

Electron Builder.

NSIS.

Instalador único.

Atalho na área de trabalho.

Atalho no menu iniciar.

## Permissões

O app não deve pedir privilégios de administrador para uso normal.

Se algum recurso de overlay ou UI Automation exigir permissão maior, mostrar orientação clara ao familiar, não à usuária.

## Logs

Salvar logs técnicos em userData.

Não mostrar termos técnicos para a mãe.

## Testes técnicos

1. Overlay abre em uma tela.
2. Overlay abre em duas telas.
3. Destaque aparece no monitor correto.
4. Ponteiro guia anima sem travar.
5. Clique atravessa overlay quando deve.
6. Botão Fechar funciona sempre.
7. App salva progresso ao fechar.
8. App não fecha programas reais ao encerrar aula.
