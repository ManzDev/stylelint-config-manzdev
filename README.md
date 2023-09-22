# stylelint-config-manzdev

Paquete de reglas preconfiguradas para `stylelint` (linter de CSS).

Este paquete se utiliza internamente en `mkweb`, pero se ha separado por si alguien quiere utilizarlo de forma sencilla:
https://manz.dev/software/mkweb

## Características destacables

- ✨ Da error si añades propiedades, valores o reglas desconocidas. Ej: `display: flox, backgrnd: red...`
- ✨ Máx. `1000` lineas por fichero `.css`: Obliga a separar en ficheros (en builds, vite crea un bundle CSS)
- ✨ Revisa colores hexadecimales (avisa colores incorrectos, siempre a minúsculas...)
- ✨ Adapta a formato adecuado lineas largas para facilitar lectura (por ejemplo, gradientes complejos)
- ✨ Evita propiedades, reglas o valores con vendor prefixes `-webkit-`, `-moz`, etc. Usar [autoprefixer].
- ✨ No permite varias líneas en blanco vacías consecutivas
- ✨ Si indicas valores de cero con unidades `0px`, se la retira (`0` es lo mismo que `0px`, `0rem`...)
- ✨ Selectores, funciones y valores de CSS deben estar en minúscula siempre.
- ✨ Se prefiere porcentajes sobre decimales en los valores de los canales alfa de los colores.
- ✨ La sintaxis de color se cambia automáticamente a la moderna. No usar `rgba()` ni `hsla()`.
- ✨ Usar la notación `url()` en los `@import`. Usar comillas.
- ✨ Siempre indicar fuentes alternativas y una fuente segura en los `font-family`.
- ✨ Los pseudoelementos deben utilizar la sintaxis doble de punto y coma: `::before` en lugar de `:before`.
- ✨ Elimina propiedades, valores o reglas redundantes o duplicadas.
- ✨ Evita el uso de valores de `:nth-child()` que no son válidos.
- ✨ Fuerza a utilizar espacios con los operadores en `calc()`
- ✨ Avisa que los comentarios con doble barra no son válidos en CSS `// no es un comentario`.
- ✨ Revisa unidades inválidas o desconocidas.

¡Y muchas otras!

[autoprefixer](https://lenguajecss.com/postcss/plugins/autoprefixer/)

## Instalación

1. Instalar el linter y el paquete de configuración:

```bash
npm install -D stylelint stylelint-config-manzdev
```

2. Crear un fichero de configuración `.stylelintrc.json` que lo utilice:

```js
{
  extends: "stylelint-config-manzdev",
  rules: {
    /* ... */
  }
}
```

Si lo deseas, puedes modificar reglas a tu criterio en el apartado `rules`.

## Corrección automágica en VSCode

Si quieres que Visual Code sea capaz de corregir los errores automáticamente, necesitarás lo siguiente:

1. Instala la extensión oficial de [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
2. Crea una carpeta `.vscode/` con un fichero `settings.json` en tu proyecto o pulsa <kbd>F1</kbd> / <kbd>Open User Settings (JSON)</kbd> e incluye la siguiente configuración recomendada:

```js
{
  /* Disable basic VSCode linters */
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  /* Activamos Stylelint */
  "stylelint.enable": true,
  /* Corregir automágicamente */
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
  },
  "[css]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  /* ... */
}
```
