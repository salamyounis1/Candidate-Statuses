import { Candidate_Process_Locators } from 'C:/Users/twitter/Desktop/tscycu/PageObjects/PageElements/Candidate_Process_Elements.json';
export class Candidate_Process_Actions {
 RecruitmentButton(): void {
 
    cy.get(Candidate_Process_Locators.Recruitment_Button).click() ;
    return;
  }
  ViewCandidatesButton(): void {
    cy.get(Candidate_Process_Locators.ViewCandidates_Button).click({ force: true });
    return;
  }
  ViewMyCandidates_Button(): void {
    cy.get(Candidate_Process_Locators.ViewMyCandidates_Button).click({ force: true });
    return;
  }
  Status1_Check(expectedText: string): void {

    cy.get(Candidate_Process_Locators.Status1).should('have.text', expectedText);
    
    
    return;
  }
  RejectButton(): void {
    cy.get(Candidate_Process_Locators.Reject_Button).click({ force: true }).then(() => cy.wait(5000));
    return;
  }
  GreenButton(): void {
    cy.get(Candidate_Process_Locators.Green_Button).click({ force: true }).then(() => cy.wait(5000));
    return;
  }
  Add_Candidate(firstName: string,midName: string,lastName: string, email: string, vacancy: string): void {
    cy.get(Candidate_Process_Locators.AddCa_Button).click();
    cy.get(Candidate_Process_Locators.F_Name).type(firstName);
    cy.get(Candidate_Process_Locators.M_Name).type(midName);
    cy.get(Candidate_Process_Locators.L_Name).type(lastName);
    cy.get(Candidate_Process_Locators.Email_txt).type(email);
    cy.get(Candidate_Process_Locators.Select_Vacancy).click({ force: true });// Open the dropdown
    cy.get('span[data-v-13cf171c=""]').contains('Senior QA Lead').click({ force: true });
    cy.get(Candidate_Process_Locators.Save_Candidate).click();
  

    return;
  }
  SaveStatus():void{

    cy.get(Candidate_Process_Locators.Save_Status)
    .click({ force: true });
    
  
    

  }
  Add_interv(Interview_Title : string,Int_Name ,date :string ):void{
    cy.get(Candidate_Process_Locators.Interview_title).type(Interview_Title);
     cy.get(Candidate_Process_Locators.Interviewer_Name).type('Odis');
    // Using class selector
    cy.get('span[data-v-1ccb3a64=""]').click({ force: true });
cy.get('.oxd-button.oxd-button--medium.oxd-button--text.orangehrm-input-field-bottom-space').click({ force: true });


    cy.get(Candidate_Process_Locators.DateOfIn).type(date);
      }

      delete_cann():void{
        cy.get(Candidate_Process_Locators.Delete_can).click({ force: true });
        cy.get(Candidate_Process_Locators.YES_Delete).click({ force: true });
        return;

        
      }
}



