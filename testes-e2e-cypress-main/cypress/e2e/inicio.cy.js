describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar o p corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('vantagens').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar o p de saques corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('saques').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
})