document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal-content');
    const prompt = document.getElementById('prompt');
    const themeToggle = document.getElementById('theme-toggle');
    
    let commandHistory = [];
    let historyIndex = -1;
    let currentInput = '';
    let cursorPosition = 0;

    const commands = {
        help: () => {
            return help.join('<br>');
        },
        whoami: () => {
            return whoami.join('<br>');
        },
        social: () => {
            return social.join('<br>');
        },
        projects: () => {
            return projects.join('<br>');
        },
        skills: () => {
            return skills.join('<br>');
        },
        email: () => {
            return `Email: ${email}`;
        },
        clear: () => {
            output.innerHTML = '';
            return '';
        },
        hack: () => {
            initiateHackingAnimation();
            return "";
        },
        stats: () => {
            return `
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                    <img src="https://github-readme-stats.vercel.app/api?username=coffinxp&theme=vision-friendly-dark&bg_color=00000000&hide_border=true&custom_title=%20" alt="GitHub Stats" style="width: 49%; height: auto;" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=coffinxp&layout=compact&theme=vision-friendly-dark&bg_color=00000000&hide_border=true" alt="Top Languages" style="width: 49%; height: auto;" />
                    <img src="https://streak-stats.demolab.com?user=coffinxp&theme=dark&background=00000000&hide_border=true" alt="GitHub Streak" style="width: 100%; height: auto; margin-top: 10px;" />
                </div>
            `;
        }
    };

    let isNeonMode = false;
    const defaultMatrixColor = '#0F0';
    const neonMatrixColor = '#00ffff';
    let currentMatrixColor = defaultMatrixColor;
    document.documentElement.style.setProperty('--matrix-color', currentMatrixColor);

    function addCommandEcho(text) {
        const p = document.createElement('p');
        p.className = 'command-echo';
        p.innerHTML = text;
        output.appendChild(p);
        smoothScrollToBottom();
    }

    function addOutput(text, delay = 0) {
        setTimeout(() => {
            const p = document.createElement('p');
            p.className = 'command-output';
            p.innerHTML = text;
            output.appendChild(p);
            smoothScrollToBottom();

            p.querySelectorAll('.social-link a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            });
        }, delay);
    }

    function processCommand(cmd) {
        const command = cmd.toLowerCase().trim();
        if (commands[command]) {
            const output = commands[command]();
            if (typeof output === 'string') {
                addOutput(output);
            } else if (Array.isArray(output)) {
                output.forEach(line => addOutput(line));
            }
        } else {
            addOutput(`Command not found: ${cmd}. Type 'help' for available commands.`);
        }
    }

    function updatePrompt() {
        prompt.innerHTML = `lostsec@coffinxp:~$ ${currentInput}<span id="cursor">█</span>`;
    }

    terminal.addEventListener('click', () => {
        if (window.getSelection().toString()) {
            return;
        }
        currentInput = '';
        cursorPosition = 0;
        updatePrompt();
        terminal.focus();
    });

    terminal.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'A') {
            e.stopPropagation();
        } else {
            if (window.getSelection().toString()) {
                return;
            }
            e.preventDefault();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.target === themeToggle) {
            return;
        }
        
        if (e.key === 'Tab') {
            e.preventDefault();
            const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
            if (matchingCommands.length === 1) {
                currentInput = matchingCommands[0];
                cursorPosition = currentInput.length;
            }
        } else if (e.key === 'Enter') {
            if (currentInput.trim()) {
                addCommandEcho(`lostsec@coffinxp:~$ ${currentInput}`);
                processCommand(currentInput);
                commandHistory.push(currentInput);
                historyIndex = commandHistory.length;
                currentInput = '';
                cursorPosition = 0;
            }
        } else if (e.key === 'ArrowLeft') {
            if (cursorPosition > 0) cursorPosition--;
        } else if (e.key === 'ArrowRight') {
            if (cursorPosition < currentInput.length) cursorPosition++;
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                currentInput = commandHistory[historyIndex];
                cursorPosition = currentInput.length;
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                currentInput = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                currentInput = '';
            }
            cursorPosition = currentInput.length;
        } else if (e.key === 'Backspace') {
            if (cursorPosition > 0) {
                currentInput = currentInput.slice(0, cursorPosition - 1) + currentInput.slice(cursorPosition);
                cursorPosition--;
            }
        } else if (e.key.length === 1) {
            currentInput = currentInput.slice(0, cursorPosition) + e.key + currentInput.slice(cursorPosition);
            cursorPosition++;
        }
        updatePrompt();
    });

    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isNeonMode = !isNeonMode;
        document.body.classList.toggle('neon-mode', isNeonMode);
        
        const startColor = isNeonMode ? defaultMatrixColor : neonMatrixColor;
        const endColor = isNeonMode ? neonMatrixColor : defaultMatrixColor;
        
        currentMatrixColor = endColor;
        document.documentElement.style.setProperty('--matrix-color', endColor);
        
        document.documentElement.style.setProperty('--cursor-image', isNeonMode ? 'url("/cursor/neon.png")' : 'url("/cursor/default.png")');
        
        smoothColorTransition(startColor, endColor, 500);
    });

    function initiateHackingAnimation() {
        const hackingStages = [
            { message: "Bypassing firewall...", duration: 2000 },
            { message: "Cracking encryption...", duration: 3000 },
            { message: "Injecting payload...", duration: 2500 },
            { message: "Extracting data...", duration: 3500 },
            { message: "Covering tracks...", duration: 2000 }
        ];
        
        const hackingArt = `
        
        ░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓████████▓▒░▒▓███████▓▒░▒▓████████▓▒░▒▓██████▓▒░  
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ 
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░        
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░   ░▒▓█▓▒░  ░▒▓██████▓▒░░▒▓██████▓▒░░▒▓█▓▒░        
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░         ░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░        
        ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░         ░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░ 
        ░▒▓████████▓▒░▒▓██████▓▒░░▒▓███████▓▒░   ░▒▓█▓▒░  ░▒▓███████▓▒░░▒▓███████▓▒░▒▓██████▓▒░  
        
        `;
        
        addOutput(`<pre>${hackingArt}</pre>`, 1);
        
        hackingStages.forEach((stage, index) => {
            setTimeout(() => {
                addOutput(`<span class="hacking-stage">[${index + 1}/${hackingStages.length}] ${stage.message}</span>`);
                animateProgressBar(stage.duration);
            }, hackingStages.slice(0, index).reduce((sum, s) => sum + s.duration, 0));
        });
        
        const totalDuration = hackingStages.reduce((sum, stage) => sum + stage.duration, 0);
        setTimeout(() => {
            addOutput('<span class="hacking-complete">System Defaced!</span>');
        }, totalDuration);
    }

    function animateProgressBar(duration) {
        const progressBarWidth = 30;
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        output.appendChild(progressBar);
        
        let progress = 0;
        const interval = setInterval(() => {
            progress++;
            const filledWidth = Math.floor((progress / 100) * progressBarWidth);
            const emptyWidth = progressBarWidth - filledWidth;
            progressBar.textContent = `[${'='.repeat(filledWidth)}${' '.repeat(emptyWidth)}] ${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, duration / 100);
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-color').trim();
        
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 128));
            ctx.fillText(text, i * 20, drops[i] * 20);
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    function smoothColorTransition(startColor, endColor, duration) {
        const startRGB = hexToRgb(startColor);
        const endRGB = hexToRgb(endColor);
        const startTime = performance.now();

        function animate() {
            const elapsedTime = performance.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * progress);
            const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * progress);
            const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * progress);

            currentMatrixColor = `rgb(${r}, ${g}, ${b})`;
            document.documentElement.style.setProperty('--matrix-color', currentMatrixColor);
            console.log('Current matrix color:', currentMatrixColor);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function scrollToBottom() {
        terminal.scrollTop = terminal.scrollHeight;
    }

    function smoothScrollToBottom() {
        const terminalContent = document.getElementById('terminal-content');
        terminalContent.scrollTo({
            top: terminalContent.scrollHeight,
            behavior: 'smooth'
        });
    }

    setInterval(drawMatrix, 33);
    
    addOutput("Welcome to the Hacker Terminal. Type 'help' for available commands.", 50);
    updatePrompt();

    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);

    let cursorX = 0;
    let cursorY = 0;
    let currentX = 0;
    let currentY = 0;

    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    function updateCursorPosition() {
        currentX = lerp(currentX, cursorX, 0.2);
        currentY = lerp(currentY, cursorY, 0.2);
        customCursor.style.left = `${currentX}px`;
        customCursor.style.top = `${currentY}px`;
        requestAnimationFrame(updateCursorPosition);
    }

    updateCursorPosition();

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    document.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mouseover', () => {
        customCursor.style.display = 'block';
    });

    document.addEventListener('selectstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName !== 'A') {
            e.preventDefault();
        }
    });

    document.addEventListener('touchstart', (e) => {
        cursorX = e.touches[0].clientX;
        cursorY = e.touches[0].clientY;
        customCursor.style.display = 'block';
    });

    document.addEventListener('touchmove', (e) => {
        cursorX = e.touches[0].clientX;
        cursorY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', () => {
        customCursor.style.display = 'none';
    });
});