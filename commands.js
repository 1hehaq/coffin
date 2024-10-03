const email = "coffinxp7@proton.me";
const twitter = "https://twitter.com/coffinxp7";
const linkedin = "https://www.linkedin.com/in/coffinxp7";
const github = "https://github.com/coffinxp";
const youtube = "https://www.youtube.com/@lostsecc";

const whoami = [
    "<br>",
    "Hi there! I'm Lostsec, a hacker & Security Researcher.",
    "I'm on my way to becoming a Cybersecurity Specialist or a Bug hunter.",
    "Technology has always fascinated me, and I've immersed myself in the captivating world of cybersecurity.",
    "I have experience in cracking, reverse engineering, bug hunting, forensics, social engineering, and spy techniques.",
    "<br>",
    "More about me:",
    "- Name: coffin",
    "- From: Russia",
    "- Bug Hunter | Security Researcher | Forensics Analyst",
    "- Improving knowledge in Website Vulnerabilities",
    "- I'm currently learning everything",
    "<br>"
];

const social = [
    "<br>",
    `<i class='bx bxl-github'></i> GitHub: <div class="social-link"><a href="${github}" target="_blank" rel="noopener noreferrer">github.com/coffinxp</a></div>`,
    `<i class='bx bxl-youtube'></i> YouTube: <div class="social-link"><a href="${youtube}" target="_blank" rel="noopener noreferrer">youtube.com/@lostsecc</a></div>`,
    `<i class='bx bxl-twitter'></i> Twitter: <div class="social-link"><a href="${twitter}" target="_blank" rel="noopener noreferrer">twitter.com/coffinxp7</a></div>`,
    `<i class='bx bxl-linkedin'></i> LinkedIn: <div class="social-link"><a href="${linkedin}" target="_blank" rel="noopener noreferrer">linkedin/coffinxp7</a></div>`,
    "<br>"
];

const projects = [
    "<br>",
    "Still learning and working on projects...",
    "<br>"
];

const help = [
    "<br>",
    'Commands: "whoami", "social", "projects", "skills", "stats", "email", "clear"',
    "<br>"
];

const banner = [
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

const skills = [
    "<br>",
    "Burp Suite - Metasploit - Wireshark - Bash - Python",
    "Linux - Go - Git - Docker - Flutter - C - C++ - Java",
    "HTML5 - CSS3 - JavaScript - BlackArch - MongoDB",
    "ExpressJS - React - Node.js - Parrot OS - Ubuntu",
    "Kali Linux - VS Code",
    "<br>"
];

function openResume() {
    window.open('#', '_blank');
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        email, twitter, linkedin, instagram, github, facebook,
        whoami, social, projects, help, banner,
        openResume, skills
    };
}