/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CandidateProcessActions } from "../../../cypress/PageObjects/PageActions/CandidateProcessActions";

import { LoginPageElement } from "C:/Users/twitter/Desktop/cypress_course/PageObjects/PageActions/LoginPageActions";
const Login_Elements = new LoginPageElement();
const candidate_process_actions = new CandidateProcessActions();
beforeEach(() => {
    cy.visit('/');
    cy.fixture('MyData.json').then((MyUser) => {
        Login_Elements.username(MyUser.UserName);
        Login_Elements.password(MyUser.Password);
        Login_Elements.LoginButton();
      });
});


Given('the candidate is in "Application Initiated" status',()=>
{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Application Initiated','one','salam',"ss@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    
});
 When('the HR administrator shortlists the candidate', () => {

     candidate_process_actions.ClickOnGreenButton();

 });


 When('the HR administrator rejects the candidate', () => {

      candidate_process_actions.ClickOnRejectButton();

 });

Given('the candidate is in "Shortlisted" status',()=>{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Shortlisted','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();



});
When('the HR administrator rejects the candidate from shortlist',()=>{

    candidate_process_actions.ClickOnRejectButton();

});


When('the HR administrator schedules an interview',()=>{

     candidate_process_actions.ClickOnGreenButton();
     candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');

});


Given('the candidate is in "Interview Scheduled" status',()=>{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Interview Scheduled','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//shortlist
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//interview
    candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.ClickOnSaveStatusButton();

});
When('the HR administrator rejects the candidate from IS',()=>{

    candidate_process_actions. RejectAfterInterview()//reject

});


When('the HR administrator marks the interview as failed',()=>{

 candidate_process_actions.MarkInterviewFailed();

});


When('the HR administrator marks the interview as passed',()=>{

    candidate_process_actions.ClickOnGreenButton();

});

Given('the candidate is in "Interview Failed" status',()=>{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Interview Failed','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//shortlist
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//interview
    candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.MarkInterviewFailed();
    candidate_process_actions.ClickOnSaveStatusButton();

});
When('the HR administrator rejects the candidate after IF',()=>{

    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnRejectButtonAfterFailed();

});

Given('the candidate is in "Interview Passed" status',()=>{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Interview Passed','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//shortlist
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//interview
    candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//pass
    candidate_process_actions.ClickOnSaveStatusButton();

});

When('the HR administrator rejects the candidate after IP',()=>{

    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnRejectButton()
    
});


When('the HR administrator schedules another interview',()=>{

    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnAddAnotherInterviewButton();
    candidate_process_actions.AddInterview('Int with salam2','Odis  Adalwin','2023-12-03');

});

When('the HR administrator offers the job',()=>{

    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnOfferJopButton();
    
});

Given('the candidate is in "Job Offered" status',()=>{

    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('test Job Offered','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//shortlist
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//interview
    candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//pass
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnOfferJopButton();
    candidate_process_actions.ClickOnSaveStatusButton();

});
When('the HR administrator rejects the candidate after jo',()=>{

    candidate_process_actions.ClickOnRejectOfferButton();
   
});
When('the HR administrator declines the offer',()=>{

    candidate_process_actions.ClickOnOfferDeclinedButton();

});


When('the HR administrator hires the candidate',()=>{

    candidate_process_actions.ClickOnHireButton();
  
});

Given('the candidate is in "Offer Declined" status',()=>{
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions. AddCandidate('oferdec then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnGreenButton();//shortlist
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//interview
    candidate_process_actions.AddInterview('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnGreenButton();//pass
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnOfferJopButton();
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnOfferDeclinedButton();
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.ClickOnRecruitmentButton();

});


When('the HR administrator rejects the candidate after ofde',()=>{

    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.ClickOnRejectButton();

});

Then('the candidate status should be {string} & its respective page {string}', (status: string,pagetitle:string) => {

    candidate_process_actions. CheckTheTitleOfTheForm(pagetitle);
    candidate_process_actions.ClickOnSaveStatusButton();
    candidate_process_actions.CheckStatusOfTheCandidate(status);
    candidate_process_actions.ClickOnRecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.DeleteCandidate();
});