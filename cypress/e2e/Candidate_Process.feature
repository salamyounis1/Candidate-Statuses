Feature: Candidate Process Regression Testing

  Scenario: Verify candidate status flow from Application Initiated
    Given the candidate is in "Application Initiated" status
    When the HR administrator shortlists the candidate
    Then the candidate status should be "Shortlisted"

    Given the candidate is in "Application Initiated" status
    When the HR administrator rejects the candidate
    Then the candidate status should be "Rejected"

  Scenario: Verify candidate status flow from Shortlisted
    Given the candidate is in "Shortlisted" status
    When the HR administrator rejects the candidate from shortlist
    Then the candidate status should be "Rejected"

    Given the candidate is in "Shortlisted" status
    When the HR administrator schedules an interview
    Then the candidate status should be "Interview Scheduled"

#   Scenario: Verify candidate status flow from Interview Scheduled
#     Given the candidate is in "Interview Scheduled" status
#     When the HR administrator rejects the candidate
#     Then the candidate status should be "Rejected"

#     Given the candidate is in "Interview Scheduled" status
#     When the HR administrator marks the interview as failed
#     Then the candidate status should be "Interview Failed"

#     Given the candidate is in "Interview Scheduled" status
#     When the HR administrator marks the interview as passed
#     Then the candidate status should be "Interview Passed"

#   Scenario: Verify candidate status flow from Interview Failed
#     Given the candidate is in "Interview Failed" status
#     When the HR administrator rejects the candidate
#     Then the candidate status should be "Rejected"

#   Scenario: Verify candidate status flow from Interview Passed
#     Given the candidate is in "Interview Passed" status
#     When the HR administrator rejects the candidate
#     Then the candidate status should be "Rejected"

#     Given the candidate is in "Interview Passed" status
#     When the HR administrator schedules another interview
#     Then the candidate status should be "Interview Scheduled"

#     Given the candidate is in "Interview Passed" status
#     When the HR administrator offers the job
#     Then the candidate status should be "Job Offered"

#   Scenario: Verify candidate status flow from Job Offered
#     Given the candidate is in "Job Offered" status
#     When the HR administrator rejects the candidate
#     Then the candidate status should be "Rejected"

#     Given the candidate is in "Job Offered" status
#     When the HR administrator declines the offer
#     Then the candidate status should be "Offer Declined"

#     Given the candidate is in "Job Offered" status
#     When the HR administrator hires the candidate
#     Then the candidate status should be "Hired"

#   Scenario: Verify candidate status flow from Offer Declined
#     Given the candidate is in "Offer Declined" status
#     When the HR administrator rejects the candidate
#     Then the candidate status should be "Rejected"

#   Scenario: Verify candidate status flow from Rejected
#     Given the candidate is in "Rejected" status
   

#   Scenario: Verify candidate status flow from Hired
#     Given the candidate is in "Hired" status
  
