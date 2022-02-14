/// <reference types="cypress"/>

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produtos ao carrinho - Utilizando comandos customizados', () => {
        cy.addProdutos('Aether Gym Pant', '33', 'Blue', 3)
    });

    it.only('Deve adicionar produtos ao carrinho - Utilizando comandos customizados', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Green', 5)
    });

});