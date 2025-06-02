// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
});

// Testimonials slider
const testimonials = [
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
        quote: 'Starting my career at Hot Beans has been incredible. The mentorship program paired me with a senior developer who has helped me grow my skills exponentially.',
        author: 'Alex Johnson, Junior Front-End Developer'
    },
    {
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
        quote: 'I joined Hot Beans right after completing my web development bootcamp. The team made me feel welcome, and I\'ve been able to work on real client projects from day one.',
        author: 'Sophia Chen, Junior Full-Stack Developer'
    },
    {
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
        quote: 'The learning culture here is amazing. We have weekly tech talks, code reviews, and time allocated for learning new technologies.',
        author: 'Marcus Williams, Junior Back-End Developer'
    }
];

let currentTestimonial = 0;
const testimonialElement = document.querySelector('.testimonial');
const prevButton = document.querySelector('.slider-controls .prev');
const nextButton = document.querySelector('.slider-controls .next');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialElement.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.author.split(',')[0]}">
        <blockquote>${testimonial.quote}</blockquote>
        <cite>${testimonial.author}</cite>
    `;
}

prevButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

nextButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Initialize first testimonial
updateTestimonial();