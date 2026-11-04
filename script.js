// Sanity Project Credentials
const SANITY_PROJECT_ID = '4z85b7tp';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-08-01';

// Base Fallback Data
const fallbackData = {
  settings: {
    brandName: 'Career Compass',
    tagline: 'Find your true north',
    email: 'neharohra1311@gmail.com',
    phone: '9051554125',
    whatsapp: '9051554125',
    address: 'Bengaluru & Kolkata, India',
    linkedin: 'https://www.linkedin.com/in/neharohra1311?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
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
    title: 'CAREER COUNSELOR-PRENEUR / SENIOR TALENT ACQUISITION & TALENT MANAGEMENT / COMPREHENSIVE HRBP ROLE / HR POLICIES AND AUDIT / HR LECTURER',
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
      clientName: 'Student & Mentee',
      role: 'Career Clarity Session',
      quote: "My experience with the session was very meaningful. The entire process was so smooth and thoughtfully guided. The clarity and perspective I gained helped me explore my career options with much confidence and make more informed decisions about my future.\n\nThank you so much ma'am"
    },
    {
      clientName: 'Aarav Sharma',
      role: 'Class 11 Student (Science Stream)',
      quote: 'Neha ma\'am helped me gain clarity when I was completely confused about choosing between Engineering and Design. The psychometric report and counselling gave me clear direction.'
    },
    {
      clientName: 'Priya Mehta',
      role: 'Parent of Class 10 Student',
      quote: 'The session with Neha Rohra was an eye-opener. She explained career options with patience and understanding, making both me and my daughter confident in our stream selection.'
    }
  ],
  plans: [
    // 8-9 Students
    {
      segment: '8-9 STUDENTS',
      standardTitle: 'Discover',
      standardPrice: '5,500',
      standardFeatures: [
        'Psychometric assessment to measure your interests',
        '1 career counselling session with Mentoria\'s expert career coaches',
        'Lifetime access to Knowledge Gateway',
        'Invites to live webinars by industry experts'
      ],
      standardExcluded: [
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV building during internships/graduation'
      ],
      premiumTitle: 'Discover plus+',
      premiumPrice: '15,000',
      premiumFeatures: [
        'Psychometric assessments to measure your interests, personality and abilities',
        '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation',
        'Lifetime access to Knowledge Gateway',
        'Invites to live webinars by industry experts',
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV building during internships/graduation'
      ]
    },
    // 10-12 Students
    {
      segment: '10-12 STUDENTS',
      standardTitle: 'Achieve Online',
      standardPrice: '5,999',
      standardFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts'
      ],
      standardExcluded: [
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV reviews during internships/graduation'
      ],
      premiumTitle: 'Achieve Plus+',
      premiumPrice: '10,599',
      premiumFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '4 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV reviews during internships/graduation'
      ]
    },
    // College Graduates
    {
      segment: 'COLLEGE GRADUATES',
      standardTitle: 'Ascend Online',
      standardPrice: '6,499',
      standardFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts'
      ],
      standardExcluded: [
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application'
      ],
      premiumTitle: 'Ascend Plus+',
      premiumPrice: '10,599',
      premiumFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '3 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application'
      ]
    },
    // Working Professionals
    {
      segment: 'WORKING PROFESSIONALS',
      standardTitle: 'Ascend Online',
      standardPrice: '6,499',
      standardFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts'
      ],
      standardExcluded: [
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application'
      ],
      premiumTitle: 'Ascend Plus+',
      premiumPrice: '10,599',
      premiumFeatures: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '3 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application'
      ]
    }
  ],
  customPlans: [
    {
      title: 'CV Building',
      price: '₹2000',
      description: 'Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls.'
    },
    {
      title: 'LinkedIn Profile Building',
      price: '₹2000',
      description: 'Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls.'
    },
    {
      title: 'LinkedIn Profile + CV Building',
      price: '₹3500',
      description: 'Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts.'
    },
    {
      title: 'Job Application Strategy',
      price: '₹4000',
      description: 'Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job.'
    },
    {
      title: 'Career Report',
      price: '₹2500',
      description: 'Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider.'
    },
    {
      title: 'Career Report + Career Counselling',
      price: '₹4000',
      description: 'Connect with India\'s top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you\'re most likely to enjoy and excel at.'
    },
    {
      title: 'Knowledge Gateway + Career Helpline Access',
      price: '₹250/month',
      description: 'Unlock holistic information on your career paths and get direct access to Mentoria\'s experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.'
    },
    {
      title: 'One-to-One Session with a Career Expert',
      price: '₹3500 per interaction for 1 hour',
      description: 'Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.'
    },
    {
      title: 'Overseas Admission Planner',
      price: '₹3000 for top 10 colleges',
      description: 'Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.'
    },
    {
      title: 'Overseas Admission: SOP Brainstorm',
      price: '₹3000 for a 1-hour session',
      description: 'Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert.'
    },
    {
      title: 'Overseas Admission: SOP Review',
      price: '₹2500',
      description: 'Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut.'
    },
    {
      title: 'Interview Prep Session',
      price: '₹2000',
      description: 'Ace your upcoming interviews with guidance from India\'s top HR experts and increase your chances of landing your dream job.'
    }
  ]
};

// Global State
let currentData = fallbackData;
let activeAudience = '8-9 STUDENTS';
let activeMainTab = 'plans';

// Resolve Sanity Image
function resolveSanityImageUrl(imageObj, fallbackUrl) {
  if (!imageObj) return fallbackUrl;
  if (typeof imageObj === 'string') return imageObj;
  if (imageObj.asset && imageObj.asset.url) return imageObj.asset.url;
  const ref = imageObj.asset?._ref || imageObj._ref;
  if (ref && ref.startsWith('image-')) {
    const parts = ref.split('-');
    if (parts.length >= 4) {
      return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${parts[1]}-${parts[2]}.${parts[3]}`;
    }
  }
  return fallbackUrl;
}

// Render Mentoria Plans (Standard & Premium)
function renderPlans() {
  const grid = document.getElementById('planGrid');
  if (!grid) return;

  const p = (currentData.plans || fallbackData.plans).find(x => x.segment === activeAudience) || fallbackData.plans[0];
  if (!p) return;

  grid.innerHTML = `
    <!-- Standard Card -->
    <article class="plan-card">
      <small>STANDARD</small>
      <h3>${p.standardTitle}</h3>
      <h4><span>₹</span>${p.standardPrice}</h4>
      <ul>
        ${(p.standardFeatures || []).map(f => `
          <li class="feature yes">
            <span>✓</span>
            <p>${f}</p>
          </li>
        `).join('')}
        ${(p.standardExcluded || []).map(f => `
          <li class="feature no">
            <span>✕</span>
            <p>${f}</p>
          </li>
        `).join('')}
      </ul>
      <a href="#contact" style="text-decoration:none;"><button>BUY NOW</button></a>
    </article>

    <!-- Premium Card -->
    <article class="plan-card premium">
      <div class="popular-banner">★ MOST POPULAR</div>
      <small>PREMIUM</small>
      <h3>${p.premiumTitle}</h3>
      <h4><span>₹</span>${p.premiumPrice}</h4>
      <ul>
        ${(p.premiumFeatures || []).map(f => `
          <li class="feature yes">
            <span>✓</span>
            <p>${f}</p>
          </li>
        `).join('')}
      </ul>
      <a href="#contact" style="text-decoration:none;"><button>BUY NOW</button></a>
    </article>
  `;
}

// Render Customised Modular Plans (12 Clean Cards)
function renderCustomPlans() {
  const grid = document.getElementById('customGrid');
  if (!grid) return;

  const plans = currentData.customPlans || fallbackData.customPlans;
  grid.innerHTML = plans.map(c => `
    <div class="custom-card">
      <h4>${c.title}</h4>
      <div class="custom-price">${c.price}</div>
      <p>${c.description || c.desc || ''}</p>
      <a href="#contact" style="text-decoration:none;"><button>BUY NOW</button></a>
    </div>
  `).join('');
}

// Tab Switching
function switchMainTab(tab) {
  activeMainTab = tab;
  const plansBtn = document.getElementById('plansBtn');
  const customBtn = document.getElementById('customBtn');
  const plansWrap = document.getElementById('plansWrap');
  const customSection = document.getElementById('custom-services');

  if (tab === 'plans') {
    plansBtn.classList.add('active');
    customBtn.classList.remove('active');
    plansWrap.style.display = 'block';
    customSection.style.display = 'none';
    renderPlans();
  } else {
    customBtn.classList.add('active');
    plansBtn.classList.remove('active');
    plansWrap.style.display = 'none';
    customSection.style.display = 'block';
    renderCustomPlans();
  }
}

function switchAudience(audience) {
  activeAudience = audience;
  const tabs = document.querySelectorAll('.audience-tabs .tab');
  tabs.forEach(t => {
    if (t.textContent.trim() === audience) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  renderPlans();
}

// DOM updater
function updateDOM(data) {
  currentData = data;

  // Settings
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
    const contactLinkedinLink = document.getElementById('contactLinkedinLink');
    if (contactLinkedinLink) {
      contactLinkedinLink.href = s.linkedin;
      contactLinkedinLink.textContent = s.linkedin.replace(/^https?:\/\/(www\.)?/, '').split('?')[0];
    }
  }
  if (s.instagram) {
    document.getElementById('socialInstagram').href = s.instagram;
    document.getElementById('footerInstagram').href = s.instagram;
  }
  if (s.whatsapp) {
    document.getElementById('socialWhatsapp').href = `https://wa.me/91${s.whatsapp.replace(/[^0-9]/g, '')}`;
  }

  // Home Hero
  const h = data.home || {};
  if (h.heroHeading) document.getElementById('heroHeading').textContent = h.heroHeading;
  if (h.heroDescription) document.getElementById('heroDescription').textContent = h.heroDescription;
  if (h.ctaText) document.getElementById('heroCtaText').textContent = h.ctaText;

  // Founder
  const f = data.founder || {};
  if (f.name) document.getElementById('founderName').textContent = f.name;
  if (f.title) document.getElementById('founderTitle').textContent = f.title;
  if (f.biography) document.getElementById('founderBio').textContent = f.biography;
  if (f.philosophy) document.getElementById('founderPhilosophy').textContent = `"${f.philosophy}"`;
  if (f.photo) {
    const founderPhotoUrl = resolveSanityImageUrl(f.photo, 'images/founder-new.jpg');
    document.getElementById('founderPhoto').src = founderPhotoUrl;
    document.getElementById('heroFounderAvatar').src = founderPhotoUrl;
  }

  // Testimonials
  renderTestimonials(data.testimonials || fallbackData.testimonials);

  // Packages & Custom Plans
  renderPlans();
  renderCustomPlans();
}

// Render Testimonials Dynamically
function renderTestimonials(testimonials) {
  const container = document.getElementById('testimonialsGrid');
  if (!container || !testimonials || testimonials.length === 0) return;

  container.innerHTML = testimonials.map(t => {
    const initials = (t.clientName || 'Student')
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const formattedQuote = (t.quote || '')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');

    return `
      <div class="testimonial-card">
        <div class="quote-icon">“</div>
        <p class="testimonial-quote">${formattedQuote}</p>
        <div class="testimonial-client">
          <div class="client-avatar">${initials}</div>
          <div>
            <h4 class="client-name">${t.clientName || 'Mentee'}</h4>
            <p class="client-role">${t.role || 'Career Guidance Mentee'}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Fetch Sanity Data Live
async function fetchSanityContent() {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "home": *[_type == "homePage"][0],
    "founder": *[_type == "founder"][0],
    "services": *[_type == "service"] | order(order asc),
    "testimonials": *[_type == "testimonial"] | order(order asc)
  }`;

  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP status ${response.status}`);
    const json = await response.json();

    if (json.result) {
      const merged = {
        ...fallbackData,
        settings: json.result.settings || fallbackData.settings,
        home: json.result.home || fallbackData.home,
        founder: json.result.founder || fallbackData.founder,
        services: (json.result.services && json.result.services.length > 0) ? json.result.services : fallbackData.services,
        testimonials: (json.result.testimonials && json.result.testimonials.length > 0) ? json.result.testimonials : fallbackData.testimonials
      };
      updateDOM(merged);
    }
  } catch (err) {
    console.warn('Sanity live fetch fallback:', err);
    updateDOM(fallbackData);
  }
}

// Form Submission
function handleFormSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccessMessage');

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  setTimeout(() => {
    submitBtn.style.display = 'none';
    successMsg.style.display = 'block';
  }, 500);
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => links.classList.remove('open')));
  }
}

// Visitor Lead Capture Popup Modal
function initLeadModal() {
  const modal = document.getElementById('leadModalBackdrop');
  const closeBtn = document.getElementById('leadModalCloseBtn');
  if (!modal) return;

  // Check if visitor has already submitted or dismissed the popup in this session
  const hasSeenModal = sessionStorage.getItem('cc_lead_modal_seen');
  if (!hasSeenModal) {
    // Show after a brief gentle delay (1.5 seconds) so user gets the page context
    setTimeout(() => {
      modal.style.display = 'flex';
    }, 1500);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      sessionStorage.setItem('cc_lead_modal_seen', 'true');
    });
  }

  // Close when clicking outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      sessionStorage.setItem('cc_lead_modal_seen', 'true');
    }
  });
}

function handleLeadSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('leadName');
  const phoneInput = document.getElementById('leadPhone');
  const audienceInput = document.getElementById('leadAudience');
  const submitBtn = document.getElementById('leadSubmitBtn');
  const successNotice = document.getElementById('leadSuccessNotice');

  const lead = {
    name: nameInput ? nameInput.value.trim() : '',
    phone: phoneInput ? phoneInput.value.trim() : '',
    audience: audienceInput ? audienceInput.value : '',
    timestamp: new Date().toISOString()
  };

  // Save to localStorage for lead tracking/follow-up
  try {
    const existingLeads = JSON.parse(localStorage.getItem('career_compass_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('career_compass_leads', JSON.stringify(existingLeads));
  } catch (err) {
    console.warn('Could not save lead to localStorage', err);
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Opening Website...';
  if (successNotice) successNotice.style.display = 'block';

  sessionStorage.setItem('cc_lead_modal_seen', 'true');

  setTimeout(() => {
    const modal = document.getElementById('leadModalBackdrop');
    if (modal) modal.style.display = 'none';
  }, 1200);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  initMobileMenu();
  initLeadModal();
  updateDOM(fallbackData);
  fetchSanityContent();
});
