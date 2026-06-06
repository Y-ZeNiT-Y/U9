/* =========================================
   DADOS DAS UCs
   ========================================= */
const ucsData = [
    {
        id:'ihc',
        title:'Interação Humano Computador e UX',
        code:'ADS1AN-SHA1-68616616',
        context:'Análise e Desenvolvimento de Sistemas · Graduação · Prática (presencial)',
        badge:'Prática · Presencial',
        progress:2,
        gradient:'linear-gradient(145deg, #a8c4de, #7aaac8)',
        icon:'fa-laptop-code',
        lastAccess: new Date('2026-05-28'),
        conteudo:[
            {icon:'fa-play-circle',title:'Aula 1 – Introdução à IHC',sub:'45 min · Vídeo',badge:'done'},
            {icon:'fa-file-pdf',title:'Material – Heurísticas de Nielsen',sub:'PDF · 12 páginas',badge:'done'},
            {icon:'fa-play-circle',title:'Aula 2 – Personas e Jornada do Usuário',sub:'50 min · Vídeo',badge:'new'},
            {icon:'fa-tasks',title:'Atividade – Análise de Interface',sub:'Entrega: 14/06/2026',badge:'new'},
        ],
        avaliacoes:[
            {name:'AV1 – Prova Teórica',date:'10/06/2026',desc:'Conteúdos: IHC, Heurísticas, Personas e Jornada do Usuário.',nota:null,status:'pendente'},
            {name:'Trabalho Prático',date:'14/06/2026',desc:'Análise e redesign de uma interface real com aplicação das heurísticas.',nota:null,status:'pendente'},
        ],
        membros:[
            {initials:'JA',name:'Jader Alexandre Alquini',role:'Professor',tag:'prof',color:'#a8c4de'},
            {initials:'LN',name:'Lidiane N. M. Penha',role:'Professora',tag:'prof',color:'#bdb0cc'},
            {initials:'GS',name:'Gabriel Silva',role:'Você',tag:'aluno',color:'#7aaac8'},
            {initials:'MC',name:'Mariana Campos',role:'Colega',tag:'aluno',color:'#92c3ec'},
            {initials:'RF',name:'Rafael Ferreira',role:'Colega',tag:'aluno',color:'#c8aeae'},
        ]
    },
    {
        id:'afp',
        title:'Academia de Futuros Profissionais',
        code:'ADS1AN-SHA2-70510014',
        context:'Análise e Desenvolvimento de Sistemas · Graduação · Teórica (digital)',
        badge:'Teórica · Digital',
        progress:48,
        gradient:'linear-gradient(145deg, #bdb0cc, #a094ba)',
        icon:'fa-server',
        lastAccess: new Date('2026-05-27'),
        conteudo:[
            {icon:'fa-play-circle',title:'Módulo 1 – Mercado de TI',sub:'30 min · Vídeo',badge:'done'},
            {icon:'fa-play-circle',title:'Módulo 2 – Soft Skills',sub:'28 min · Vídeo',badge:'done'},
            {icon:'fa-play-circle',title:'Módulo 3 – Currículo e LinkedIn',sub:'35 min · Vídeo',badge:'done'},
            {icon:'fa-play-circle',title:'Módulo 4 – Entrevistas Técnicas',sub:'40 min · Vídeo',badge:'new'},
            {icon:'fa-file-alt',title:'Quiz – Módulo 4',sub:'10 questões',badge:'new'},
        ],
        avaliacoes:[
            {name:'Quiz Módulos 1–3',date:'Realizado',desc:'Avaliação de conhecimentos sobre mercado e soft skills.',nota:8.5,status:'feito'},
            {name:'AV1 – Prova Final',date:'18/06/2026',desc:'Conteúdo completo da disciplina.',nota:null,status:'pendente'},
        ],
        membros:[
            {initials:'FC',name:'Francis "OXY" Hoang',role:'Professor',tag:'prof',color:'#bdb0cc'},
            {initials:'GS',name:'Gabriel Silva',role:'Você',tag:'aluno',color:'#a094ba'},
            {initials:'AT',name:'Ana Toledo',role:'Colega',tag:'aluno',color:'#92c3ec'},
        ]
    },
    {
        id:'mat',
        title:'Matemática Computacional Aplicada',
        code:'ADS1AN-SHA-68608802',
        context:'Análise e Desenvolvimento de Sistemas · Graduação · Teórica (presencial)',
        badge:'Teórica · Presencial',
        progress:4,
        gradient:'linear-gradient(145deg, #c8aeae, #b89090)',
        icon:'fa-calculator',
        lastAccess: new Date('2026-05-25'),
        conteudo:[
            {icon:'fa-play-circle',title:'Aula 1 – Lógica Proposicional',sub:'55 min · Vídeo',badge:'done'},
            {icon:'fa-file-pdf',title:'Apostila – Capítulo 1',sub:'PDF · 20 páginas',badge:'new'},
            {icon:'fa-play-circle',title:'Aula 2 – Álgebra Booleana',sub:'60 min · Vídeo',badge:'new'},
        ],
        avaliacoes:[
            {name:'AV1 – Prova Teórica',date:'10/06/2026',desc:'Lógica proposicional, álgebra booleana e teoria dos conjuntos.',nota:null,status:'pendente'},
        ],
        membros:[
            {initials:'DM',name:'Decio Marcellino',role:'Professor',tag:'prof',color:'#c8aeae'},
            {initials:'LN',name:'Lidiane N. M. Penha',role:'Professora',tag:'prof',color:'#bdb0cc'},
            {initials:'GS',name:'Gabriel Silva',role:'Você',tag:'aluno',color:'#b89090'},
            {initials:'PL',name:'Pedro Lima',role:'Colega',tag:'aluno',color:'#92c3ec'},
        ]
    }
];

/* =========================================
   NOTAS DATA
   ========================================= */
const notasData = [
    { title:'IHC e UX', code:'ADS1AN-SHA1-68616616', n1:null, n2:null, nFinal:null, faltas:2, maxFaltas:24, statusBadge:'warn' },
    { title:'Academia de Futuros Profissionais', code:'ADS1AN-SHA2-70510014', n1:8.5, n2:null, nFinal:null, faltas:0, maxFaltas:16, statusBadge:'ok' },
    { title:'Matemática Computacional Aplicada', code:'ADS1AN-SHA-68608802', n1:null, n2:null, nFinal:null, faltas:6, maxFaltas:32, statusBadge:'warn' },
];

/* =========================================
   RENDERIZAR UCs
   ========================================= */
function renderUCs(container, ucs) {
    container.innerHTML = '';
    ucs.forEach((uc, i) => {
        const card = document.createElement('div');
        card.className = 'uc-card';
        card.style.setProperty('--delay', `${i * 80}ms`);
        card.innerHTML = `
            <div class="uc-thumbnail" style="background:${uc.gradient}">
                <i class="fa-solid ${uc.icon} watermark-icon"></i>
                <span class="uc-badge">${uc.badge}</span>
            </div>
            <div class="uc-content">
                <h4 class="uc-title">${uc.title}</h4>
                <p class="uc-code">${uc.code}</p>
                <p class="uc-context">${uc.context}</p>
                <div class="uc-progress-area">
                    <div class="uc-progress-bar"><div class="fill" data-width="${uc.progress}" style="width:0%"></div></div>
                    <span class="uc-progress-text">${uc.progress}% concluído</span>
                </div>
                <div class="uc-actions">
                    <button class="action-btn active" onclick="handleUCBtn('continuar','${uc.id}')"><i class="fa-solid fa-clock-rotate-left"></i><span>Continuar</span></button>
                    <button class="action-btn active" onclick="openContentModal('conteudo','${uc.id}')"><i class="fa-regular fa-file-lines"></i><span>Conteúdo</span></button>
                    <button class="action-btn active" onclick="openContentModal('material','${uc.id}')"><i class="fa-solid fa-paperclip"></i><span>Material</span></button>
                    <button class="action-btn active" onclick="openContentModal('avaliacoes','${uc.id}')"><i class="fa-solid fa-file-signature"></i><span>Avaliações</span></button>
                    <button class="action-btn active" onclick="openContentModal('membros','${uc.id}')"><i class="fa-solid fa-users-viewfinder"></i><span>Membros</span></button>
                </div>
            </div>`;
        container.appendChild(card);
        setTimeout(() => card.classList.add('visible'), 80 + i * 80);

        // Ripple
        card.querySelectorAll('.action-btn.active').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = btn.getBoundingClientRect();
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    });

    // Animar barras
    setTimeout(() => {
        container.querySelectorAll('.fill').forEach(fill => {
            fill.style.width = fill.dataset.width + '%';
        });
    }, 300);
}

/* =========================================
   ORDENAR UCs
   ========================================= */
function sortUCs() {
    const sel = document.getElementById('ucSort').value;
    let sorted = [...ucsData];
    if (sel === 'Nome (A–Z)') sorted.sort((a,b) => a.title.localeCompare(b.title));
    else if (sel === 'Progresso') sorted.sort((a,b) => b.progress - a.progress);
    else sorted.sort((a,b) => b.lastAccess - a.lastAccess);
    renderUCs(document.getElementById('ucList'), sorted);
    renderUCs(document.getElementById('ucListDisciplinas'), sorted);
}

/* =========================================
   BOTÃO CONTINUAR
   ========================================= */
function handleUCBtn(type, ucId) {
    const uc = ucsData.find(u => u.id === ucId);
    if (type === 'continuar') toast(`Abrindo ${uc.title}…`, 'success');
}

/* =========================================
   MODAL CONTEÚDO
   ========================================= */
function openContentModal(type, ucId) {
    const uc = ucsData.find(u => u.id === ucId);
    const overlay = document.getElementById('contentOverlay');
    const title = document.getElementById('contentModalTitle');
    const body = document.getElementById('contentModalBody');

    const labels = { conteudo:'Conteúdo', material:'Material', avaliacoes:'Avaliações', membros:'Membros' };
    title.textContent = `${labels[type]} — ${uc.title}`;

    if (type === 'conteudo' || type === 'material') {
        body.innerHTML = uc.conteudo.map(item => `
            <div class="content-item" onclick="toast('Abrindo: ${item.title}','success')">
                <div class="content-icon"><i class="fa-solid ${item.icon}"></i></div>
                <div class="content-info">
                    <div class="content-item-title">${item.title}</div>
                    <div class="content-item-sub">${item.sub}</div>
                </div>
                <span class="content-item-badge ${item.badge === 'new' ? 'badge-new' : 'badge-done'}">${item.badge === 'new' ? 'Novo' : 'Concluído'}</span>
            </div>`).join('');
    }
    else if (type === 'avaliacoes') {
        body.innerHTML = uc.avaliacoes.map(av => `
            <div class="aval-item">
                <div class="aval-item-header">
                    <span class="aval-item-name">${av.name}</span>
                    <span class="aval-item-date">${av.date}</span>
                </div>
                <div class="aval-item-desc">${av.desc}</div>
                <div class="aval-nota-box">
                    <span class="aval-nota-label">Nota:</span>
                    <span class="aval-nota-val">${av.nota !== null ? av.nota.toFixed(1) : '—'}</span>
                    ${av.status === 'pendente' ? `<button class="aval-btn" onclick="toast('Acessando avaliação…','success')">Acessar</button>` : `<span class="status-pill pill-pago" style="margin-left:auto"><i class="fa-solid fa-check"></i> Realizado</span>`}
                </div>
            </div>`).join('');
    }
    else if (type === 'membros') {
        body.innerHTML = uc.membros.map(m => `
            <div class="member-item">
                <div class="member-avatar" style="background:${m.color}22;color:${m.color}">${m.initials}</div>
                <div>
                    <div class="member-name">${m.name}</div>
                    <div class="member-role">${m.role}</div>
                </div>
                <span class="member-tag ${m.tag === 'prof' ? 'tag-prof' : 'tag-aluno'}">${m.tag === 'prof' ? 'Professor' : 'Aluno'}</span>
            </div>`).join('');
    }

    overlay.classList.add('open');
}

function closeModal(type) {
    document.getElementById(type === 'profile' ? 'profileOverlay' : 'contentOverlay').classList.remove('open');
}

/* =========================================
   RENDER NOTAS
   ========================================= */
function renderNotas() {
    const grid = document.getElementById('notasGrid');
    grid.innerHTML = notasData.map(n => {
        const pct = (n.faltas / n.maxFaltas) * 100;
        const faltaClass = pct >= 75 ? 'falta-fail' : pct >= 50 ? 'falta-warn' : 'falta-ok';
        const badgeClass = `badge-${n.statusBadge}`;
        const nFinalDisplay = n.nFinal !== null ? n.nFinal.toFixed(1) : '—';
        return `
        <div class="nota-card">
            <div class="nota-card-header">
                <div>
                    <div class="nota-card-title">${n.title}</div>
                    <div class="nota-card-code">${n.code}</div>
                </div>
                <div class="nota-final-badge ${badgeClass}">
                    <span class="nota-num">${nFinalDisplay}</span>
                    Final
                </div>
            </div>
            <div class="nota-body">
                <div class="notas-row">
                    <div class="nota-item"><div class="nota-item-label">AV1</div><div class="nota-item-val">${n.n1 !== null ? n.n1.toFixed(1) : '—'}</div></div>
                    <div class="nota-item"><div class="nota-item-label">AV2</div><div class="nota-item-val">${n.n2 !== null ? n.n2.toFixed(1) : '—'}</div></div>
                    <div class="nota-item"><div class="nota-item-label">Situação</div><div class="nota-item-val" style="font-size:0.72rem;color:var(--${n.statusBadge === 'ok' ? 'green' : n.statusBadge === 'warn' ? 'yellow' : 'red'})">${n.statusBadge === 'ok' ? 'OK' : 'Em andamento'}</div></div>
                </div>
                <div class="faltas-area">
                    <div class="faltas-label">
                        <span>Frequência</span>
                        <span>${n.faltas} falta${n.faltas !== 1 ? 's' : ''} de ${n.maxFaltas} permitidas</span>
                    </div>
                    <div class="faltas-bar"><div class="faltas-fill ${faltaClass}" style="width:${pct}%"></div></div>
                    <div class="faltas-sub">${pct.toFixed(0)}% do limite de faltas atingido</div>
                </div>
            </div>
        </div>`;
    }).join('');
}

/* =========================================
   CARROSSEL — CORRIGIDO
   ========================================= */
const track = document.getElementById('carouselTrack');
const totalSlides = 3;
let currentSlide = 0;
let autoPlayInterval;

function updateCarousel(animate = true) {
    if (track) {
        track.style.transition = animate ? 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' : 'none';
        track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
    document.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(dir) {
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoPlay();
}

function goToSlide(index) {
    if (index === currentSlide) return;
    currentSlide = index;
    updateCarousel();
    resetAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => changeSlide(1), 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

/* =========================================
   NAVEGAÇÃO ENTRE VIEWS
   ========================================= */
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewName}`).classList.add('active');
    document.querySelectorAll('.sidebar li').forEach(li => {
        li.classList.toggle('active', li.dataset.view === viewName);
    });
    document.getElementById('mainContent').scrollTop = 0;
    if (viewName === 'notas') renderNotas();
    if (viewName === 'disciplinas') renderUCs(document.getElementById('ucListDisciplinas'), ucsData);
}

document.querySelectorAll('.sidebar li[data-view]').forEach(li => {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(li.dataset.view);
    });
});

/* =========================================
   THEME TOGGLE
   ========================================= */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
let dark = false;

themeToggle.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    themeIcon.className = dark ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
    toast(dark ? 'Modo escuro ativado' : 'Modo claro ativado', 'info');
});

/* =========================================
   PERFIL
   ========================================= */
document.getElementById('logoBox').addEventListener('click', () => {
    document.getElementById('profileOverlay').classList.add('open');
});

/* =========================================
   TOAST
   ========================================= */
function toast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = `toast ${type === 'success' ? 'success' : type === 'warning' ? 'warning' : type === 'error' ? 'error' : ''}`;
    const icons = { success:'fa-check-circle', warning:'fa-triangle-exclamation', error:'fa-xmark-circle', info:'fa-circle-info' };
    el.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i> ${msg}`;
    container.appendChild(el);
    requestAnimationFrame(() => { requestAnimationFrame(() => el.classList.add('show')); });
    setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 400);
    }, 3000);
}

/* =========================================
   SIDEBAR TOOLTIP
   ========================================= */
document.querySelectorAll('.sidebar a[title]').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const tip = document.createElement('div');
        tip.className = 'sidebar-tooltip';
        tip.textContent = this.getAttribute('title');
        document.body.appendChild(tip);
        const rect = this.getBoundingClientRect();
        tip.style.top = `${rect.top + rect.height / 2 - tip.offsetHeight / 2}px`;
        tip.style.left = `${rect.right + 12}px`;
        requestAnimationFrame(() => tip.classList.add('show'));
        this._tip = tip;
    });
    link.addEventListener('mouseleave', function() {
        if (this._tip) { this._tip.classList.remove('show'); setTimeout(() => this._tip?.remove(), 200); }
    });
    link.addEventListener('click', e => e.preventDefault());
});

/* =========================================
   INTERSECTION OBSERVER
   ========================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.calendar-section, .uc-section, .cal-col').forEach((el, i) => {
    el.style.setProperty('--delay', `${i * 60}ms`);
    observer.observe(el);
});

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    renderUCs(document.getElementById('ucList'), ucsData);
    renderUCs(document.getElementById('ucListDisciplinas'), ucsData);
    startAutoPlay();
});
