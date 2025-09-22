export const mockCategories = [
  { id: '1', name: 'Lanches' },
  { id: '2', name: 'Bebidas' },
  { id: '3', name: 'Sobremesas' },
];

export const mockProducts = {
  '1': [
    { id: 'p1', name: 'Hambúrguer Clássico', price: 25.00, imageUrl: 'https://placehold.co/150x150/png?text=Hamb%C3%BArguer' },
    { id: 'p2', name: 'Pizza de Pepperoni', price: 45.00, imageUrl: 'https://placehold.co/150x150/png?text=Pizza' },
    { id: 'p3', name: 'Sanduíche de Frango', price: 20.00, imageUrl: 'https://placehold.co/150x150/png?text=Sandu%C3%ADche' },
  ],
  '2': [
    { id: 'p4', name: 'Refrigerante', price: 7.00, imageUrl: 'https://placehold.co/150x150/png?text=Refrigerante' },
    { id: 'p5', name: 'Suco de Laranja', price: 8.00, imageUrl: 'https://placehold.co/150x150/png?text=Suco' },
  ],
  '3': [
    { id: 'p6', name: 'Bolo de Chocolate', price: 15.00, imageUrl: 'https://placehold.co/150x150/png?text=Bolo' },
    { id: 'p7', name: 'Pudim', price: 12.00, imageUrl: 'https://placehold.co/150x150/png?text=Pudim' },
  ],
};

export const mockOrders = [
  { id: 'o1', date: '2024-10-25', status: 'Entregue', items: ['Hambúrguer', 'Refrigerante'], total: 32.00 },
  { id: 'o2', date: '2024-10-20', status: 'Concluído', items: ['Pizza'], total: 45.00 },
];

export const mockUser = {
  name: 'Mickeias C',
  email: 'mickeiascoelho@gmail.com',
};

export const mockRestaurants = [
  { id: 'r1', name: 'Restaurante A', address: 'Rua do Restaurante A, 123', item: 'Hambúrguer Gourmet' },
  { id: 'r2', name: 'Restaurante B', address: 'Rua do Restaurante B, 456', item: 'Salada da Casa' },
  { id: 'r3', name: 'Restaurante C', address: 'Rua do Restaurante C, 789', item: 'Sushi' },
];
