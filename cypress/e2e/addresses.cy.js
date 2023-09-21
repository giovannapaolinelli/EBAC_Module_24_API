/// <reference types="cypress" />
import contract from '../contracts/addresses.contract'

describe('Address Contract Test', () => {
    let token
    
    before(() => {
        cy.token('admin', 'admin').then(tkn => { token = tkn })
    });

    it('Should validate address contract', () => {
        cy.request({
            method: 'GET',
            url: 'addresses',
            headers: {authorization: `Bearer ${token}`}
        }).then(response => {
            return contract.validateAsync(response.body)
        })
    });

});
