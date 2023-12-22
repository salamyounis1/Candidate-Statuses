Feature: Candidate Process Regression Testing

  Scenario: Verify candidate status flow from Application Initiated
    Given the candidate is in "Application Initiated" status
    When the HR administrator shortlists the candidate
    Then the candidate status should be "Shortlisted" & its respective page "Shortlist Candidate"

    Given the candidate is in "Application Initiated" status
    When the HR administrator rejects the candidate
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"

  Scenario: Verify candidate status flow from Shortlisted
    Given the candidate is in "Shortlisted" status
    When the HR administrator rejects the candidate from shortlist
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"

    Given the candidate is in "Shortlisted" status
    When the HR administrator schedules an interview
    Then the candidate status should be "Interview Scheduled" & its respective page "Schedule Interview"

  Scenario: Verify candidate status flow from Interview Scheduled
    Given the candidate is in "Interview Scheduled" status
    When the HR administrator rejects the candidate from IS
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"

    Given the candidate is in "Interview Scheduled" status
    When the HR administrator marks the interview as failed
    Then the candidate status should be "Interview Failed" & its respective page "Mark Interview Failed"

    Given the candidate is in "Interview Scheduled" status
    When the HR administrator marks the interview as passed
    Then the candidate status should be "Interview Passed" & its respective page "Mark Interview Passed"

  Scenario: Verify candidate status flow from Interview Failed
    Given the candidate is in "Interview Failed" status
    When the HR administrator rejects the candidate after IF
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"
# #5
  Scenario: Verify candidate status flow from Interview Passed
    Given the candidate is in "Interview Passed" status
    When the HR administrator rejects the candidate after IP
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"

    Given the candidate is in "Interview Passed" status
    When the HR administrator schedules another interview
    Then the candidate status should be "Interview Scheduled" & its respective page "Schedule Interview"

    Given the candidate is in "Interview Passed" status
    When the HR administrator offers the job
    Then the candidate status should be "Job Offered" & its respective page "Offer Job"

  Scenario: Verify candidate status flow from Job Offered
    Given the candidate is in "Job Offered" status
    When the HR administrator rejects the candidate after jo
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"

    Given the candidate is in "Job Offered" status
    When the HR administrator declines the offer
    Then the candidate status should be "Offer Declined" & its respective page "Decline Offer"

    Given the candidate is in "Job Offered" status
    When the HR administrator hires the candidate
    Then the candidate status should be "Hired" & its respective page "Hire Candidate"

  Scenario: Verify candidate status flow from Offer Declined
    Given the candidate is in "Offer Declined" status
    When the HR administrator rejects the candidate after ofde
    Then the candidate status should be "Rejected" & its respective page "Reject Candidate"


  
