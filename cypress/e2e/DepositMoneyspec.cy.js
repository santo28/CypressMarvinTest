
describe('My First Test', () => {

    
  it('', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

      cy.get('.borderM > :nth-child(1) > .btn').click({ force: true })

      cy.get('select').select('Harry Potter') 

      cy.get('form.ng-valid > .btn').click({ force: true })
    
      cy.get('[ng-click="deposit()"]').click()

      cy.get('[ng-model="amount"]').type('1000')

      cy.get('[type="submit"]').click()

      cy.get('.center >.ng-binding:nth-child(2)').should('have.text', '1000')


  })


})