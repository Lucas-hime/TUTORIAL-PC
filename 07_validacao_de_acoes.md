# Validação de ações

## Objetivo

A usuária só avança quando a ação foi feita e fixada.

## Tipos de validação

### Pasta criada

Método

Verificar no sistema de arquivos se a pasta existe dentro de Treino da Mamãe.

Confiabilidade

Alta.

### Arquivo salvo

Método

Verificar se arquivo existe na pasta correta.

Confiabilidade

Alta.

### Janela aberta

Método

Verificar janela ativa por título e processo.

Confiabilidade

Média alta.

### Elemento de interface visível

Método

Usar UI Automation para localizar controle por nome, tipo e bounding rectangle.

Confiabilidade

Média.

### Formatação no Word

Método

Validar por teste de fixação visual e checklist, porque detectar formatação real pode variar por versão do Office.

Confiabilidade

Média.

### Clique em região correta

Método

O overlay cria uma zona de resposta. A usuária clica na região correta do overlay durante teste.

Confiabilidade

Alta para reconhecimento.

### Arrastar janela para outra tela

Método

Verificar bounding rectangle da janela e display atual.

Confiabilidade

Média alta.

## Quando falhar a validação automática

Não travar a usuária de forma burra.

Fluxo

1. Tentar validar.
2. Se falhar, explicar.
3. Repetir instrução.
4. Pedir teste alternativo.
5. Permitir desbloqueio responsável nas configurações.

Mensagem

Não consegui confirmar automaticamente. Vamos fazer uma checagem rápida.

## Mastery Gate

Cada aula tem gate.

Exemplo

Aula Criar Pasta

Gate

1. Criar pasta Receitas.
2. Criar pasta Exames sem ponteiro guia.
3. Responder qual botão mostra opções.
4. Nota mínima 3.

## Estrutura JSON do gate

Campos

id.

type.

prompt.

expected.

validator.

maxHintsBeforeReview.

requiredScore.

## Scoring

0

Não tentou.

1

Assistiu.

2

Fez com ajuda completa.

3

Fez com dica.

4

Fez sem dica.

5

Fez em revisão futura.

## Regras de avanço

Aula seguinte exige score 3.

Final do módulo exige score 4 nas aulas principais.

Tarefa final exige score 4 em todos os módulos.

## Registro

Salvar

1. Tentativas.
2. Dicas usadas.
3. Demonstrações repetidas.
4. Validação automática.
5. Resultado do teste.
6. Score.
7. Data de revisão.
