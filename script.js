// script.js
// Check if user is logged in and load their data
document.addEventListener('DOMContentLoaded', function() {
    checkUserStatus();
    loadUserStats();
    setupMobileMenu();
});

 function setupMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const userSection = document.getElementById('userSection');
        
        if (toggle && mobileMenu) {
            toggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                toggle.classList.toggle('active');
                
                // Copy user section buttons to mobile menu when opened
                if (mobileMenu.classList.contains('active')) {
                    const existingButtons = mobileMenu.querySelectorAll('.nav-btn, .user-profile');
                    existingButtons.forEach(btn => btn.remove());
                    
                    if (userSection.children.length > 0) {
                        const buttons = Array.from(userSection.children);
                        buttons.forEach(button => {
                            const clone = button.cloneNode(true);
                            mobileMenu.appendChild(clone);
                        });
                    }
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!event.target.closest('#mainNav') && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
    }
    
    function checkUserStatus() {
        const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        const userName = localStorage.getItem('userName') || sessionStorage.getItem('userName');
        const userSection = document.getElementById('userSection');
        
        if (isLoggedIn && userName) {
            // User is logged in
            userSection.innerHTML = `
                <button onclick="viewMyDashboard()" class="nav-btn">My Dashboard</button>
                <div class="user-profile">
                    <div class="user-avatar">
                        ${userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <span>${userName.split(' ')[0]}</span>
                    <button onclick="logout()" class="logout-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </button>
                </div>
            `;
            
            // Show quick stats section
            document.getElementById('quickStats').style.display = 'block';
            document.getElementById('userName').textContent = userName.split(' ')[0];
        } else {
            // User is not logged in
            userSection.innerHTML = `
                <button onclick="login()" class="nav-btn">Sign In</button>
                <button onclick="startNewAssessment()" class="nav-btn primary">Get Started</button>
            `;
        }
    }
    
function loadUserStats() {
    const history = JSON.parse(localStorage.getItem('stcAssessmentHistory') || '[]');
    
    if (history.length > 0) {
        // Calculate stats
        const completedCount = history.length;
        const techCount = history.reduce((sum, h) => sum + (h.totalVendors || 0), 0);
        const certCount = history.reduce((sum, h) => sum + (h.totalCertifications || 0), 0);
        
        // Update display
        document.getElementById('completedCount').textContent = completedCount;
        document.getElementById('techCount').textContent = techCount;
        
        // Simulate other stats
        document.getElementById('pendingCount').textContent = Math.floor(Math.random() * 3);
        document.getElementById('expiringCount').textContent = Math.floor(Math.random() * 5);
    }
}

function showStepDetails(step) {
    const details = {
        1: {
            title: 'Step 1: Personal Information',
            description: 'Provide your basic information including name, email, years of experience, and organizational structure.',
            items: ['Full Name (auto-populated)', 'Email Address (auto-populated)', 'Years of Experience', 'Business Line, Department & Section']
        },
        2: {
            title: 'Step 2: Technology Domain',
            description: 'Select your primary technology domain from our comprehensive list.',
            items: ['Cloud & Edge Computing', 'AI & Machine Learning', 'Data & Analytics', 'Cybersecurity', 'Infrastructure', 'DevOps & Automation']
        },
        3: {
            title: 'Step 3: Sub-Category Selection',
            description: 'Choose specific sub-categories within your selected domain.',
            items: ['Filtered sub-categories based on domain', 'Multiple vendor technologies', 'Specialized areas of expertise']
        },
        4: {
            title: 'Step 4: Service Pillars',
            description: 'Select the service pillars you provide for the chosen technologies.',
            items: ['Design & Architecture', 'Consulting & Advisory', 'Implementation & Deployment', 'Integration & Migration']
        },
        5: {
            title: 'Step 5: Capability Assessment',
            description: 'Rate your expertise level for each technology-service combination.',
            items: ['Expert Level (L3)', 'Senior Level (L2)', 'Junior Level (L1)', 'No Capability', 'Project count validation']
        },
        6: {
            title: 'Step 6: Certifications',
            description: 'Add relevant professional certifications for the assessed technologies.',
            items: ['Certification names', 'Start and expiry dates', 'Certification IDs', 'Multiple certifications support']
        },
        7: {
            title: 'Step 7: Review & Submit',
            description: 'Review all information and submit your assessment.',
            items: ['Complete assessment summary', 'Export options (JSON, CSV, Excel)', 'Edit capabilities', 'Submit to system']
        }
    };
    
    const stepInfo = details[step];
    const detailsDiv = document.getElementById('stepDetails');
    
    detailsDiv.innerHTML = `
        <h3>${stepInfo.title}</h3>
        <p>${stepInfo.description}</p>
        <ul>
            ${stepInfo.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    detailsDiv.style.display = 'block';
    detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Navigation functions
function startNewAssessment() {
    sessionStorage.clear();
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step1';
}

function viewMyDashboard() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/dashboard';
}

function viewAdminDashboard() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/Admin-Dashboard';
}

function login() {
    // Redirect to login page
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/login';
}

function logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userName');
    sessionStorage.clear();
    location.reload();
}

function startNow() {
    startNewAssessment();
}

function learnMore() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Quick action functions
function viewCompletedAssessments() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/dashboard#assessments';
}

function viewPendingUpdates() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/dashboard#pending';
}

function viewExpiringCerts() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/dashboard#certifications';
}

function addMoreTech() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step2';
}

function continueLastAssessment() {
    // Check if there's a saved assessment in progress
    const savedData = sessionStorage.getItem('assessmentData');
    if (savedData) {
        // Determine which step they were on
        const data = JSON.parse(savedData);
        if (data.domain && !data.subCategory) {
            window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step3';
        } else if (data.subCategory && !data.pillars) {
            window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step4';
        } else if (data.pillars && !data.capabilityRatings) {
            window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step5';
        } else {
            window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step6';
        }
    } else {
        startNewAssessment();
    }
}

function updateCertifications() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step6';
}

function viewReports() {
    window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/dashboard#reports';
}

function exportData() {
    const history = JSON.parse(localStorage.getItem('stcAssessmentHistory') || '[]');
    const dataStr = JSON.stringify(history, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'my_assessments.json');
    linkElement.click();
}