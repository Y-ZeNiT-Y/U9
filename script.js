function login() {
    // 1. Pega os valores dos inputs
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var msg = document.getElementById('msg');

    // 2. Verifica se os campos estão vazios
    // .trim() remove espaços em branco acidentais
    if (email.trim() === "" || senha.trim() === "") {
        
        // Se estiver vazio, exibe mensagem de erro
        msg.innerHTML = "Por favor, preencha todos os campos.";
        msg.style.color = "red";
        msg.style.marginTop = "10px";
        
    } else {
        // 3. Se estiver tudo preenchido, redireciona para a página desejada
        msg.innerHTML = "Acessando...";
        msg.style.color = "green";
        
        window.location.href = "index2.html";
    }
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se já existe uma preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.getElementById('switch-to-colab').addEventListener('click', function() {
    const card = document.querySelector('.card');
    const body = document.body;

    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    setTimeout(() => {
        body.classList.add('colab-theme');
        card.classList.add('colab-mode');

        card.innerHTML = `
            <span class="area-restrita-tag">Área Restrita</span>
            <h1>Acesse seu Ulife</h1>
            
            <div class="label">Login Colaborador</div>
            <div class="input-row" style="margin-bottom: 20px;">
                <input type="text" placeholder="usuário institucional">
            </div>

            <div class="label">Senha</div>
            <input type="password" placeholder="Insira sua senha" style="margin-bottom: 5px;">

            <div class="forgot-password-colab">
                <a href="#">Esqueci minha senha</a>
            </div>

            <button class="btn-primary">Entrar</button>

            <a href="javascript:void(0)" class="btn-voltar" onclick="window.location.reload()">
                ← Voltar para Área do Estudante
            </a>
        `;

        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
});

// Espera o site carregar
document.addEventListener('click', function(event) {
    
    // 1. ABRIR O MODAL
    // Verifica se o clique foi no botão de abrir ou em qualquer ícone dentro dele
    if (event.target.id === 'btnAbrirModal' || event.target.closest('#btnAbrirModal')) {
        const modal = document.getElementById("meuModal");
        if (modal) {
            modal.style.display = "flex";
            // Adiciona um pequeno delay para a animação de fade (se houver)
            setTimeout(() => modal.classList.add('show'), 10);
        }
    }

    // 2. FECHAR O MODAL (No X)
    if (event.target.id === 'btnFecharModal') {
        const modal = document.getElementById("meuModal");
        modal.style.display = "none";
        modal.classList.remove('show');
    }

    // 3. FECHAR O MODAL (Clicando fora da caixa branca)
    if (event.target.classList.contains('modal-fundo')) {
        event.target.style.display = "none";
        event.target.classList.remove('show');
    }
});

document.addEventListener('input', function (event) {
    // Verifica se o elemento que está recebendo texto é o campo de login
    // Estamos verificando pelo ID 'email' ou pelo placeholder (já que o ID muda no colab)
    if (event.target.id === 'email' || event.target.placeholder === 'usuário institucional') {
        
        // Remove tudo o que NÃO for número (0-9) usando Expressão Regular
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
});