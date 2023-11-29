/// <reference types="cypress" />
// import { LoginPageElement } from "C:/Users/twitter/Desktop/cypress_course/PageObjects/PageActions/LoginPageActions";

// const Login_Elements = new LoginPageElement();

// describe('Orange HRM Login Feature', () => {
//   it('Visits the Cypress website and performs actions', () => {
//     // Use Cypress commands
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
//     Login_Elements.username('Admin');
//     Login_Elements.password('admin123');
//     Login_Elements.LoginButton();
//   });
// });




/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPageElement } from "C:/Users/twitter/Desktop/cypress_course/PageObjects/PageActions/LoginPageActions";
// Your test file


const Login_Elements = new LoginPageElement();

Given('visit Orange HRM website', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
});

When('User provide username', () => {
  Login_Elements.username('Admin');
});

When('User provide password', () => {
  Login_Elements.password('admin123');
});

Then('Click on login button to log in', () => {
  Login_Elements.LoginButton();
});
