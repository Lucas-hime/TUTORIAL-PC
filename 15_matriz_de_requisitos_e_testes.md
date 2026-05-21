# Matriz de requisitos e testes

## Objetivo

Nenhum requisito pode ficar sem teste.

## Requisitos críticos

### R1

Mel e Minie são duas cachorrinhas yorkshire.

Teste

Inspeção visual dos SVGs e teste de snapshot.

### R2

Mel corre para canto seguro ao iniciar aula.

Teste

test:overlay verifica posição da Mel fora de áreas proibidas.

### R3

Minie aparece apenas para dicas.

Teste

test:e2e verifica que Minie não aparece com texto longo nem cobre área útil.

### R4

Tutorial ensina a abrir, pausar, retomar e fechar.

Teste

test:e2e percorre módulo Conhecendo a Mel e a Minie.

### R5

Overlay funciona em duas telas.

Teste

test:overlay com mock de monitores e teste manual no Windows 11.

### R6

Botão Fechar tutorial sempre visível.

Teste

test:layout e test:overlay verificam bounding box.

### R7

Aulas não avançam sem fixação.

Teste

test:e2e tenta avançar sem cumprir gate e espera bloqueio.

### R8

Explorador de Arquivos real abre.

Teste

Teste de integração com windows.openExplorer.

### R9

Word real abre ou mostra erro amigável.

Teste

Teste de integração com fallback.

### R10

PowerPoint real abre ou mostra erro amigável.

Teste

Teste de integração com fallback.

### R11

ChatGPT abre no navegador.

Teste

Verificar abertura de URL validada.

### R12

Pasta Treino da Mamãe é criada em Documentos.

Teste

Verificação de sistema de arquivos.

### R13

Arquivos pessoais não são alterados.

Teste

Serviço de arquivos só aceita caminhos dentro da pasta de treino.

### R14

Instalador único é gerado.

Teste

npm run build:win.

### R15

App funciona sem internet depois de instalado.

Teste

Teste manual offline.

## Requisito sem teste é falha

Se algum requisito novo for criado, adicionar teste correspondente antes de entregar.
