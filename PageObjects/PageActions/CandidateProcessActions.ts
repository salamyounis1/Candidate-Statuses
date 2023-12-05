import { Candidate_Process_Locators } from 'C:/Users/twitter/Desktop/tscycu/PageObjects/PageElements/Candidate_Process_Elements.json';
export class Candidate_Process_Actions {
 RecruitmentButton(): void {
 
    cy.get(Candidate_Process_Locators.Recruitment_Button).click() ;
    return;
  }
  ViewCandidatesButton(): void {
    cy.contains(Candidate_Process_Locators.ViewCandidates_Button).click({ force: true });
    return;
  }
  ViewMyCandidates_Button(): void {
    cy.get(Candidate_Process_Locators.ViewMyCandidates_Button).first().click({ force: true });
    return;
  }
  Status2_Check(expectedText: string): void {

    cy.get(Candidate_Process_Locators.Status2).should('have.text', 'Status: '+expectedText);
    
    
    return;
  }
  Title_Check(expectedText: string):void{
    cy.get(Candidate_Process_Locators.respective_page).first().should('have.text',expectedText);
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
    cy.get(Candidate_Process_Locators.AddCa_Button).click({ force: true });
    cy.get(Candidate_Process_Locators.F_Name).type(firstName);
    cy.get(Candidate_Process_Locators.M_Name).type(midName);
    cy.get(Candidate_Process_Locators.L_Name).type(lastName);
    cy.get(Candidate_Process_Locators.Email_txt).first().type(email);
    cy.get(Candidate_Process_Locators.Select_Vacancy).click({ force: true });// Open the dropdown
    cy.get('span[data-v-13cf171c=""]').contains('Associate IT Manager').click({ force: true });
    cy.get(Candidate_Process_Locators.Save_Candidate).click();
  

    return;
  }
  SaveStatus():void{

    cy.get(Candidate_Process_Locators.Save_Status)
    .click({ force: true });
    
  
    

  }
  Add_interv(Interview_Title : string,Int_Name ,date :string ):void{
    cy.get(Candidate_Process_Locators.Interview_title).eq(5).type(Interview_Title);
    cy.get(Candidate_Process_Locators.Interviewer_Name).type('Odis');
    cy.get('span[data-v-1ccb3a64=""]').click({ force: true });
    cy.get('.oxd-button.oxd-button--medium.oxd-button--text.orangehrm-input-field-bottom-space').click({ force: true });


    cy.get(Candidate_Process_Locators.DateOfIn).first().type(date);
      }
 delete_cann():void{
        cy.get(Candidate_Process_Locators.Delete_can).first().click({ force: true });
        cy.get(Candidate_Process_Locators.YES_Delete).click({ force: true });
        return;

        
      }
Reject_After_Interview():void{
  cy.contains(Candidate_Process_Locators.Reject_Int).click({ force: true }).then(() => cy.wait(5000));
  return;
}
Mark_Interview_Failed():void{
  cy.contains(Candidate_Process_Locators.Interview_Failed_Button).click({ force: true }).then(() => cy.wait(5000));
  return;
}
Reject_Failed():void{
  cy.contains(Candidate_Process_Locators.Reject_Int).click({ force: true }).then(() => cy.wait(5000));
  return;
}

Another_Int():void{
  cy.contains(Candidate_Process_Locators.Second_Iv_Button).click({ force: true }).then(() => cy.wait(5000));
  return;
}

Offer_jop():void{
  cy.contains(Candidate_Process_Locators.Offer_job_Button).click({ force: true }).then(() => cy.wait(5000));
  return;
}
Reject_Offer():void{
  cy.get(Candidate_Process_Locators.Reject_Button).first().click({ force: true }).then(() => cy.wait(5000));
  return;
}

Offer_Declined():void{
  cy.contains(Candidate_Process_Locators.Offer_Declined_Button).click({ force: true }).then(() => cy.wait(5000));
  return;
}
Hire():void{
  cy.contains(Candidate_Process_Locators.Hire_Button).click({ force: true }).then(() => cy.wait(5000));
  return;
}


}



