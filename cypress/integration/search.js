
describe('Search for artists in different displays', () => {
  it('Search for Daniel Ceasar artist on macbook!', () => {
    cy.visit('localhost:4200')
    cy.viewport('macbook-15')
    cy.get('[cy-search-input]').type('daniel caesar')
    cy.get('[cy-search-content-item]:first').click()
    expect(true).to.equal(true)
  })

  it('Search for Alina Baraz artist on iphone!', () => {
    cy.visit('localhost:4200')
    cy.viewport('iphone-6')
    cy.get('[cy-search-input]').type('alina baraz')
    cy.get('[cy-search-content-item]:first').click()
    expect(true).to.equal(true)
  })
})
