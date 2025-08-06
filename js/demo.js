// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Resume download function
function downloadResume() {
    const resumeUrl = 'assets/Swapnil_karpe_resume.pdf';
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Swapnil_Karpe_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Show download toast
    showToast('Resume downloaded successfully!', 'success');
}

// Toast notification function
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center ${getToastClass(type)}`;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function getToastClass(type) {
    const classes = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white'
    };
    return classes[type] || classes.info;
}

// Project screenshots data and modal functions
const projectScreenshots = {
    'resume': [
        { 
            url: 'assets/screenshots/resume/home.png',
            caption: 'Home Page'
        },
        { 
            url: 'assets/screenshots/resume/register.png',
            caption: 'Registration Page'
        },
        { 
            url: 'assets/screenshots/resume/about.png',
            caption: 'About Page'
        },
         { 
            url: 'assets/screenshots/resume/mail_registeration.png',
            caption: 'Mail Page'
        },
        { 
            url: 'assets/screenshots/resume/login.png',
            caption: 'Login Page'
        },


          { 
            url: 'assets/screenshots/resume/admin/addjob.png',
            caption: 'Admin -  Add Job Page'
        },
        { 
            url: 'assets/screenshots/resume/admin/joblist.png',
            caption: 'Admin - Job list Page'
        },
         { 
            url: 'assets/screenshots/resume/admin/Application.png',
            caption: 'Admin - Application Page'
        },
        { 
            url: 'assets/screenshots/resume/admin/managejob.png',
            caption: 'Admin - Manage Job Page'
        },






        { 
            url: 'assets/screenshots/resume/User/1Joblist.png',
            caption: 'User - Job List Page'
        },
         { 
            url: 'assets/screenshots/resume/User/2submitjob.png',
            caption: 'User - Apply Job Page'
        },
         { 
            url: 'assets/screenshots/resume/User/3myapplication.png',
            caption: 'User - My Job Application'
        },
         { 
            url: 'assets/screenshots/resume/User/4Myprofile.png',
            caption: 'User - My Profile Page'
        },
          { 
            url: 'assets/screenshots/resume/User/5editeprofile.png',
            caption: 'User - Update Profile Page'
        },
         { 
            url: 'assets/screenshots/resume/User/6chnagepass.png',
            caption: 'User - Change Password Page'
        },
         { 
            url: 'assets/screenshots/resume/User/7otp.png',
            caption: 'User - OTP Page'
        },
         { 
            url: 'assets/screenshots/resume/User/8verify_pass.png',
            caption: 'User - Verify Password Page'
        },
         { 
            url: 'assets/screenshots/resume/User/9passotp.png',
            caption: 'User - OTP Page'
        },
         { 
            url: 'assets/screenshots/resume/User/applyjob.png',
            caption: 'User - Mail Page'
        },
         { 
            url: 'assets/screenshots/resume/User/applyjobs.png',
            caption: 'User - Mail Page'
        },
      
      
       
        
    ],
    
    'learning': [
        {
            url: 'assets/screenshots/elerning/Home.png',
            caption: 'E-Learning Homepage'
        },

        {
            url: 'assets/screenshots/elerning/about.png',
            caption: 'About Page'
        },
        {
            url: 'assets/screenshots/elerning/contact.png',
            caption: 'Contact Page'
        },
        {
            url: 'assets/screenshots/elerning/register.png',
            caption: 'Register Page'
        },
        {
            url: 'assets/screenshots/elerning/login.png',
            caption: 'Login Page'
        },




        {
            url: 'assets/screenshots/elerning/dash/1dashbord.png',
            caption: 'Dashboard Page'
        },

        {
            url: 'assets/screenshots/elerning/dash/2addclient.png',
            caption: 'Add Client Page'
        },
        {
            url: 'assets/screenshots/elerning/dash/3register.png',
            caption: 'Registration Page'
        },
        {
            url: 'assets/screenshots/elerning/dash/4table.png',
            caption: 'Display All Register Student Page'
        },
        {
            url: 'assets/screenshots/elerning/dash/5details.png',
            caption: 'Clients Details'
        },
       
       
    ]
};

function showScreenshots(projectId) {
    const modal = document.getElementById('screenshotModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = '<h4 class="text-lg font-semibold mb-4">' + projectId.replace('-', ' ') + ' Screenshots</h4><div class="screenshot-grid"></div>';
    const grid = content.querySelector('.screenshot-grid');
    
    projectScreenshots[projectId].forEach(item => {
        const screenshotItem = document.createElement('div');
        screenshotItem.className = 'screenshot-item bg-gray-50 rounded-lg overflow-hidden';
        screenshotItem.innerHTML = `
            <img src="${item.url}" alt="${item.caption}" class="w-full h-auto">
            <div class="p-3 bg-white">
                <p class="text-sm text-gray-600">${item.caption}</p>
            </div>
        `;
        grid.appendChild(screenshotItem);
    });
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('screenshotModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Certificate PDF viewer functions
// Enhanced Certificate Viewer
const certificateData = {
    'java': {
        url: 'assets/certificates/java.pdf',
        title: 'Java Internship Certificate',
        description: 'Practical Java training with real-world project experience'
    },
    'python': {
        url: 'assets/certificates/python.pdf',
        title: 'Python Programming Certificate',
        description: 'Covered Python basics, OOP concepts and hands-on scripting'
    },
    'fullstack': {
        url: 'assets/certificates/java.pdf',
        title: 'Java Certificate',
        description: 'Learned Java OOPs concepts with code implementation'
    },
    'drf': {
        url: 'assets/certificates/javaScript.pdf',
        title: 'JavaScript Certificate',
        description: 'Mastered JS fundamentals and dynamic DOM manipulation'
    },
    'htmlcss': {
        url: 'assets/certificates/Html & css.pdf',
        title: 'HTML & CSS Certificate',
        description: 'Built responsive web pages using HTML5 and CSS3'
    },
    'git': {
        url: 'assets/certificates/Git & Github Course.pdf',
        title: 'Git & GitHub Certificate',
        description: 'Version control, commits, branching, and repo management'
    },
    'mysql': {
        url: 'assets/certificates/mysql.pdf',
        title: 'MySQL Certificate',
        description: 'Database management and SQL queries'
    }
};

function viewCertificate(certId) {
    const cert = certificateData[certId];
    if (cert) {
        const modal = document.getElementById('pdfModal');
        const content = document.getElementById('pdfModalContent');
        
        content.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold">${cert.title}</h3>
                <button onclick="closePdfModal()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <p class="mb-4 text-gray-600">${cert.description}</p>
            <div class="flex-1">
                <iframe src="${cert.url}" class="w-full h-full" frameborder="0"></iframe>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        alert("Certificate not found.");
    }
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
// EmailJS initialization and form handling
(function() {
    emailjs.init("x8TzvnpQICDz77fJk"); // Replace with your actual key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    
    emailjs.sendForm("service_49ja7g6", "template_od17p2p", this)
        .then(function(response) {
            showToast('Message sent successfully!', 'success');
            document.getElementById("contactForm").reset();
        }, function(error) {
            showToast('Failed to send message. Please try again.', 'error');
            console.error("Email sending failed:", error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const screenshotModal = document.getElementById('screenshotModal');
    const pdfModal = document.getElementById('pdfModal');
    
    if (event.target === screenshotModal) {
        closeModal();
    }
    
    if (event.target === pdfModal) {
        closePdfModal();
    }
});