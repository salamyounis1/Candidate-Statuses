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

// Scenario: Verify candidate status flow from Application Initiated
// Given the candidate is in "Application Initiated" status
// When the HR administrator shortlists the candidate
// Then the candidate status should be "Shortlisted"
Given('the candidate is in "Application Initiated" status',()=>
{
    candidate_process_actions.RecruitmentButton();
    
});
 When('the HR administrator shortlists the candidate', () => {
    candidate_process_actions. Add_Candidate('testfor shorlist','one','salam',"ss@gmail.com",'Senior QA Lead');
 candidate_process_actions.ViewCandidatesButton();
 candidate_process_actions.ViewMyCandidates_Button();
  candidate_process_actions.GreenButton();
  candidate_process_actions.SaveStatus();
 });
 Then('the candidate status should be "Shortlisted"', () => {
    
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.Status1_Check('Shortlisted');
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.Status2_Check('Shortlisted');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.delete_cann();
});



// Given the candidate is in "Application Initiated" status
//     When the HR administrator rejects the candidate
//     Then the candidate status should be "Rejected"


 When('the HR administrator rejects the candidate', () => {
    candidate_process_actions. Add_Candidate('testfor reject first','one','salam',"ss@gmail.com",'Senior QA Lead');
 candidate_process_actions.ViewCandidatesButton();
 candidate_process_actions.ViewMyCandidates_Button();
  candidate_process_actions.RejectButton();
  candidate_process_actions.SaveStatus();
 });
 Then('the candidate status should be "Rejected"', () => {
    
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.Status1_Check('Rejected');
    candidate_process_actions.delete_cann();
});

//    Scenario: Verify candidate status flow from Shortlisted
//      Given the candidate is in "Shortlisted" status
//      When the HR administrator rejects the candidate
//     Then the candidate status should be "Rejected"

//     Given the candidate is in "Shortlisted" status
//     When the HR administrator schedules an interview
//     Then the candidate status should be "Interview Scheduled"

Given('the candidate is in "Shortlisted" status',()=>{
    candidate_process_actions.RecruitmentButton();



});
When('the HR administrator rejects the candidate from shortlist',()=>{
    candidate_process_actions. Add_Candidate('testshort then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();
     candidate_process_actions.SaveStatus();

     candidate_process_actions.RecruitmentButton();


 candidate_process_actions.ViewCandidatesButton();
 candidate_process_actions.ViewMyCandidates_Button();
  candidate_process_actions.RejectButton();
  candidate_process_actions.SaveStatus();

});


When('the HR administrator schedules an interview',()=>{

     candidate_process_actions. Add_Candidate('testshort then interv','one2','salam',"ss2@gmail.com",'Senior QA Lead');
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();
     candidate_process_actions.SaveStatus();

     candidate_process_actions.GreenButton();
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();

});
Then('the candidate status should be "Interview Scheduled"',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.Status1_Check('Interview Scheduled');
    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.Status2_Check('Interview Scheduled');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.delete_cann();
});
// Scenario: Verify candidate status flow from Interview Scheduled
// Given the candidate is in "Interview Scheduled" status
// When the HR administrator rejects the candidate from IS
// Then the candidate status should be "Rejected"

// # Given the candidate is in "Interview Scheduled" status
// # When the HR administrator marks the interview as failed
// # Then the candidate status should be "Interview Failed"

// # Given the candidate is in "Interview Scheduled" status
// # When the HR administrator marks the interview as passed
// # Then the candidate status should be "Interview Passed"

Given('the candidate is in "Interview Scheduled" status',()=>{
    candidate_process_actions.RecruitmentButton();

});
When('the HR administrator rejects the candidate from IS',()=>{

    candidate_process_actions. Add_Candidate('interv then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
   candidate_process_actions.ViewCandidatesButton();
   candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.GreenButton();//shortlist
    candidate_process_actions.SaveStatus();


    candidate_process_actions.GreenButton();//interview
    candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.SaveStatus();


    candidate_process_actions. Reject_After_Interview()//reject
     candidate_process_actions.SaveStatus();

});


When('the HR administrator marks the interview as failed',()=>{

    candidate_process_actions. Add_Candidate('interv then failed','one2','salam',"ss2@gmail.com",'Senior QA Lead');
   candidate_process_actions.ViewCandidatesButton();
   candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.GreenButton();//shortlist
    candidate_process_actions.SaveStatus();

    candidate_process_actions.GreenButton();//interview
    candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.SaveStatus();

    candidate_process_actions.Mark_Interview_Failed();
     candidate_process_actions.SaveStatus();

});

Then('the candidate status should be "Interview Failed"',()=>{
 
    
    candidate_process_actions.Status2_Check('Interview Failed');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.delete_cann();
});

When('the HR administrator marks the interview as passed',()=>{

    candidate_process_actions. Add_Candidate('interv then pass','one2','salam',"ss2@gmail.com",'Senior QA Lead');
   candidate_process_actions.ViewCandidatesButton();
   candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.GreenButton();//shortlist
    candidate_process_actions.SaveStatus();


    candidate_process_actions.GreenButton();//interview
    candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
    candidate_process_actions.SaveStatus();


    candidate_process_actions.GreenButton();
     candidate_process_actions.SaveStatus();

});
Then('the candidate status should be "Interview Passed"',()=>{
    
    candidate_process_actions.Status2_Check('Interview Passed');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.delete_cann();
});




// #   Scenario: Verify candidate status flow from Interview Failed
// #     Given the candidate is in "Interview Failed" status
// #     When the HR administrator rejects the candidate after IF
// #     Then the candidate status should be "Rejected"
Given('the candidate is in "Interview Failed" status',()=>{
    candidate_process_actions.RecruitmentButton();

});
When('the HR administrator rejects the candidate after IF',()=>{

    candidate_process_actions. Add_Candidate('faild then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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

    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();
    candidate_process_actions.Reject_Failed();
    candidate_process_actions.SaveStatus();


});
//5 
// #   Scenario: Verify candidate status flow from Interview Passed
// #     Given the candidate is in "Interview Passed" status
// #     When the HR administrator rejects the candidate after IP
// #     Then the candidate status should be "Rejected"

// #     Given the candidate is in "Interview Passed" status
// #     When the HR administrator schedules another interview
// #     Then the candidate status should be "Interview Scheduled"

// #     Given the candidate is in "Interview Passed" status
// #     When the HR administrator offers the job
// #     Then the candidate status should be "Job Offered"
Given('the candidate is in "Interview Passed" status',()=>{
    candidate_process_actions.RecruitmentButton();

});

When('the HR administrator rejects the candidate after IP',()=>{

    candidate_process_actions. Add_Candidate('pass then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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
    candidate_process_actions.RecruitmentButton();

    candidate_process_actions.ViewMyCandidates_Button();

    candidate_process_actions.Reject_Pass();
    candidate_process_actions.SaveStatus();


});


When('the HR administrator schedules another interview',()=>{

    candidate_process_actions. Add_Candidate('pass then interview','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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

    candidate_process_actions.Another_Int();
    candidate_process_actions.Add_interv('Int with salam2','Odis  Adalwin','2023-12-03');
    candidate_process_actions.SaveStatus();


});

When('the HR administrator offers the job',()=>{

    candidate_process_actions. Add_Candidate('pass then offer job','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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
Then('the candidate status should be "Job Offered"',()=>{
   
    candidate_process_actions.Status2_Check('Job Offered');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.delete_cann();
});



// Scenario: Verify candidate status flow from Job Offered
// #     Given the candidate is in "Job Offered" status
// #     When the HR administrator rejects the candidate after jo
// #     Then the candidate status should be "Rejected"

// #     Given the candidate is in "Job Offered" status
// #     When the HR administrator declines the offer
// #     Then the candidate status should be "Offer Declined"

// #     Given the candidate is in "Job Offered" status
// #     When the HR administrator hires the candidate
// #     Then the candidate status should be "Hired"

Given('the candidate is in "Job Offered" status',()=>{
    candidate_process_actions.RecruitmentButton();

});
When('the HR administrator rejects the candidate after jo',()=>{

    candidate_process_actions. Add_Candidate('offer then reject','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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
    candidate_process_actions.Reject_Offer();
    candidate_process_actions.SaveStatus();


});
When('the HR administrator declines the offer',()=>{

    candidate_process_actions. Add_Candidate('offer then decline','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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


});
Then('the candidate status should be "Offer Declined"',()=>{
   
    candidate_process_actions.Status2_Check('Offer Declined');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.delete_cann();
});



When('the HR administrator hires the candidate',()=>{

    candidate_process_actions. Add_Candidate('offer then hire','one2','salam',"ss2@gmail.com",'Senior QA Lead');
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

    candidate_process_actions.Hire();
    candidate_process_actions.SaveStatus();


});
Then('the candidate status should be "Hired"',()=>{
   
    candidate_process_actions.Status2_Check('Hired');
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.delete_cann();
});

// Scenario: Verify candidate status flow from Offer Declined
// Given the candidate is in "Offer Declined" status
// When the HR administrator rejects the candidate after ofde
// Then the candidate status should be "Rejected"



Given('the candidate is in "Offer Declined" status',()=>{
    candidate_process_actions.RecruitmentButton();

});


When('the HR administrator rejects the candidate after ofde',()=>{

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

    candidate_process_actions.ViewMyCandidates_Button();
candidate_process_actions.Reject_OFDes();
    candidate_process_actions.SaveStatus();

});