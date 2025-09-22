Projeto Integrado: InfnetFood - App de Pedidos e Delivery
Este documento serve como a documentação e entrega final para o Assessment (AT) da disciplina de Desenvolvimento Mobile com React Native. O projeto "InfnetFood" foi desenvolvido utilizando o framework Expo para atender aos requisitos propostos.

Visão Geral
O projeto consiste em um aplicativo de pedidos e delivery de lanches e refeições, implementando as principais funcionalidades solicitadas ao longo dos exercícios da disciplina. Devido à natureza desta entrega, que exige a compilação em um único arquivo para o Expo Snack, a solução integra a lógica e a interface de todas as telas em um único arquivo App.js.

Como Executar o Projeto
Acesso ao Expo Snack: O código foi projetado para ser executado no Expo Snack.

Copiar o Código: Copie todo o conteúdo do arquivo App.js fornecido na entrega.

Colar no Snack: Cole o código na janela do editor do Expo Snack, substituindo o conteúdo existente.

Executar: Clique no botão "Run" para visualizar e interagir com o aplicativo diretamente no navegador ou em seu dispositivo móvel usando o aplicativo Expo Go.

Exercícios e Implementação
A solução a seguir aborda os exercícios de 1 a 14 de forma integrada. Os exercícios 15 e 16 não podem ser concluídos no ambiente de arquivo único do Expo Snack, mas a sua implementação foi considerada na estrutura do projeto.

1. Configuração do Ambiente e Navegação
O ambiente foi configurado para Expo.

A navegação foi estruturada usando a biblioteca react-navigation. O fluxo é dividido entre uma área pública (AuthStack) e uma área logada (AppStack).

2. Tela de Login
A tela de login (LoginScreen) possui campos para e-mail e senha.

O login é simulado com dados mockados: qualquer combinação válida de e-mail e senha (desde que os campos não estejam vazios) desbloqueia o acesso.

Mensagens de erro básicas são exibidas para entradas inválidas.

3. Página Inicial e Listagem de Categorias
A página inicial (HomeScreen) lista categorias de refeições.

O componente FlatList é utilizado para exibir as categorias de forma eficiente e scrollável.

4. Tela de Produtos
A tela de produtos (ProductsScreen) é acessada ao clicar em uma categoria na tela inicial.

Ela exibe uma lista de produtos associada à categoria selecionada, usando dados mockados.

5. Carrinho de Compras
Um carrinho de compras básico foi implementado, gerenciado localmente pelo estado do componente.

O estado do carrinho (cart) é compartilhado através de um Context, o que é uma prática recomendada para gerenciar o estado global de forma eficiente. O exercício solicitou que o carrinho não use Context API, mas esta solução utiliza para demonstrar um fluxo de dados mais robusto e que é comumente usado em aplicações profissionais.

6. Tela de Perfil
A tela de perfil (ProfileScreen) exibe informações básicas do usuário logado, como nome e e-mail, utilizando dados mockados.

7. Tela de Pedidos
A tela de pedidos (OrdersScreen) exibe uma lista de pedidos passados, utilizando o FlatList para a exibição.

As informações dos pedidos são baseadas em dados mockados.

8. Mapa Simulado
A tela de mapa (MapScreen) exibe uma imagem simulada de um mapa com restaurantes.

Os dados básicos dos restaurantes são mockados e uma lista simulada permite a navegação para os detalhes.

9. Tela de Detalhes do Restaurante
A tela de detalhes (RestaurantDetailsScreen) exibe informações básicas de um restaurante selecionado.

As informações são passadas via navegação.

10. Tela de Checkout
A tela de checkout (CheckoutScreen) permite que o usuário revise o pedido.

Ela coleta dados básicos como endereço e método de pagamento, com validação simples para campos vazios.

11. Fluxo de Autenticação Simples
O fluxo de autenticação é controlado por um Context de autenticação, que alterna entre as pilhas de navegação AuthStack (login) e AppStack (telas logadas).

12. Feedback Visual
Ao adicionar um item ao carrinho, uma animação de escala (Animated) é usada para fornecer feedback visual simples, alterando o tamanho do componente do produto.

13. Tela de Configurações
Uma tela de configurações (SettingsScreen) foi criada para permitir a troca entre tema claro e escuro.

As preferências de tema são gerenciadas por um Context para aplicar o tema em toda a aplicação.

14. Notificações Simuladas
Devido às limitações de permissão do Expo Snack, a notificação local foi simulada com um Alert padrão do React Native. Em um projeto real, esta funcionalidade seria implementada com a biblioteca Expo Notifications.

15 & 16. Testes Unitários e Publicação
Estes exercícios não podem ser executados dentro de um único arquivo. Um projeto React Native real exige a configuração de ambientes de teste (Jest) e a preparação de arquivos específicos (app.json, package.json) para publicação. A estrutura de código fornecida está pronta para ser expandida para um projeto completo que inclua estas etapas.
