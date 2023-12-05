/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { Candidate_Process_Actions } from "../../../PageObjects/PageActions/CandidateProcessActions";
import { LoginPageLocators } from 'C:/Users/twitter/Desktop/tscycu/PageObjects/PageElements/LoginPageElements.json';
const candidate_process_actions = new Candidate_Process_Actions();
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get(LoginPageLocators.username_text).type('Admin');
    cy.get(LoginPageLocators.password_text).type('admin123');
    cy.get(LoginPageLocators.loginbutton_text).click();



});


Given('the candidate is in "Application Initiated" status',()=>
{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Application Initiated','one','salam',"ss@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    
});
 When('the HR administrator shortlists the candidate', () => {

  candidate_process_actions.GreenButton();
//   candidate_process_actions.SaveStatus();
 });


 When('the HR administrator rejects the candidate', () => {

  candidate_process_actions.RejectButton();
//   candidate_process_actions.SaveStatus();
 });

Given('the candidate is in "Shortlisted" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Shortlisted','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();
     candidate_process_actions.SaveStatus();

     candidate_process_actions.RecruitmentButton();


 candidate_process_actions.ViewCandidatesButton();
 candidate_process_actions.ViewMyCandidates_Button();



});
When('the HR administrator rejects the candidate from shortlist',()=>{

  candidate_process_actions.RejectButton();
//   candidate_process_actions.SaveStatus();

});


When('the HR administrator schedules an interview',()=>{



     candidate_process_actions.GreenButton();
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
    //  candidate_process_actions.SaveStatus();

});


Given('the candidate is in "Interview Scheduled" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Interview Scheduled','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//shortlist
     candidate_process_actions.SaveStatus();
 
 
     candidate_process_actions.GreenButton();//interview
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();
 

});
When('the HR administrator rejects the candidate from IS',()=>{




    candidate_process_actions. Reject_After_Interview()//reject
    //  candidate_process_actions.SaveStatus();

});


When('the HR administrator marks the interview as failed',()=>{


    candidate_process_actions.Mark_Interview_Failed();
    //  candidate_process_actions.SaveStatus();

});


When('the HR administrator marks the interview as passed',()=>{




    candidate_process_actions.GreenButton();
    //  candidate_process_actions.SaveStatus();

});

Given('the candidate is in "Interview Failed" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Interview Failed','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//shortlist
     candidate_process_actions.SaveStatus();
 
     candidate_process_actions.RecruitmentButton();
 
 
 
    
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//interview
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();
 
     candidate_process_actions.Mark_Interview_Failed();
     candidate_process_actions.SaveStatus();

});
When('the HR administrator rejects the candidate after IF',()=>{


    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.Reject_Failed();
    // candidate_process_actions.SaveStatus();


});

Given('the candidate is in "Interview Passed" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Interview Passed','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//shortlist
     candidate_process_actions.SaveStatus();
 
     
     candidate_process_actions.GreenButton();//interview
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();
     candidate_process_actions.RecruitmentButton();
 
     candidate_process_actions.ViewMyCandidates_Button();
   
     candidate_process_actions.GreenButton();//pass
     candidate_process_actions.SaveStatus();

});

When('the HR administrator rejects the candidate after IP',()=>{

   
    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();

    candidate_process_actions.RejectButton()
    // candidate_process_actions.SaveStatus();


});


When('the HR administrator schedules another interview',()=>{


    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();

    candidate_process_actions.Another_Int();
    candidate_process_actions.Add_interv('Int with salam2','Odis  Adalwin','2023-12-03');
    // candidate_process_actions.SaveStatus();


});

When('the HR administrator offers the job',()=>{



    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();
  
    candidate_process_actions.Offer_jop();
    // candidate_process_actions.SaveStatus();


});

Given('the candidate is in "Job Offered" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('test Job Offered','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//shortlist
     candidate_process_actions.SaveStatus();
 
 
     candidate_process_actions.GreenButton();//interview
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();
 
   
     candidate_process_actions.GreenButton();//pass
     candidate_process_actions.SaveStatus();
 
     candidate_process_actions.RecruitmentButton();
 
     candidate_process_actions.ViewMyCandidates_Button();
   
     candidate_process_actions.Offer_jop();
     candidate_process_actions.SaveStatus();

});
When('the HR administrator rejects the candidate after jo',()=>{


    candidate_process_actions.Reject_Offer();
    // candidate_process_actions.SaveStatus();


});
When('the HR administrator declines the offer',()=>{



    candidate_process_actions.Offer_Declined();
    // candidate_process_actions.SaveStatus();


});


When('the HR administrator hires the candidate',()=>{


    candidate_process_actions.Hire();
    // candidate_process_actions.SaveStatus();


});

Given('the candidate is in "Offer Declined" status',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions. Add_Candidate('oferdec then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();//shortlist
     candidate_process_actions.SaveStatus();
 
 
     candidate_process_actions.GreenButton();//interview
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();
 
   
     candidate_process_actions.GreenButton();//pass
     candidate_process_actions.SaveStatus();
 
     candidate_process_actions.RecruitmentButton();
 
     candidate_process_actions.ViewMyCandidates_Button();
   
     candidate_process_actions.Offer_jop();
     candidate_process_actions.SaveStatus();
 
     candidate_process_actions.Offer_Declined();
     candidate_process_actions.SaveStatus();
     candidate_process_actions.RecruitmentButton();

});


When('the HR administrator rejects the candidate after ofde',()=>{

    candidate_process_actions.ViewMyCandidates_Button();
candidate_process_actions.RejectButton();
    // candidate_process_actions.SaveStatus();

});

Then('the candidate status should be {string} & its respective page {string}', (status: string,pagetitle:string) => {

    candidate_process_actions. Title_Check(pagetitle);
    candidate_process_actions.SaveStatus();

  candidate_process_actions.Status2_Check(status);
  candidate_process_actions.RecruitmentButton();
  candidate_process_actions.ViewCandidatesButton();
  candidate_process_actions.delete_cann();
});