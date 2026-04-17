
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initHeader, 100);
});

function initHeader() {
    const header = document.querySelector('.header');
    
    if (!header) {
        setTimeout(initHeader, 100);
        return;
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    const navLinks = document.querySelectorAll('.nav-menu a');
    const logo = document.querySelector('.logo');

    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = homeSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                navLinks.forEach(l => l.classList.remove('active'));
                const homeLink = document.querySelector('.nav-menu a[href="#home"]');
                if (homeLink) {
                    homeLink.classList.add('active');
                }
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = ['home', 'tournament', 'about', 'contacts'];
        const headerHeight = header.offsetHeight;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - headerHeight - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}