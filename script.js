// Add investor to the investor list with status dropdown
function addInvestor() {
    let investorNameInput = document.getElementById('investor-name');
    let investorOfferInput = document.getElementById('investor-offer');
    let investorList = document.getElementById('investor-list');
    let investorName = investorNameInput.value.trim();
    let offerAmount = parseInt(investorOfferInput.value);

    if (investorName && !isNaN(offerAmount) && offerAmount > 0) {
        // Create investor item with offer amount and dropdown
        let li = document.createElement('li');
        li.classList.add('investor-item');
        li.innerHTML = `
            <span class="investor-name">${investorName}</span>
            <div class="offer-container">
                <div class="offer-amount">Offer: $${offerAmount}</div>
            </div>
            <select class="investor-status-dropdown" onchange="updateInvestorStatus(this, '${investorName}')">
                <option value="Deal Not Closed">Deal Not Closed</option>
                <option value="Deal Closed">Deal Closed</option>
            </select>
        `;
        investorList.appendChild(li);

        // Clear inputs
        investorNameInput.value = '';
        investorOfferInput.value = '';
    }
}

// Update investor status based on dropdown selection
function updateInvestorStatus(dropdown, investorName) {
    let status = dropdown.value;
    let investorItem = document.querySelector(`.investor-item .investor-name:contains('${investorName}')`).parentElement;
    let offerAmountDiv = investorItem.querySelector('.offer-amount');

    // Ensure offerAmount exists for the investor
    if (offerAmountDiv) {
        // Adjust the appearance based on the deal status
        switch(status) {
            case 'Deal Closed':
                investorItem.style.backgroundColor = "#4caf50"; // Green for closed deal
                break;
            case 'Deal Not Closed':
                investorItem.style.backgroundColor = "#f44336"; // Red for not closed deal
                break;
        }
    }
}

// Add calendar item
function addCalendarItem() {
    let calendarDate = document.getElementById('calendar-date').value;
    let calendarLabel = document.getElementById('calendar-label').value;
    let calendarItems = document.getElementById('calendar-items');

    if (calendarDate && calendarLabel) {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${calendarDate} - ${calendarLabel}</span>
            <div class="calendar-item-box">${calendarLabel}</div>
        `;
        calendarItems.appendChild(li);
    }
}


// Add task to the task list with a status dropdown (Same as before)
function addTask() {
    let taskInput = document.getElementById('task-input');
    let taskProgressInput = document.getElementById('task-progress');
    let taskList = document.getElementById('task-list');
    let task = taskInput.value.trim();
    let progress = parseInt(taskProgressInput.value);

    if (task && !isNaN(progress) && progress >= 0 && progress <= 100) {
        // Create task item with progress bar and dropdown
        let li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <span class="task-name">${task}</span>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${progress}%" data-progress="${progress}" data-task="${task}"></div>
                <div class="progress-text">${progress}%</div>
            </div>
            <select class="task-status-dropdown" onchange="updateTaskStatus(this, '${task}')">
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
            </select>
        `;
        taskList.appendChild(li);

        // Clear inputs
        taskInput.value = '';
        taskProgressInput.value = '';
    }
}

// Function to post a job listing and generate share links for social media
function postJob() {
    let jobTitle = document.getElementById('job-title').value.trim();
    let jobDescription = document.getElementById('job-description').value.trim();
    let jobLocation = document.getElementById('job-location').value.trim();
    let jobSalary = parseInt(document.getElementById('job-salary').value);
    let company = document.getElementById('company').value.trim();
    // Simple validation for job posting
    if (jobTitle && jobDescription && jobLocation && jobSalary > 0) {
        // Create the job post text
        let jobPostText = `Here is my job offer for ${company}! ${jobTitle} - ${jobDescription} | Location: ${jobLocation} | Salary: $${jobSalary}`;

        // Generate shareable links for Facebook and Twitter
        let facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobPostText)}`;
        let twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(jobPostText)}`;

        // Create a job post with sharing buttons
        let jobList = document.getElementById('job-listings');
        let li = document.createElement('li');
        li.classList.add('job-item');
        li.innerHTML = `
            <span class="job-title">${jobTitle}</span><br>
            <span class="job-description">${jobDescription}</span><br>
            <span class="job-location">Location: ${jobLocation}</span><br>
            <span class="job-salary">Salary: $${jobSalary}</span><br>
            <div class="social-share">
                <a href="${facebookShareLink}" target="_blank" class="nice-button">Share on Facebook</a>
                <a href="${twitterShareLink}" target="_blank" class="nice-button">Share on Twitter</a>
            </div>
        `;
        jobList.appendChild(li);

        // Clear input fields
        document.getElementById('job-title').value = '';
        document.getElementById('job-description').value = '';
        document.getElementById('job-location').value = '';
        document.getElementById('job-salary').value = '';
    } else {
        alert("Please fill in all the fields to post the job.");
    }
}

