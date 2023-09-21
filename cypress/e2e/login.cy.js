/// <reference types="cypress" />

describe('Login', () => {

    it('Should login', () => {
        cy.request({
            method: 'POST',
            url: 'login',
            body: {
                "username": "admin",
                "password": "admin"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    });

});
