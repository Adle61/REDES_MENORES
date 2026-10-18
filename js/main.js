document.addEventListener('DOMContentLoaded', () => {
    
    
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    
    const runCmdBtn = document.getElementById('run-cmd-btn');
    const terminalScreen = document.getElementById('terminal-screen');

    runCmdBtn.addEventListener('click', () => {
        
        terminalScreen.innerHTML = '<p>C:\\Users\\IngSistemas> ipconfig</p>';
        
        
        setTimeout(() => {
            const output = document.createElement('div');
            output.innerHTML = `
                <br>
                <p style="color: #f8fafc;">Adaptador de LAN inalámbrica Wi-Fi:</p><br>
                <p>&nbsp;&nbsp;&nbsp; Suffix DNS specific. . . . . . . : local</p>
                <p>&nbsp;&nbsp;&nbsp; Dirección IPv4. . . . . . . . . . . . . . : <span style="color: #38bdf8;">192.168.1.15</span></p>
                <p>&nbsp;&nbsp;&nbsp; Máscara de subred . . . . . . . . . . . . : <span style="color: #38bdf8;">255.255.255.0</span></p>
                <p>&nbsp;&nbsp;&nbsp; Puerta de enlace predeterminada . . . . . : <span style="color: #38bdf8;">192.168.1.1</span></p>
                <br>
                <p class="command-prompt">C:\\Users\\IngSistemas> _</p>
            `;
            terminalScreen.appendChild(output);
            
            
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }, 500);
    });

});
