# Especificação visual do overlay

## Recursos visuais obrigatórios

### Ponteiro guia

Um ponteiro de mouse visual, desenhado pelo app, que se move até o local certo.

Regras

1. Deve ser visível.
2. Deve ter movimento lento.
3. Deve parar no alvo por 1 segundo.
4. Não deve clicar pela usuária, exceto em demonstração simulada.
5. Deve repetir quando a usuária pedir.

### Destaque piscante

Uma borda suave em volta da área correta.

Regras

1. Piscar devagar.
2. Não atrapalhar leitura.
3. Não cobrir texto do programa.
4. Ter rótulo curto.

Exemplo

Clique aqui para aumentar a letra.

### Máscara de foco

Escurece levemente o restante da tela e deixa clara a área importante.

Usar apenas quando não atrapalhar o clique.

### Seta

Seta simples apontando para o botão ou área.

### Balão da Mel

Explica o que é a parte da interface.

Exemplo

Esta faixa superior do Word reúne os botões para mudar o texto.

### Balão da Minie

Dica curta.

Exemplo

Números maiores deixam a letra maior.

## Mel correndo para o canto

Ao iniciar aula

1. Mel surge com animação curta.
2. Ela corre para canto seguro.
3. Canto seguro é calculado.
4. Não cobrir barra de tarefas.
5. Não cobrir botões do programa.
6. Não cobrir área destacada.
7. Se a janela alvo estiver na segunda tela, Mel aparece nessa tela.

## Canto seguro

Ordem de preferência

1. Canto inferior direito acima da barra de tarefas.
2. Canto superior direito.
3. Canto inferior esquerdo.
4. Canto superior esquerdo.

Se o alvo estiver no mesmo canto, escolher outro.

## Botões fixos do overlay

1. Fechar tutorial.
2. Pausar.
3. Repetir demonstração.
4. Estou perdida.

Eles devem ficar agrupados em painel pequeno.

Nunca esconder esses botões.

## Click through

O overlay deve deixar a usuária clicar no programa real.

Só os botões do tutor capturam clique.

## Duas telas

Cada monitor pode ter um overlay.

O monitor ativo é aquele onde está a janela alvo.

Se a usuária arrastar a janela para outra tela, o overlay acompanha.

## Teste visual

Verificar

1. Mel não cobre o alvo.
2. Minie não cobre o alvo.
3. Balão não sai da tela.
4. Botões continuam visíveis.
5. Destaque está no monitor correto.
6. Não há piscada excessiva.
7. A animação não causa travamento.
