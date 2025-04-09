# Sound Core

## Included

- Nuxt 3
- Prettier
- ESLint
- Nuxt UI
- Tailwind CSS
- i18n

## Additional Information

### VS Code settings

```json
{
  // typescript
  "typescript.tsdk": "node_modules/typescript/lib",

  // Tailwind CSS
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.classAttributes": ["class", "ui"],
  "tailwindCSS.experimental.classRegex": [
    ["ui:\\s*{([^)]*)\\s*}", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```
