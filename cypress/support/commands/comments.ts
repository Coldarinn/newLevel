export const addComment = (text: string) => {
  cy.getByTestId('CommentForm.Input').type(text);
  cy.getByTestId('CommentForm.Button').click();
  cy.getByTestId('CommentForm').submit();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
