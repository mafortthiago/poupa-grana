# Poupa grana - Web app de gerenciamento de financias

![Imagem do projeto](https://github.com/mafortthiago/poupa-grana/blob/main/project_image.png?raw=true)
Este é um projeto front-end de gerenciamento de financias que permite inserir gastos e despesas, conta com gráfico e sistemas de metas, foi desenvolvido em reactJS.

O projeto está hospedado em: [`https://poupa-grana.vercel.app/`](https://poupa-grana.vercel.app/)

O funcionamento é simples, basta se cadastrar e ir até [`gestor`](https://poupa-grana.vercel.app/gestor) e realizar a inserção desejada. Depois é só ir gerenciando.

## Conceitos do projeto

- **Hooks do react**:
  - `useEffect`: Manipulação do DOM, integração com APIs e gerenciamento de efeitos colaterais.
  - `useState`: Gerenciamento de estado em componentes funcionais com total fluidez.
  - `useContext`: Compartilhamento de valores entre componentes de forma eficiente e desacoplada.
  - `Criação de 2 hooks` personalizados para realizar funções assíncronas, como busca de dados e manipulação de APIs, reduzindo a repetição de código e aumentando a legibilidade.
 
- **Props**: Comunicação entre componentes através de props, permitindo a criação de interfaces complexas e reutilizáveis.

- **Gráficos**: Utilização da biblioteca gráfica apex charts, criando assim gráfico interativos, responsivos e personalisáveis.

- **ícones**: Utilização da biblioteca de react icons.

- **Integração com API**: Comunicação eficaz e asincrona com a api em spring, [veja o código da api.](https://github.com/mafortthiago/api-poupa-grana)

- **SCSS Modular**: 
  - Implementação de SCSS modular para manter os estilos isolados e manter código com boa manutenção e limpo.
  - Criação de combobox e inputs personalizados.

- **Conventional Commits**: Adoção da estrutura de commits convencionais para um histórico claro e legível, facilitando a compreensão do desenvolvimento do projeto.
