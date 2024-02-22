describe("Testes na pagina inicial", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve fazer a inclusão de um contato", () => {
    cy.get('[type="text"]').type("Malu");
    cy.get('[type="email"]').type("Odorizziteste@outlook.com");
    cy.get('[type="tel"]').type("(00) 00000-0000");
    cy.get(".adicionar").click();
  });


  it("Deve fazer a alteraçao de um contato", () => {
    cy.get(":nth-child(4) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="tel"]').clear();
    cy.get('[type="text"]').type("Malu");
    cy.get('[type="email"]').type("maluodorizzi@gmail.com");
    cy.get('[type="tel"]').type("(47) 888888-888888");
    cy.get(".alterar").click();
  });

  // it("Deletar um contato", () => {
  //   cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
  // });

});
