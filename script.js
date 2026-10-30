// Sanity Project Credentials
const SANITY_PROJECT_ID = '4z85b7tp';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-08-01';

// Base Fallback Data
const fallbackData = {
  settings: {
    brandName: 'Career Compass',
    tagline: 'Find your true north',
    email: 'serendipitysaranya@gmail.com',
    phone: '9051554125',
    whatsapp: '9051554125',
    address: 'Mumbai, Maharashtra, India',
    linkedin: 'http://www.linkedin.com/NehaRohra1311',
    instagram: 'https://instagram.com/careercompassservices',
    primaryCta: 'Explore Mentoria Packages',
    footerDescription: 'Empowering students and professionals to navigate educational pathways and discover their true north with dedicated guidance.',
    seoTitle: 'Career Compass - Find Your True North | Neha Rohra',
    seoDescription: 'Expert Career Guidance, Admission Guidance, and Workshops & Seminars by Neha Rohra. Find your true north with Mentoria packages.'
  },
  home: {
    heroHeading: 'Find Your True North in Education & Career',
    heroDescription: 'At Career Compass, we empower students, parents, and working professionals with deep industry insights, scientific assessments, and empathetic mentorship to discover their ideal career paths.',
    ctaText: 'Explore Mentoria Packages',
    secondaryCtaText: 'Book a Consultation'
  },
  founder: {
    name: 'Neha Rohra',
    title: 'SENIOR TALENT ACQUISITION & TALENT MANAGEMENT || COMPREHENSIVE HRBP ROLE || HR POLICIES AND AUDIT || HR LECTURER || CAREER COUNSELOR-PRENEUR',
    biography: `Neha Rohra brings 15 years of overall experience, with 12+ years in Human Resources, and a key focus on talent acquisition—particularly for premium roles. Her exposure to recruitment across industries and domains has given her a deep understanding of the skills, education pathways, and competencies required for different career goals. With experience supporting hiring decisions at both talent and organizational levels, she bridges what candidates bring with what roles truly need.

Building on her HRBP work, Neha Rohra has also handled grievance management, supporting fair, empathetic resolution processes aligned with workplace well-being and business needs. Alongside her HR responsibilities, she has served an NGO, providing counselling to individuals in distress through a healing, growth-focused approach. She has also worked as a visiting lecturer across colleges for HR and contributed to IELTS English coaching. With a blend of hiring, counselling, and teaching—plus experience with top MNCs such as EY (EY Parthenon) and Capgemini—career advisory becomes her next logical step, while she gradually moves toward entrepreneurship with purpose and meaningful impact.`,
    experience: '15 years of overall experience, with 12+ years in Human Resources and Talent Acquisition (EY Parthenon, Capgemini).',
    achievements: [
      'Senior Talent Acquisition & HRBP specialist at leading global MNCs including EY (EY Parthenon) and Capgemini',
      'Trained and guided hundreds of students and professionals in career planning and corporate readiness',
      'Experienced visiting lecturer across colleges for HR subjects and IELTS English coaching',
      'Dedicated NGO volunteer counsellor providing empathetic healing and growth-focused support'
    ],
    philosophy: 'Career advisory is not just about choosing a job—it is about discovering who you truly are, aligning your strengths with market needs, and walking your path with purpose and confidence.'
  },
  services: [
    {
      title: 'Career Guidance & Counselling',
      description: 'Comprehensive one-on-one career counselling sessions designed to help school students, college graduates, and working professionals gain absolute clarity on their career direction.',
      features: [
        'Personalized 1-on-1 counseling sessions',
        'Scientific psychometric aptitude & interest assessments',
        'Customized career roadmap & development report',
        'Education pathway recommendations'
      ]
    },
    {
      title: 'Admission Guidance & College Planning',
      description: 'Strategic counseling for university applications, college shortlisting, entrance exam strategy, and studying abroad to ensure students secure admissions in their dream institutions.',
      features: [
        'Top 100 college shortlisting & tier ranking (CAP-100)',
        'SOP brainstorming, review & essay guidance',
        'Domestic & overseas admission planning',
        'Course and specialization selection'
      ]
    },
    {
      title: 'Workshops & Seminars',
      description: 'High-impact, interactive workshops for schools, colleges, and corporate organizations covering career awareness, employability skills, HR readiness, and stress management.',
      features: [
        'School & college career awareness seminars',
        'Corporate readiness & interview preparation masterclasses',
        'Resume & LinkedIn profile optimization workshops',
        'Exam stress management & student wellbeing'
      ]
    }
  ],
  testimonials: [
    {
      clientName: 'Aarav Sharma',
      role: 'Class 11 Student (Science Stream)',
      quote: 'Neha ma\'am helped me gain clarity when I was completely confused about choosing between Engineering and Design. The psychometric report and counselling gave me clear direction.'
    },
    {
      clientName: 'Priya Mehta',
      role: 'Parent of Class 10 Student',
      quote: 'The session with Neha Rohra was an eye-opener. She explained career options with patience and understanding, making both me and my daughter confident in our stream selection.'
    },
    {
      clientName: 'Rohan Deshmukh',
      role: 'Working Professional (HR Analyst)',
      quote: 'Neha\'s corporate HR background from EY and Capgemini brings incredible practical value. Her interview prep and career roadmap guidance helped me transition into a senior role smoothly.'
    }
  ],
  packages: [
    // 8-9 Students
    {
      name: 'Discover',
      tier: 'STANDARD',
      category: '8-9 STUDENTS',
      price: '₹ 5,500',
      duration: '1 Year',
      sessions: '1 Session',
      imagePath: 'images/Mentoria1.png',
      features: [
        { text: 'Psychometric assessment to measure your interests', isIncluded: true },
        { text: '1 career counselling session with Mentoria\'s expert career coaches', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Invites to live webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with education pathways', isIncluded: false },
        { text: 'Guidance on studying abroad', isIncluded: false },
        { text: 'CV building during internships/graduation', isIncluded: false }
      ],
      order: 1,
      featured: false
    },
    {
      name: 'Discover plus+',
      tier: 'PREMIUM',
      category: '8-9 STUDENTS',
      price: '₹ 15,000',
      duration: 'Until Graduation',
      sessions: '8 Sessions (1/year)',
      imagePath: 'images/Mentoria1.png',
      features: [
        { text: 'Psychometric assessments to measure your interests, personality and abilities', isIncluded: true },
        { text: '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Invites to live webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with education pathways', isIncluded: true },
        { text: 'Guidance on studying abroad', isIncluded: true },
        { text: 'CV building during internships/graduation', isIncluded: true }
      ],
      order: 2,
      featured: true
    },
    // 10-12 Students
    {
      name: 'Achieve Online',
      tier: 'STANDARD',
      category: '10-12 STUDENTS',
      price: '₹ 5,999',
      duration: '1 Year',
      sessions: '1 Session',
      imagePath: 'images/Mentoria2.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '1 career counselling session', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Pre-recorded webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with education pathways', isIncluded: false },
        { text: 'Guidance on studying abroad', isIncluded: false },
        { text: 'CV reviews during internships/graduation', isIncluded: false }
      ],
      order: 3,
      featured: false
    },
    {
      name: 'Achieve Plus+',
      tier: 'PREMIUM',
      category: '10-12 STUDENTS',
      price: '₹ 10,599',
      duration: 'Until Graduation',
      sessions: '4 Sessions',
      imagePath: 'images/Mentoria2.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '4 career counselling sessions', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Attend live webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with education pathways', isIncluded: true },
        { text: 'Guidance on studying abroad', isIncluded: true },
        { text: 'CV reviews during internships/graduation', isIncluded: true }
      ],
      order: 4,
      featured: true
    },
    // College Graduates
    {
      name: 'Ascend Online',
      tier: 'STANDARD',
      category: 'COLLEGE GRADUATES',
      price: '₹ 6,499',
      duration: '1 Year',
      sessions: '1 Session',
      imagePath: 'images/Mentoria3.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '1 career counselling session', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Pre-recorded webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with information on certificate/online courses', isIncluded: false },
        { text: 'Guidance on studying abroad', isIncluded: false },
        { text: 'CV reviews for job application', isIncluded: false }
      ],
      order: 5,
      featured: false
    },
    {
      name: 'Ascend Plus+',
      tier: 'PREMIUM',
      category: 'COLLEGE GRADUATES',
      price: '₹ 10,599',
      duration: 'Until Job Placement',
      sessions: '3 Sessions',
      imagePath: 'images/Mentoria3.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '3 career counselling sessions', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Attend live webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with information on certificate/online courses', isIncluded: true },
        { text: 'Guidance on studying abroad', isIncluded: true },
        { text: 'CV reviews for job application', isIncluded: true }
      ],
      order: 6,
      featured: true
    },
    // Working Professionals
    {
      name: 'Ascend Online',
      tier: 'STANDARD',
      category: 'WORKING PROFESSIONALS',
      price: '₹ 6,499',
      duration: '1 Year',
      sessions: '1 Session',
      imagePath: 'images/Mentoria4.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '1 career counselling session', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Pre-recorded webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with information on certificate/online courses', isIncluded: false },
        { text: 'Guidance on studying abroad', isIncluded: false },
        { text: 'CV reviews for job application', isIncluded: false }
      ],
      order: 7,
      featured: false
    },
    {
      name: 'Ascend Plus+',
      tier: 'PREMIUM',
      category: 'WORKING PROFESSIONALS',
      price: '₹ 10,599',
      duration: 'Career Transition',
      sessions: '3 Sessions',
      imagePath: 'images/Mentoria4.png',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', isIncluded: true },
        { text: '3 career counselling sessions', isIncluded: true },
        { text: 'Lifetime access to Knowledge Gateway', isIncluded: true },
        { text: 'Attend live webinars by industry experts', isIncluded: true },
        { text: 'Customised reports after each session with information on certificate/online courses', isIncluded: true },
        { text: 'Guidance on studying abroad', isIncluded: true },
        { text: 'CV reviews for job application', isIncluded: true }
      ],
      order: 8,
      featured: true
    },
    // Custom Modules
    {
      name: 'Custom Plans Part 1: Career & Admission Boosters',
      tier: 'CUSTOM',
      category: 'CUSTOMISABLE PLANS',
      price: 'From ₹1,000',
      duration: 'Flexible Modules',
      sessions: 'Self-Paced / 1-on-1',
      description: 'Modular add-on services including Career Report, Helpline Access, CAP-100, and Exam Stress Management.',
      imagePath: 'images/Mentoria5.png',
      features: [
        { text: 'Career Report (₹1,500) - Detailed psychometric assessment report', isIncluded: true },
        { text: 'Career Report + Career Counselling (₹3,000) - Report + 1:1 expert consultation', isIncluded: true },
        { text: 'Knowledge Gateway + Helpline Access (₹1,100) - Lifetime portal & query support', isIncluded: true },
        { text: '1-to-1 Session with a Career Expert (₹3,500) - 1-hour deep-dive session', isIncluded: true },
        { text: 'College Admission Planning (₹3,000) - Resourceful planner for India & Abroad', isIncluded: true },
        { text: 'Exam Stress Management (₹1,000) - Mindset, revision schedule & stress tools', isIncluded: true },
        { text: 'College Admissions Planner - 100 (₹1,199) - Top 100 colleges ranked in 4 tiers', isIncluded: true }
      ],
      order: 9,
      featured: false
    },
    {
      name: 'Custom Plans Part 2: Placement & Profile Building',
      tier: 'CUSTOM',
      category: 'CUSTOMISABLE PLANS',
      price: 'From ₹2,000',
      duration: 'Flexible Modules',
      sessions: '1-on-1 Mentorship',
      description: 'Modular professional services including CV Building, LinkedIn Optimization, Interview Prep, and Study Abroad SOP guidance.',
      imagePath: 'images/Mentoria6.png',
      features: [
        { text: 'CV Building (₹2,000) - Crafted by senior HR & recruitment experts', isIncluded: true },
        { text: 'LinkedIn Profile Building (₹2,000) - Professional profile revamp for recruiter reach', isIncluded: true },
        { text: 'LinkedIn Profile + CV Building (₹3,500) - Complete professional branding package', isIncluded: true },
        { text: 'Job Application Strategy (₹4,000) - Target list, tracker & outreach blueprint', isIncluded: true },
        { text: 'Overseas Admission: SOP Brainstorm (₹3,000) - 1-hour structure & narrative session', isIncluded: true },
        { text: 'Overseas Admission: SOP Review (₹2,500) - Expert critique & polish for shortlist cut', isIncluded: true },
        { text: 'Interview Prep Session (₹2,000) - Mock interview & feedback from top HR leaders', isIncluded: true }
      ],
      order: 10,
      featured: true
    }
  ]
};

// Global state
let currentData = fallbackData;
let currentAudience = '8-9 STUDENTS';
let currentMainTab = 'plans';

// Helper to resolve Sanity Image asset references to CDN URLs
function resolveSanityImageUrl(imageObj, fallbackUrl) {
  if (!imageObj) return fallbackUrl;
  if (typeof imageObj === 'string') return imageObj;
  
  // Direct asset object with url
  if (imageObj.asset && imageObj.asset.url) {
    return imageObj.asset.url;
  }
  
  // Asset reference: image-{hash}-{width}x{height}-{ext}
  const ref = imageObj.asset?._ref || imageObj._ref;
  if (ref && ref.startsWith('image-')) {
    const parts = ref.split('-');
    if (parts.length >= 4) {
      const id = parts[1];
      const dimensions = parts[2];
      const format = parts[3];
      return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dimensions}.${format}`;
    }
  }
  
  return fallbackUrl;
}

// Render Mentoria Package Cards
function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;

  const filtered = currentData.packages.filter(p => p.category === currentAudience);
  
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:span 2; color:#64748B;">No packages found for this category.</p>';
    return;
  }

  grid.innerHTML = filtered.map(pkg => {
    const isPremium = pkg.tier === 'PREMIUM';
    const bannerUrl = pkg.image ? resolveSanityImageUrl(pkg.image, pkg.imagePath || 'images/Mentoria1.png') : (pkg.imagePath || 'images/Mentoria1.png');

    return `
      <article class="package-card ${isPremium ? 'premium' : ''}">
        ${pkg.featured ? '<div class="featured-badge">★ Most Popular</div>' : ''}
        <img src="${bannerUrl}" alt="${pkg.name}" class="package-banner-image">
        <div class="package-body">
          <span class="package-tier-label">${pkg.tier || (isPremium ? 'PREMIUM' : 'STANDARD')}</span>
          <h3 class="package-name">${pkg.name}</h3>
          <div class="package-price">${pkg.price}</div>
          <div class="package-meta">${pkg.sessions ? pkg.sessions + ' • ' : ''}${pkg.duration || ''}</div>
          <ul class="package-features">
            ${(pkg.features || []).map(f => {
              const text = typeof f === 'string' ? f : f.text;
              const isInc = typeof f === 'string' ? true : (f.isIncluded !== false);
              return `
                <li class="package-feature ${isInc ? 'included' : 'excluded'}">
                  <span class="feat-icon">${isInc ? '✓' : '✕'}</span>
                  <span>${text}</span>
                </li>
              `;
            }).join('')}
          </ul>
          <a href="#contact" class="package-cta ${isPremium ? 'primary' : 'outline'}">Enquire for ${pkg.name}</a>
        </div>
      </article>
    `;
  }).join('');
}

// Render Custom Modular Plans (Mentoria5 & Mentoria6)
function renderCustomPlans() {
  const grid = document.getElementById('customPlansGrid');
  if (!grid) return;

  const customModules = currentData.packages.filter(p => p.category === 'CUSTOMISABLE PLANS' || p.tier === 'CUSTOM');
  
  if (customModules.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:span 2; color:#64748B;">Custom plans currently being updated.</p>';
    return;
  }

  grid.innerHTML = customModules.map(mod => {
    const bannerUrl = mod.image ? resolveSanityImageUrl(mod.image, mod.imagePath || 'images/Mentoria5.png') : (mod.imagePath || 'images/Mentoria5.png');

    return `
      <div class="custom-module-card">
        <img src="${bannerUrl}" alt="${mod.name}" class="custom-module-banner">
        <div class="custom-module-content">
          <h3 class="custom-module-title">${mod.name}</h3>
          <p class="custom-module-desc">${mod.description || 'Modular specialized guidance designed to address your exact career goals.'}</p>
          <ul class="custom-module-items">
            ${(mod.features || []).map(item => {
              const text = typeof item === 'string' ? item : item.text;
              return `
                <li class="custom-module-item">
                  <span>✦</span>
                  <div>${text}</div>
                </li>
              `;
            }).join('')}
          </ul>
          <a href="#contact" class="btn-primary" style="width: 100%; margin-top: 1.5rem; text-align: center;">Customise This Module</a>
        </div>
      </div>
    `;
  }).join('');
}

// Tab Switching Functions
function switchMainTab(tab) {
  currentMainTab = tab;
  const plansBtn = document.getElementById('plansTabBtn');
  const customBtn = document.getElementById('customTabBtn');
  const plansWrap = document.getElementById('plansSubTabsWrap');
  const customWrap = document.getElementById('customPlansContainer');

  if (tab === 'plans') {
    plansBtn.classList.add('active');
    customBtn.classList.remove('active');
    plansWrap.style.display = 'block';
    customWrap.classList.remove('active');
  } else {
    customBtn.classList.add('active');
    plansBtn.classList.remove('active');
    plansWrap.style.display = 'none';
    customWrap.classList.add('active');
    renderCustomPlans();
  }
}

function switchAudience(audience) {
  currentAudience = audience;
  const tabs = document.querySelectorAll('.audience-tab');
  tabs.forEach(tab => {
    if (tab.textContent.trim() === audience) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  renderPackages();
}

// Update DOM with full data
function updateDOM(data) {
  currentData = data;

  // 1. Settings & Branding
  const s = data.settings || {};
  if (s.brandName) {
    document.title = s.seoTitle || `${s.brandName} - Find Your True North | Neha Rohra`;
    document.getElementById('navBrandName').textContent = s.brandName;
    document.getElementById('footerBrandName').textContent = s.brandName;
  }
  if (s.tagline) {
    document.getElementById('navBrandTagline').textContent = s.tagline;
    document.getElementById('footerBrandTagline').textContent = s.tagline;
  }
  if (s.logo) {
    const logoUrl = resolveSanityImageUrl(s.logo, 'images/logo.jpeg');
    document.getElementById('navLogo').src = logoUrl;
    document.getElementById('footerLogo').src = logoUrl;
  }
  if (s.footerDescription) {
    document.getElementById('footerDescription').textContent = s.footerDescription;
  }
  if (s.email) {
    document.getElementById('contactEmail').href = `mailto:${s.email}`;
    document.getElementById('contactEmail').textContent = s.email;
    document.getElementById('footerEmail').textContent = `Email: ${s.email}`;
  }
  if (s.phone) {
    document.getElementById('contactPhone').href = `tel:+91${s.phone.replace(/[^0-9]/g, '')}`;
    document.getElementById('contactPhone').textContent = `+91 ${s.phone}`;
    document.getElementById('footerPhone').textContent = `Phone: +91 ${s.phone}`;
  }
  if (s.address) {
    document.getElementById('contactAddress').textContent = s.address;
    document.getElementById('footerAddress').textContent = `Location: ${s.address}`;
  }
  if (s.linkedin) {
    document.getElementById('socialLinkedin').href = s.linkedin;
    document.getElementById('footerLinkedin').href = s.linkedin;
  }
  if (s.instagram) {
    document.getElementById('socialInstagram').href = s.instagram;
    document.getElementById('footerInstagram').href = s.instagram;
  }
  if (s.whatsapp) {
    document.getElementById('socialWhatsapp').href = `https://wa.me/91${s.whatsapp.replace(/[^0-9]/g, '')}`;
  }

  // 2. Home Section
  const h = data.home || {};
  if (h.heroHeading) document.getElementById('heroHeading').textContent = h.heroHeading;
  if (h.heroDescription) document.getElementById('heroDescription').textContent = h.heroDescription;
  if (h.ctaText) document.getElementById('heroCtaText').textContent = h.ctaText;

  // 3. Founder Details
  const f = data.founder || {};
  if (f.name) document.getElementById('founderName').textContent = f.name;
  if (f.title) document.getElementById('founderTitle').textContent = f.title;
  if (f.biography) document.getElementById('founderBio').textContent = f.biography;
  if (f.philosophy) document.getElementById('founderPhilosophy').textContent = `"${f.philosophy}"`;
  if (f.photo) {
    const founderPhotoUrl = resolveSanityImageUrl(f.photo, 'images/founder.jpeg');
    document.getElementById('founderPhoto').src = founderPhotoUrl;
    document.getElementById('heroFounderAvatar').src = founderPhotoUrl;
  }

  // 4. Render Packages & Services
  renderPackages();
  renderCustomPlans();
}

// Fetch live content directly from Sanity Studio API
async function fetchSanityContent() {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "home": *[_type == "homePage"][0],
    "founder": *[_type == "founder"][0],
    "services": *[_type == "service"] | order(order asc),
    "testimonials": *[_type == "testimonial"] | order(order asc),
    "packages": *[_type == "mentoriaPackage"] | order(order asc)
  }`;

  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();

    if (json.result) {
      console.log('Successfully fetched live data from Sanity:', json.result);
      
      const mergedData = {
        settings: json.result.settings || fallbackData.settings,
        home: json.result.home || fallbackData.home,
        founder: json.result.founder || fallbackData.founder,
        services: (json.result.services && json.result.services.length > 0) ? json.result.services : fallbackData.services,
        testimonials: (json.result.testimonials && json.result.testimonials.length > 0) ? json.result.testimonials : fallbackData.testimonials,
        packages: (json.result.packages && json.result.packages.length > 0) ? json.result.packages : fallbackData.packages
      };

      updateDOM(mergedData);
    }
  } catch (error) {
    console.warn('Live Sanity fetch encountered an issue, running with robust fallback data:', error);
    updateDOM(fallbackData);
  }
}

// Form Submission Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccessMessage');

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  setTimeout(() => {
    submitBtn.style.display = 'none';
    successMsg.style.display = 'block';
  }, 600);
}

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  initMobileMenu();
  updateDOM(fallbackData);
  fetchSanityContent();
});
