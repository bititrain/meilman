import { MeilMan } from '../src/meil-man';

test('Should greet with message', () => {
  const greeter = new MeilMan('friend');
  expect(greeter.greet()).toBe('Bonjour, friend!');
});
