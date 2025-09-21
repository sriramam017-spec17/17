// Scroll to form
function scrollToForm() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.getElementById('careerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const interests = document.getElementById('interests').value.toLowerCase();
    const skills = document.getElementById('skills').value.toLowerCase();
    const industry = document.getElementById('industry').value.toLowerCase();

    let advice = '';

    if (interests.includes('coding') || skills.includes('python')) {
        advice += `<div class="career-card">
            <h3>Software Developer / Data Analyst</h3>
            <p>Perfect for coding enthusiasts. Requires Python, problem-solving, and analytical skills.</p>
        </div>`;
    }

    if (interests.includes('design')) {
        advice += `<div class="career-card">
            <h3>Graphic Designer / UX/UI Designer</h3>
            <p>Great for creative minds. Skills in design tools and creativity needed.</p>
        </div>`;
    }

    if (industry.includes('finance')) {
        advice += `<div class="career-card">
            <h3>Financial Analyst / Accountant</h3>
            <p>Ideal for numbers lovers. Requires analytical thinking and finance knowledge.</p>
        </div>`;
    }

    if (!advice) {
        advice = `<div class="career-card"><p>Try exploring more areas to find your interests!</p></div>`;
    }

    document.getElementById('advice').innerHTML = advice;
});