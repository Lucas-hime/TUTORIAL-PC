# Autoverificação obrigatória do Codex

Antes de entregar, o Codex deve executar uma revisão ativa do próprio projeto.

## Busca proibida

Rodar busca por termos

TODO

FIXME

placeholder

mock

fake

not implemented

implement later

coming soon

lorem

dummy

Se algum termo aparecer fora de teste proposital ou documentação explicativa, corrigir antes de entregar.

## TypeScript

Rodar

npm run typecheck

Critério

Zero erro.

## Lint

Rodar

npm run lint

Critério

Zero erro crítico.

## Testes unitários

Rodar

npm run test

Critério

Todos passando.

## Teste de fluxo

Rodar

npm run test:e2e

Cenários mínimos

1. Abrir app.
2. Primeira aula do tutorial.
3. Pausar.
4. Retomar.
5. Repetir demonstração.
6. Fechar tutorial.
7. Reabrir e continuar.
8. Entrar no módulo Windows 11.
9. Entrar no módulo Explorador.
10. Registrar progresso.

## Teste de layout

Rodar

npm run test:layout

Verificar

1. Sem overflow horizontal.
2. Sem texto cortado.
3. Sem botão coberto.
4. Sem personagem sobre ação.
5. Sem balão fora da tela.
6. Fonte grande funciona.
7. Alto contraste funciona.

## Teste de overlay

Rodar

npm run test:overlay

Verificar

1. Overlay transparente.
2. Botões clicáveis.
3. Click through em área não interativa.
4. Ponteiro guia visível.
5. Destaque piscante.
6. Mel no canto seguro.
7. Minie sem cobrir área útil.
8. Fechar tutorial sempre funciona.
9. Pausar sempre funciona.

## Teste de duas telas

Criar teste com mock de displays e teste manual em Windows 11.

Cenários

1. Janela alvo na tela principal.
2. Janela alvo na segunda tela.
3. Arrastar janela entre telas.
4. Desconectar segunda tela.
5. Retomar overlay na tela restante.

## Teste de instalador

Rodar

npm run build:win

Depois testar em Windows 11

1. Instalar.
2. Abrir por atalho da área de trabalho.
3. Abrir por menu iniciar.
4. Primeira aula começa.
5. Pausar.
6. Fechar.
7. Reabrir.
8. Progresso persiste.
9. Desinstalar.

## Revisão de conteúdo

Verificar se a ordem é

1. Usar tutorial.
2. Windows 11 e duas telas.
3. Explorador.
4. Word.
5. PowerPoint.
6. Internet.
7. ChatGPT.
8. Organização.
9. Revisões.

## Revisão de personagens

Verificar

1. Mel é cachorrinha yorkshire preta e marrom.
2. Minie é cachorrinha yorkshire prateada e marrom.
3. Minie tem orelhinhas pontudas.
4. Nenhuma parece clipe, robô ou humana.
5. Nenhuma usa asset externo.

## Relatório final

Criar RELATORIO_FINAL_DE_ENTREGA.md contendo

1. Checklist de todos os itens.
2. Comandos executados.
3. Resultado dos testes.
4. Arquivo do instalador.
5. Limitações conhecidas.
6. Como instalar na máquina da mãe.
7. Como editar aulas depois.
