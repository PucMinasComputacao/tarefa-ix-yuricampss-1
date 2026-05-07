const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção", "drama"],
    nota: 9.2,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["mistério"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 4,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação", "ficção"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 5,
    titulo: "The Office",
    tipo: "serie",
    ano: 2005,
    generos: ["comédia"],
    nota: 8.9,
    assistido: false
  },
  {
    id: 6,
    titulo: "Avatar",
    tipo: "filme",
    ano: 2009,
    generos: ["aventura"],
    nota: 7.9,
    assistido: false
  }
];

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log(
  "Ano do último:",
  catalogo[catalogo.length - 1].ano
);

if (catalogo[2].generos[1]) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("Só possui 1 gênero");
}

catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosMaiusculos = catalogo.map(item =>
  item.titulo.toUpperCase()
);

console.log(titulosMaiusculos);

const naoAssistidos = catalogo.filter(item =>
  !item.assistido
);

console.log("Não assistidos:", naoAssistidos.length);

const notaAlta = catalogo.find(item =>
  item.nota >= 9
);

if (notaAlta) {
  console.log(notaAlta.titulo, notaAlta.nota);
}

const media =
  catalogo.reduce((soma, item) => soma + item.nota, 0) /
  catalogo.length;

const assistidos = catalogo.filter(item =>
  item.assistido
);

const mediaAssistidos =
  assistidos.reduce((soma, item) => soma + item.nota, 0) /
  assistidos.length;

console.log("Média geral:", media.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

console.log(
  "Tem item antes de 2000?",
  catalogo.some(item => item.ano < 2000)
);

console.log(
  "Todos têm gênero?",
  catalogo.every(item => item.generos.length > 0)
);

const filmes = catalogo.filter(item =>
  item.tipo === "filme"
).length;

const series = catalogo.filter(item =>
  item.tipo === "serie"
).length;

const top3 = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

document.getElementById("output").innerHTML = `
  <h2>Resumo</h2>
  <p>Total: ${catalogo.length}</p>
  <p>Filmes: ${filmes}</p>
  <p>Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média: ${media.toFixed(2)}</p>

  <h3>Top 3</h3>
  <ol>
    ${top3.map(item =>
      `<li>${item.titulo} - ${item.nota}</li>`
    ).join("")}
  </ol>
`;