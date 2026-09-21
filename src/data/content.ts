import { hotelImages } from './hotel';
export const rooms = [
  ['Quarto Single', 'Regular', 'Desde 72€ / noite', hotelImages.rooms[0]],
  ['Quarto Duplo', 'Regular', 'Desde 91€ / noite', hotelImages.rooms[1]],
  ['Single Remodelado', 'Remodelado', 'Desde 83€ / noite', hotelImages.rooms[2]],
  ['Duplo Remodelado', 'Remodelado', 'Desde 99€ / noite', hotelImages.rooms[3]],
] as const;
export const services = [
  ['01', 'Pequeno-almoço', 'Buffet na sala de pequenos-almoços. Dias úteis 07:30—10:00 · fins de semana e feriados 08:00—11:00.'],
  ['02', 'Room service', 'Disponível através da receção. Taxa de room service: 5€.'],
  ['03', 'O2 Lounge', 'Área de bar/lounge do hotel, para acompanhar a estadia.'],
  ['04', 'Business', 'Business Center com espaço de trabalho e recursos para videoconferência.'],
  ['05', 'Bagagem', 'Possibilidade de armazenamento seguro de bagagem.'],
  ['06', 'Turismo responsável', 'O Hotel UMU dispõe de uma política de turismo responsável.'],
  ['07', 'Não fumadores', 'Não é permitido fumar no interior; o diretório indica exceção no jardim exterior do piso 0.'],
] as const;
export const reviews = [
  ['“Meals were really well made, true Portuguese food! Rooms were quite old-fashioned. Service was exceptional...”', 'Elmeri Hartelin', 'Google · 4/5'],
  ['“Clean comfortable rooms. Excellent buffet breakfast. Kind and friendly staff. Good location.”', 'Trip.com Member', 'Trip.com · 5/5'],
  ['“Clean and comfortable, but a little dated in bathroom.”', 'Stuart Mullen', 'Google · 4/5'],
] as const;
