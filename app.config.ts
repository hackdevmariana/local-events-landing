export default defineAppConfig({
  content: {
    // Configuración del contenido
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
})

