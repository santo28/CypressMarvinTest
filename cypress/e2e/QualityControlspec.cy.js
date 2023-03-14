describe('My First Test', () => {
  it('fills a form', () => {
      cy.visit('https://nathanbirch.one/contact')

      cy.get('.contact_contactInputText__wm2fm form-control').type('santos171292@gmail.com')
      cy.get('.contact_contactInputText__wm2fm form-control').type('Marvin Santos')
      cy.get('#formBasicSubject').type('Cypress Automation Practice')
      cy.get('#formBasicMessage').type('Practice with Cypress Automation, checking if it is successful.')
      cy.get('input[class="global_resumeButton__30V2O btn btn-outline-light btn-lg"]').click()
  })

})