## Objetivo
Eliminar a segunda barra de rolagem que aparece na faixa branca abaixo do rodapé do site.

## Causa
O script `get-footer-iframe` do MonteSite injeta um `<iframe>` cross-origin com altura fixa dentro de `#montesite-footer-badge`. O conteúdo interno desse iframe excede a altura definida, fazendo o próprio iframe renderizar sua barra de rolagem vertical, independente da barra do `<html>`. Como o iframe vem de outro domínio (supabase.co), não conseguimos medir/ajustar sua altura via JS.

## Mudança
Editar `index.html` removendo as três linhas do widget MonteSite, logo após `<div id="root"></div>`:

```html
<!-- Rodapé MonteSite - Atualização Automática -->
<div id="montesite-footer-badge"></div>
<script src="https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe"></script>
```

Nada mais precisa mudar:
- O `<Footer />` interno do site (componente React) continua renderizando normalmente no final da página.
- CSS de `html`, `body` e `#root` já está correto e fica como está.
- Nenhum outro componente depende do widget.

## Resultado esperado
- Uma única barra de rolagem na página inteira.
- Some a faixa branca abaixo do rodapé.
- Sem regressões visuais nas demais seções.

## Verificação
Abrir o preview, rolar até o fim da página e confirmar que existe apenas uma barra de rolagem vertical e que o rodapé interno é o último elemento visível.
