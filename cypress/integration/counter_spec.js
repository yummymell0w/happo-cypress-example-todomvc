// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("TodoMVC - React - Counter", function () {
  // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = "buy some cheese";
  let TODO_ITEM_TWO = "feed the cat";

  beforeEach(function () {
    cy.visit("/");
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.document.activeElement.blur();
    });
  });

  context("Counter", function () {
    it("should display the current number of todo items", function () {
      cy.createTodo(TODO_ITEM_ONE);
      cy.get(".todo-count")
        .contains("1 item left")
        .happoScreenshot({ component: "Counter", variant: "1 item left" });

      cy.createTodo(TODO_ITEM_TWO);
      cy.get(".todo-count")
        .contains("2 items left")
        .happoScreenshot({ component: "Counter", variant: "2 items left" });
    });
  });
});
