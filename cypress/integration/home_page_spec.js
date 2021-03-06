/// <reference types="Cypress" />

describe("The Home Page", () => {
  it("successfully loads the root", () => {
    cy.visit("/");
  });

  it("can visit a blog post link from the home page", () => {
    cy.visit("/");

    cy.get('[href="/why-switched-apollo-client-urql/"]').click();

    // header appears
    cy.get("h1");

    // content appears
    cy.get("p");
  });
});
