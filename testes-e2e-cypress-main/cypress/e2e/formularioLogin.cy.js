describe('Validação de login', ()=> {
    it.only('Não deve permitir um campo em branco', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        
        // cy.getByData('email-input').type('') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
        
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have-text', 'o campo email é obrigatório') /* a
        
        mensagem exibida deve ser: "o campo email é obrigatório" */
        })
})
