  // Extract domain data from the Excel sheet
        const excelDomainsData = [
            { 
                Title: 'AI, Data & Analytics Services', 
                DomainCode: 'AI', 
                Description: 'Enables smarter decisions by using AI, machine learning, and analytics to turn data into insights',
                TechCount: '12+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>`
            },
            { 
                Title: 'Cloud & Edge Services', 
                DomainCode: 'CLD', 
                Description: 'Delivers scalable computing through public, private, hybrid, and edge cloud solutions',
                TechCount: '15+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>`
            },
            { 
                Title: 'Collaboration & Digital Workplace Services', 
                DomainCode: 'COL', 
                Description: 'Enhances teamwork and productivity with digital communication and collaboration tools',
                TechCount: '10+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 极 0 0 1 0 7.75"></path>
                </svg>`
            },
            { 
                Title: 'Cybersecurity & Risk Services', 
                DomainCode: 'SEC', 
                Description: 'Protects data, applications, and infrastructure through security, compliance, and risk management',
                TechCount: '20+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 极 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>`
            },
            { 
                Title: 'Data Center & Infrastructure Services', 
                DomainCode: 'DCI', 
                Description: 'Provides reliable colocation, hosting, storage, and IT infrastructure to support enterprise workloads',
                TechCount: '14+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>`
            },
            { 
                Title: 'Networking & Connectivity Services', 
                DomainCode: 'NET', 
                Description: 'Ensures fast and secure data transfer with enterprise networking, 5G, and connectivity solutions',
                TechCount: '16+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                </svg>`
            },
            { 
                Title: 'Physical Security & Safety Services', 
                DomainCode: 'PSS', 
                Description: 'Safeguards people and assets through surveillance, access control, and safety systems',
                TechCount: '8+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                </svg>`
            },
            { 
                Title: 'Application & Modernization Services', 
                DomainCode: 'AMS', 
                Description: 'Modernizes and develops applications with cloud-native platforms, APIs, and microservices',
                TechCount: '12+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x极 1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>`
            },
            { 
                Title: 'Business Continuity & Resilience Services', 
                DomainCode: 'BCR', 
                Description: 'Keeps businesses running during disruptions with backup, disaster recovery, and resilience planning',
                TechCount: '6+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                </svg>`
            },
            { 
                Title: 'Managed IT & Professional Services', 
                DomainCode: 'MPS', 
                Description: 'Optimizes IT operations through managed services, consulting, and professional expertise',
                TechCount: '10+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                </svg>`
            },
            { 
                Title: 'Emerging Technology Services', 
                DomainCode: 'ETS', 
                Description: 'Drives innovation with IoT, blockchain, AR/VR, quantum computing, and other new technologies',
                TechCount: '8+ Technologies',
                Icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>`
            }
        ];

        let selectedDomain = null;
        let sessionData = {};

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Step 2 - Technology Domain page initialized');
            displayDomains();
            
            // Load any previously saved data
            const savedData = sessionStorage.getItem('assessmentData');
            if (savedData) {
                sessionData = JSON.parse(savedData);
                if (sessionData.domain) {
                    // Find and select the previously selected domain
                    const domainCards = document.querySelectorAll('.domain-card');
                    domainCards.forEach(card => {
                        if (card.querySelector('h3').textContent === sessionData.domain) {
                            card.click();
                        }
                    });
                }
            }
        });

        // Display enhanced domain cards
        function displayDomains() {
            const grid = document.getElementById('domainGrid');
            grid.innerHTML = '';
            
            excelDomainsData.forEach((domain, index) => {
                const card = document.createElement('div');
                card.className = 'domain-card';
                
                // Check if this domain was previously selected
                if (sessionData.domain === domain.Title) {
                    card.classList.add('selected');
                    showSelectedSummary(domain);
                    enableNextButton();
                }
                
                card.innerHTML = `
                    <div class="domain-content">
                        <div class="domain-icon">
                            ${domain.Icon}
                        </div>
                        <div class="domain-info">
                            <h3>${domain.Title}</h3>
                            <p>${domain.Description}</p>
                            <span class="tech-count">${domain.TechCount}</span>
                        </div>
                    </div>
                `;
                
                card.onclick = () => selectDomain(domain, card);
                grid.appendChild(card);
            });
        }

        // Handle domain selection with enhanced feedback
        function selectDomain(domain, cardElement) {
            // Remove previous selection
            document.querySelectorAll('.domain-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selection to clicked card
            cardElement.classList.add('selected');
            selectedDomain = domain.Title;
            
            // Save to session
            sessionData.domain = domain.Title;
            sessionData.domainCode = domain.DomainCode;
            sessionStorage.setItem('assessmentData', JSON.stringify(sessionData));
            
            // Show summary
            showSelectedSummary(domain);
            
            console.log('Domain selected:', domain);
            enableNextButton();
        }

        // Show selected domain summary
        function showSelectedSummary(domain) {
            const summary = document.getElementById('selectedSummary');
            const domainName = document.getElementById('selectedDomainName');
            
            domainName.textContent = `${domain.Title} (${domain.TechCount})`;
            summary.style.display = 'flex';
        }

        // Enable next button with animation
        function enableNextButton() {
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.disabled = false;
            nextBtn.classList.add('enabled');
        }

        // Navigation
        function goBack() {
            window.location.href = '../step1.html';
        }

        function goNext() {
            if (!selectedDomain) {
                // Show error notification
                const errorDiv = document.createElement('div');
                errorDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #ef4444; color: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 4px 20px rgba(239,68,68,0.3); z-index: 9999; animation: slideInRight 0.5s';
                errorDiv.textContent = 'Please select a technology domain to continue';
                document.body.appendChild(errorDiv);
                
                setTimeout(() => {
                    errorDiv.style.animation = 'slideOutRight 0.5s';
                    setTimeout(() => document.body.removeChild(errorDiv), 500);
                }, 3000);
                
                return;
            }
            
            console.log('Proceeding to Step 3 with domain:', selectedDomain);
            window.location.href = 'https://technology-ps-capabilities.powerappsportals.com/step3';
        }