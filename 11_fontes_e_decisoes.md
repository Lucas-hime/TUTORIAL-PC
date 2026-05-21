# Fontes e decisões

## Windows 11

O módulo de duas telas usa recursos reais do Windows 11, como Snap, movimentação de janelas e configurações de múltiplos monitores.

## UI Automation

A decisão de usar helper nativo vem do fato de o Microsoft UI Automation permitir acesso programático a elementos de interface no Windows, usado inclusive por tecnologias assistivas e testes automatizados.

## Electron overlay

A decisão de usar Electron vem da possibilidade de criar janelas sem borda, transparentes, sempre no topo e com controle de eventos do mouse.

## ChatGPT

O módulo ensina abrir ChatGPT, começar conversa, escrever prompt, pedir explicação simples e começar novo chat. A parte de conta, histórico e salvamento deve respeitar o estado real da usuária, logada ou não.

## Decisão pedagógica

A usuária trabalha sobre o ambiente real, mas o app usa validação híbrida.

Nem toda ação em Word, PowerPoint ou navegador é confiável para validação automática. Por isso, o app combina verificação automática, UI Automation, testes visuais e repetição prática.
