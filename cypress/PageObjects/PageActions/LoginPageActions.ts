
import { LoginPageLocators } from 'C:/Users/twitter/Desktop/tscycu/cypress/PageObjects/PageElements/LoginPageElements.json';
export class LoginPageElement {
  username(uname: string): void {
    cy.get(LoginPageLocators.username_text).type(uname);
    return;
  }

  password(pass: string): void {
    cy.get(LoginPageLocators.password_text).type(pass);
    return;
  }

  loginButton(): void {
    cy.get(LoginPageLocators.loginbutton_text).click();
    return;
  }
}
