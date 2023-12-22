import { Candidate_Process_Locators } from 'C:/Users/twitter/Desktop/tscycu/cypress/PageObjects/PageElements/Candidate_Process_Elements.json';
export class CandidateProcessActions {
 ClickOnRecruitmentButton(): void {
 
    cy.get(Candidate_Process_Locators.RecruitmentButton).click() ;
    return;
  }
  ViewCandidatesButton(): void {
    cy.contains("button",Candidate_Process_Locators.ViewCandidatesButton).click({ force: true });
    return;
  }
  ViewMyCandidates_Button(): void {
    cy.get(Candidate_Process_Locators.ViewMyCandidatesButton).first().click({ force: true });
    return;
  }
  CheckStatusOfTheCandidate(expectedText: string): void {

    cy.get(Candidate_Process_Locators.Status).should('have.text', 'Status: '+expectedText);
    
    return;
  }
  CheckTheTitleOfTheForm(expectedText: string):void{
    cy.get(Candidate_Process_Locators.RespectivePage).first().should('have.text',expectedText);
    return;
  }
  ClickOnRejectButton(): void {
    cy.get(Candidate_Process_Locators.RejectButton, {timeout:20000}).click({ force: true });
    return;
  }
  ClickOnGreenButton(): void {
    cy.get(Candidate_Process_Locators.GreenButton).click({ force: true });
    return;
  }
  AddCandidate(firstName: string,midName: string,lastName: string, email: string, vacancy: string): void {
    cy.get(Candidate_Process_Locators.AddCaButton).click({ force: true });
    cy.get(Candidate_Process_Locators.FName).type(firstName);
    cy.get(Candidate_Process_Locators.MName).type(midName);
    cy.get(Candidate_Process_Locators.LName).type(lastName);
    cy.get(Candidate_Process_Locators.Emailtxt).first().type(email);
    cy.get(Candidate_Process_Locators.SelectVacancy).click({ force: true });// Open the dropdown
    cy.get(Candidate_Process_Locators.SelectVacancyList).contains(vacancy).click({ force: true });
    cy.get(Candidate_Process_Locators.SaveCandidate).click();
  

    return;
  }
  ClickOnSaveStatusButton():void{

    cy.get(Candidate_Process_Locators.SaveStatus, {timeout:10000})
    .click({ force: true });
    
  
    

  }
  AddInterview(Interview_Title : string,Int_Name ,date :string ):void{
    cy.get(Candidate_Process_Locators.Interviewtitle).eq(5).type(Interview_Title);
    cy.get(Candidate_Process_Locators.InterviewerName).type('Odis');
    cy.get(Candidate_Process_Locators.SelectVacancyListForSecondIt).click({ force: true });
    cy.get('.oxd-button.oxd-button--medium.oxd-button--text.orangehrm-input-field-bottom-space').click({ force: true });

    cy.get(Candidate_Process_Locators.DateOfIn).first().type(date);
      }
 DeleteCandidate():void{
        cy.get(Candidate_Process_Locators.DeleteCan).first().click({ force: true });
        cy.get(Candidate_Process_Locators.YESDelete).click({ force: true });
        return;

        
      }
RejectAfterInterview():void{
  cy.contains("button",Candidate_Process_Locators.RejectInt, {timeout:10000}).click({ force: true });
  return;
}
MarkInterviewFailed():void{
  cy.contains("button",Candidate_Process_Locators.InterviewFailedButton, {timeout:10000}).click({ force: true });
  return;
}
ClickOnRejectButtonAfterFailed():void{
  cy.contains("button",Candidate_Process_Locators.RejectInt, {timeout:10000}).click({ force: true });
  return;
}

ClickOnAddAnotherInterviewButton():void{
  cy.contains("button",Candidate_Process_Locators.SecondIvButton, {timeout:10000}).click({ force: true });
  return;
}

ClickOnOfferJopButton():void{
  cy.contains("button",Candidate_Process_Locators.OfferjobButton, {timeout:10000}).click({ force: true });
  return;
}
ClickOnRejectOfferButton():void{
  cy.get(Candidate_Process_Locators.RejectButton ,{timeout:10000}).first().click({ force: true });
  return;
}

ClickOnOfferDeclinedButton():void{
  cy.contains("button",Candidate_Process_Locators.OfferDeclinedButton).click({ force: true });
  return;
}
ClickOnHireButton():void{
  cy.contains("button",Candidate_Process_Locators.HireButton).click({ force: true });
  return;
}


}



