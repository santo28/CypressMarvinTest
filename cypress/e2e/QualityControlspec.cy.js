const { includes } = require("lodash")

describe('My First Test', () => {
  it('Verify Missionary Request', () => {
      cy.visit('https://www.churchofjesuschrist.org/comeuntochrist/requests/missionary-visit')

      cy.get("h1")
        .should("include.text", "Meet with Missionaries Online or In Person")

      cy.get('[name="firstName"]').type('santo28')
      cy.get('[name="lastName"]').type('Santos1')
      cy.get('[name="email"]').first().type("santos171292@gmail.com")
      cy.get("div.stepped-form_nextButton").first().click()
  })

})