        // Organizational data from the Excel sheet
        const orgData = [
            {
                businessLine: "Cloud Services",
                department: "Multi-Cloud & Next-Gen Services",
                director: "Khalied Alromih",
                section: "Next-Gen Services",
                manager: "Mutasim Shajrawi"
            },
            {
                businessLine: "Cloud Services",
                department: "Multi-Cloud & Next-Gen Services",
                director: "Khalied Alromih",
                section: "Multi-Cloud Services",
                manager: "Mohammed Alshehri"
            },
            {
                businessLine: "Cloud Services",
                department: "Multi-Cloud & Next-Gen Services",
                director: "Khalied Alromih",
                section: "Cloud App Modernization Services",
                manager: "Yasser Bakhaigy"
            },
            {
                businessLine: "Data Centers & Integrated Solutions",
                department: "AI, Data & Emerging Tech",
                director: "Mohammed Sharaf",
                section: "Test3",
                manager: "Test6"
            },
            {
                businessLine: "Data Centers & Integrated Solutions",
                department: "CX & Workplace incubation",
                director: "Test1",
                section: "Test4",
                manager: "Test7"
            },
            {
                businessLine: "Data Centers & Integrated Solutions",
                department: "Data Centers Enablement",
                director: "Test2",
                section: "Test5",
                manager: "Test8"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "DI Solutions Specialists",
                director: "Emad Alshehri",
                section: "DI Technical Lead Office",
                manager: "Test9"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "DI Solutions Specialists",
                director: "Emad Alshehri",
                section: "DI solutions design Office",
                manager: "Test10"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "DI Project Delivery",
                director: "Faisal Alarfaj",
                section: "DI project delivery Enablement",
                manager: "Test11"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "DI Project Delivery",
                director: "Faisal Alarfaj",
                section: "DI Project Delivery 1",
                manager: "Abdulaziz Alturki"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "DI Project Delivery",
                director: "Faisal Alarfaj",
                section: "DI project delivery 2",
                manager: "Test12"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "Digital Integrated Solutions",
                director: "Ryan Alkhunaini",
                section: "Video Intelligence & Physical Security",
                manager: "Ahmed Assiri"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "Digital Integrated Solutions",
                director: "Ryan Alkhunaini",
                section: "Enterprise Networks & systems",
                manager: "Hamdy Elrefaey"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "Security Systems Integration",
                director: "Adel Althonayan",
                section: "Cybersecurity Infrastructure & solutions integration",
                manager: "Hani Abd-elshafei"
            },
            {
                businessLine: "Digital Infrastructure",
                department: "Active Digital Infrastructure",
                director: "Nafea Alfedhliah",
                section: "Cybersecurity consultancy Services",
                manager: "Mohamed Breik"
            }
        ];

        // Get unique business lines
        function getBusinessLines() {
            return [...new Set(orgData.map(item => item.businessLine))];
        }

        // Get departments for a specific business line
        function getDepartments(businessLine) {
            const departments = orgData
                .filter(item => item.businessLine === businessLine)
                .map(item => item.department);
            
            return [...new Set(departments)]; // Return unique departments
        }

        // Get sections for a specific department
        function getSections(department) {
            const sections = orgData
                .filter(item => item.department === department)
                .map(item => item.section);
            
            return [...new Set(sections)]; // Return unique sections
        }

        // Update department dropdown based on selected business line
        function updateDepartments() {
            const businessLineSelect = document.getElementById('businessLine');
            const departmentSelect = document.getElementById('department');
            const sectionSelect = document.getElementById('section');
            
            const selectedBusinessLine = businessLineSelect.value;
            
            // Reset department and section
            departmentSelect.innerHTML = '<option value="">Select Department</option>';
            sectionSelect.innerHTML = '<option value="">Select Department first</option>';
            sectionSelect.disabled = true;
            
            if (selectedBusinessLine) {
                // Enable department dropdown
                departmentSelect.disabled = false;
                
                // Add options for the selected business line
                const departments = getDepartments(selectedBusinessLine);
                departments.forEach(dept => {
                    const option = document.createElement('option');
                    option.value = dept;
                    option.textContent = dept;
                    departmentSelect.appendChild(option);
                });
                
                
            } else {
                // Disable department dropdown
                departmentSelect.disabled = true;
                departmentSelect.innerHTML = '<option value="">Select Business Line first</option>';
            }
        }

        // Update section dropdown based on selected department
        function updateSections() {
            const departmentSelect = document.getElementById('department');
            const sectionSelect = document.getElementById('section');
            
            const selectedDepartment = departmentSelect.value;
            
            // Reset section
            sectionSelect.innerHTML = '<option value="">Select Section</option>';
            
            if (selectedDepartment) {
                // Enable section dropdown
                sectionSelect.disabled = false;
                
                // Add options for the selected department
                const sections = getSections(selectedDepartment);
                sections.forEach(section => {
                    const option = document.createElement('option');
                    option.value = section;
                    option.textContent = section;
                    sectionSelect.appendChild(option);
                });
                
                
            } else {
                // Disable section dropdown
                sectionSelect.disabled = true;
                sectionSelect.innerHTML = '<option value="">Select Department first</option>';
            }
        }