# Testes e QA do overlay

## Testes obrigatórios

### Teste de duas telas

Cenários

1. Janela alvo na tela 1.
2. Janela alvo na tela 2.
3. Tutor na tela 1 e Word na tela 2.
4. Janela arrastada de uma tela para outra.
5. Tela secundária desconectada.

Critério

Overlay acompanha a janela alvo.

### Teste de click through

Cenários

1. Clicar no programa real através do overlay.
2. Clicar no botão Fechar tutorial.
3. Clicar no botão Pausar.
4. Clicar no botão Repetir demonstração.

Critério

Cliques passam quando devem e são capturados quando devem.

### Teste de ponteiro guia

Cenários

1. Ponteiro se move até alvo.
2. Ponteiro não cobre balão.
3. Ponteiro repete demonstração.
4. Ponteiro funciona em escala 125 por cento.

### Teste de destaque

Cenários

1. Destaque em botão.
2. Destaque em área vazia.
3. Destaque em faixa superior do Word.
4. Destaque em barra de endereço do navegador.

### Teste de fixação

Cenários

1. Resposta certa libera avanço.
2. Resposta errada bloqueia.
3. Depois de erro, Mel explica diferente.
4. Depois de muitos erros, oferece repetir aula.
5. Familiar pode desbloquear em modo responsável.

### Teste de fechamento

Cenários

1. Fechar tutorial no meio da aula.
2. Pausar.
3. Retomar.
4. Fechar app.
5. Reabrir e continuar.

### Teste de programas reais

1. Explorador abre.
2. Word abre.
3. PowerPoint abre.
4. Navegador abre.
5. ChatGPT abre no navegador.
6. Se programa não existe, erro é amigável.

## Testes automatizados

Playwright para telas próprias.

Testes unitários para Lesson Engine.

Testes de integração para verificação de arquivo.

Testes mockados para múltiplos monitores.

Testes mockados para UI Automation.

## Testes manuais obrigatórios

Como overlay depende de programas reais, fazer teste manual antes de instalar.

Checklist manual

1. Mel corre para canto seguro.
2. Minie aparece sem atrapalhar.
3. Destaque fica no lugar certo.
4. Ponteiro guia é claro.
5. Botão fechar está visível.
6. A mãe consegue pausar.
7. O app não fecha arquivos reais.
