describe('Testando múltiplas páginas', () => {
    beforeEach('Deve conseguir acessar a página de cartões', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.location('pathname').should('eq','/home')

    })
    it('Deve acessar a pagina meus cartões', () => {
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
        cy.location('pathname').should('eq','/home/cartoes')
    })
    it('Deve acessar a pagina serviços', () => {
        cy.getByData('app-home').find('a').eq(2).click()
        cy.getByData('servicos').should('exist').and('contain', 'Pix')
        cy.location('pathname').should('eq','/home/servicos')
    })
    it('Deve acessar a pagina investimento', () => {
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('investimento').should('exist').and('have.text', 'Estatísticas')
        cy.location('pathname').should('eq','/home/investimentos')
    })
    it('Deve acessar a pagina inicio', () => {
        cy.getByData('app-home').find('a').eq(0).click()
        cy.getByData('inicio').should('exist').and('have.text', 'Valor')
        cy.location('pathname').should('eq','/home')
    })

}) 