# stylelint-config-manzdev

Paquete de reglas preconfiguradas para `stylelint` (linter de CSS).

Este paquete se utiliza internamente en `mkweb`, pero se ha separado por si alguien quiere utilizarlo de forma sencilla:
https://manz.dev/software/mkweb

## Características destacables

- ✨ Avisa y da error si añades un valor a una propiedad con enumerados donde no corresponde. Ej: `display: flox`
- ✨ Máximo `1000` lineas por fichero `.css`: Obliga a separar en ficheros (útil con vite, que bundleliza en un sólo fichero en builds)
- ✨ Reorganiza propiedades CSS por género o categoría, separando con espacios "psicológicos"
- ✨ Revisa colores hexadecimales (avisa colores incorrectos, siempre a minúsculas...)
- ✨ Adapta a formato adecuado lineas largas para facilitar lectura (por ejemplo, gradientes complejos)
- ✨ No permite varias líneas en blanco vacías consecutivas

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
