describe('My First Test', () => {
  it('fills a form', () => {
      cy.visit('https://www.melaleuca.com/account/signin?ReturnUrl=%2fconnect%2fauthorize%2fcallback%3fclient_id%3dmelaleuca-sitecore%26culture%3den-US%26nonce%3daa4a589f-3c5b-4514-810e-7cda2a4a28f7%26redirect_uri%3dhttps%253A%252F%252Fwww.melaleuca.com%252Fdepaccount%252FLoadProfile%26response_mode%3dform_post%26response_type%3dcode%2520id_token%26scope%3dopenid%2520offline_access%2520DEPInterface.API.Full%2520CustomerAccount.API.Full%2520Order.API.Full%2520Product.API.Full%2520Communication.API.Full%2520Address.API.Full%2520Organization.API.Full%2520SubscribedServices.API.Full%2520PayMethod.API.Full%2520Document.API.Full%2520BackupOrder.API.Full%2520Promotion.API.Full%2520LSD.API.Full%26state%3d%252F')

      cy.get('input[name="username"]').type('santo28')
      cy.get('input[name="password"]').type('passwordtest')
      cy.contains('SIGN IN').click()
  })

})