/// <reference types="cypress" />
import contract from '../contracts/customers.contract'

describe('Customer Contract Test', () => {
     let token
     
     before(() => {
          cy.token('admin', 'admin').then(tkn => { token = tkn })
     })

     it('Should validate customer contract', () => {
          cy.request({
               method: 'GET',
               url: 'customers',
               headers: {authorization: `Bearer ${token}`}
           }).then(response => {
               return contract.validateAsync(response.body)
           })
       });
})
