describe('Formulário cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    // it('Usuário deve conseguir se cadastrar com sucesso', () => {
    //     cy.getByData('botao-cadastro').click()
    //     cy.getByData('nome-input').type('henrique')
    //     cy.getByData('email-input').type('coelho@email.com')
    //     cy.getByData('senha-input').type('456789')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

    // })

    // it('Não deve permitir um e-mail inválido!', () => {
    //     cy.getByData('botao-cadastro').click()
    //     // cy.getByData('nome-input').type('farinha') */So funciona se a linha do nome estiver comentada
    //     cy.getByData('email-input').type('le@email')
    //     cy.getByData('senha-input').type('456789')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    // })

    // it('Não deve permitir um campo email em branco', () => {
    //     cy.getByData('botao-cadastro').click()
    //     // cy.getByData('email-input').type('')
    //     // cy.getByData('nome-input').type('farinha')
    //     cy.getByData('senha-input').type('456789')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    // })

    // it('Não deve permitir um campo senha em branco', () => {
    //     cy.getByData('botao-cadastro').click()
    //     // cy.getByData('senha-input').type('')
    //     cy.getByData('nome-input').type('farinha')
    //     cy.getByData('email-input').type('fafa@email.com')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatorio')
    // })

    it('Mensagem de erro: ausência do nome', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('senha-input').type('456789')
        cy.getByData('email-input').type('q@email.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório!')
    })
})