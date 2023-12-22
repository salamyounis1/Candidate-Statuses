/// <reference types="cypress" />

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPageElement } from "C:/Users/twitter/Desktop/cypress_course/PageObjects/PageActions/LoginPageActions";



const Login_Elements = new LoginPageElement();

Given('the user is on the login page', () => {

  cy.visit('/');
});

When('the user enters valid username and password and clicks the login button', () => {
  cy.fixture('MyData.json').then((MyUser) => {
  Login_Elements.username(MyUser.UserName);
  Login_Elements.password(MyUser.Password);
  Login_Elements.LoginButton();
});
});


Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});