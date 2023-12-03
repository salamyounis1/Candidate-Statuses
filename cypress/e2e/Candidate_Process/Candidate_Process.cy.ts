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

     candidate_process_actions.RecruitmentButton();



    candidate_process_actions.ViewCandidatesButton();
    candidate_process_actions.ViewMyCandidates_Button();
     candidate_process_actions.GreenButton();
     candidate_process_actions.Add_interv('Int with salam','Odis  Adalwin','2023-12-03');
     candidate_process_actions.SaveStatus();

});
Then('the candidate status should be "Interview Scheduled"',()=>{
    candidate_process_actions.RecruitmentButton();
    candidate_process_actions.Status1_Check('Interview Scheduled');
    candidate_process_actions.delete_cann();
});
