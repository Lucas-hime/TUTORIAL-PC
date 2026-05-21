# Como usar este pacote no Codex do jeito certo

O botão de anexo que aparece na tela do Codex Web pode aceitar apenas imagens em alguns fluxos. Por isso, não tente anexar o ZIP ali.

O jeito correto é um destes dois caminhos.

## Caminho recomendado

Usar GitHub + Codex Web

### Passo 1

Criar um repositório no GitHub.

Nome sugerido

mel-minie-tutor-pc

### Passo 2

Baixar e descompactar o pacote desta especificação no seu computador.

### Passo 3

Colocar todos os arquivos da especificação dentro do repositório, preferencialmente em

docs/specs

Estrutura sugerida

mel-minie-tutor-pc
  docs
    specs
      00_prompt_mestre_codex_overlay_v4.md
      01_conceito_overlay_ambiente_real.md
      ...
      app_lessons_overlay_v4.json
      overlay_contract_v4.json

### Passo 4

Subir para o GitHub.

Comandos de exemplo

git init

git add .

git commit -m "Add Mel e Minie Tutor PC specification"

git branch -M main

git remote add origin URL_DO_SEU_REPOSITORIO

git push -u origin main

### Passo 5

Abrir Codex Web.

Selecionar o repositório mel-minie-tutor-pc.

No campo de texto, colar o conteúdo de

PROMPT_PARA_COLAR_NO_CODEX_WEB.txt

### Passo 6

Mandar o Codex executar a tarefa.

Não anexar o ZIP no botão de imagem.

## Caminho alternativo

Usar Codex no VS Code

### Passo 1

Criar uma pasta local

mel-minie-tutor-pc

### Passo 2

Colocar a especificação dentro de

docs/specs

### Passo 3

Abrir a pasta no VS Code.

### Passo 4

Abrir o Codex no VS Code.

### Passo 5

Colar o conteúdo de

PROMPT_PARA_COLAR_NO_CODEX_WEB.txt

## Caminho rápido sem GitHub

Este caminho é pior, mas funciona para começar.

Copie e cole diretamente no Codex o conteúdo de

PROMPT_PARA_COLAR_NO_CODEX_WEB.txt

Depois peça para ele criar a estrutura completa do projeto.

O melhor continua sendo GitHub ou VS Code, porque o Codex precisa trabalhar em cima de arquivos reais.
