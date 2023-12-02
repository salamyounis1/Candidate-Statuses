import { Candidate_Process_Locators } from 'C:/Users/twitter/Desktop/tscycu/PageObjects/PageElements/Candidate_Process_Elements.json';
export class Candidate_Process_Actions {
 RecruitmentButton(): void {
    cy.get(Candidate_Process_Locators.Recruitment_Button).click();
    return;
  }
  ViewCandidatesButton(): void {
    cy.get(Candidate_Process_Locators.ViewCandidates_Button).click();
    return;
  }
  ViewMyCandidates_Button(): void {
    cy.get(Candidate_Process_Locators.ViewMyCandidates_Button).click();
    return;
  }
  Status1_Check(expectedText: string): void {
    cy.get(Candidate_Process_Locators.Status1).should('have.text', expectedText);
    cy.get(Candidate_Process_Locators.Status2).should('have.text', expectedText);
    
    return;
  }
  RejectButton(): void {
    cy.get(Candidate_Process_Locators.Reject_Button).click();
    return;
  }
  InterviewScheduledButton(): void {
    cy.get(Candidate_Process_Locators.InterviewScheduled_Button).click();
    return;
  }

//   Status2_Check(expectedText: string): void {
    
//   }

}


