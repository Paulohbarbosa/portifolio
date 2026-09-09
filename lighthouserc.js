module.exports = {
  ci: {
    collect: {
      // Comando para iniciar a aplicação para que o Lighthouse possa visitá-la. 
      // É importante usar o build de produção (npm run start) para resultados mais precisos de performance.
      startServerCommand: 'npm run start',
      
      // As URLs locais que o Lighthouse vai analisar.
      // Você pode adicionar mais caminhos se quiser testar outras páginas (ex: 'http://localhost:3000/cv')
      url: ['http://localhost:3000/'],
      
      // Quantas vezes o teste será executado.
      // O padrão é 3 para fazer uma média, mas 1 é suficiente para testes rápidos locais.
      numberOfRuns: 1,
    },
    assert: {
      // Utiliza o conjunto de regras "recomendado" pelo Lighthouse.
      // Ele vai acusar erro se as pontuações ficarem muito baixas em Performance, SEO, Acessibilidade ou Boas Práticas.
      preset: 'lighthouse:recommended',
    },
    upload: {
      // Faz o upload dos resultados para um armazenamento temporário do Google para fácil visualização no navegador.
      // O link expira em alguns dias.
      target: 'temporary-public-storage',
    },
  },
};
