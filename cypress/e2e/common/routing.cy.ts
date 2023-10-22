import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на страницу профиля', () => {
      cy.login('admin', 'admin');
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
  });

  describe('Пользователь не авторизован', () => {
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Несуществующий маршрут', () => {
      cy.visit('/aaaaaaaaa');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
});
