const translations = {
    pt: {
        doc_title: "Relatório de Atleta - Gustavo Mancha",
        position: "Zagueiro | Fortaleza Esporte Clube",
        report_title: "Relatório de Desempenho Profissional",
        profile_title: "Perfil do Atleta",
        profile_name: "Nome:",
        profile_birth: "Nascimento:",
        profile_age: "Idade:",
        profile_age_val: "21 anos",
        profile_nat: "Nacionalidade:",
        profile_nat_val: "Brasileiro",
        profile_club: "Clube:",
        profile_foot: "Pé Preferido:",
        profile_foot_val: "Esquerdo",
        overview_title: "Visão Geral",
        overview_text: "Gustavo Mancha é um zagueiro promissor revelado pelo Palmeiras e atualmente em destaque no Fortaleza. Com apenas 20 anos, já é titular absoluto da equipe em 2025, somando 17 jogos no ano. Destaca-se pela imposição física, bom posicionamento defensivo, qualidade nos passes e eficiência nos desarmes. Sua maturidade em campo e regularidade chamam atenção, é visto como um dos jovens defensores mais consistentes do futebol brasileiro atualmente.",
        overview_matches: "Jogos (Base)",
        overview_goals: "Gols Marcados",
        overview_status: "Status na Equipe",
        overview_status_val: "Titular",
        stats_title: "Estatísticas Detalhadas (Temporada 2025)",
        stats_header_comp: "Competição",
        stats_header_matches: "Jogos",
        stats_header_mins: "Minutos",
        stats_header_mpm: "Min/Jogo",
        stats_header_goals: "Gols",
        stats_header_assists: "Assist.",
        stats_header_rating: "Rating",
        stats_footer_total: "Total",
        analysis_title: "Análise Técnica",
        analysis_strengths: "Pontos Fortes",
        analysis_strength_1: "<strong>Marcação e Desarmes:</strong> Excelente leitura de jogo para interceptações.",
        analysis_strength_2: "<strong>Qualidade no Passe:</strong> Inicia a transição da defesa para o ataque com precisão.",
        analysis_strength_3: "<strong>Liderança:</strong> Titular da equipe, demonstra maturidade e organização.",
        analysis_strength_4: "<strong>Resistência Física:</strong> Grande vigor e intensidade durante toda a partida.",
        analysis_potential: "Potencial de Desenvolvimento",
        analysis_potential_1: "Sem pontos notáveis.",
        career_title: "Trajetória e Títulos",
        career_palmeiras_title: "Base do Palmeiras",
        career_palmeiras_desc: "Integrou o sub-15 e avançou até o sub-20, conquistando títulos como:",
        career_palmeiras_title_1: "Copa São Paulo de Juniores – 2023",
        career_palmeiras_title_2: "Copa do Brasil Sub-20 – 2022",
        career_palmeiras_title_3: "Campeonato Brasileiro Sub-20 – 2022",
        career_fortaleza_date: "(Abril/2024 - Presente)",
        career_fortaleza_desc: "Chegou ao sub-20, disputou mais de 20 jogos pela base, conquistando:",
        career_fortaleza_title_1: "Campeonato Cearense Sub-20",
        videos_title: "Destaques em Vídeo",
        videos_watch: "Assistir ao Jogo",
        footer_text: "Relatório confidencial gerado para análise de desempenho profissional. Proibida a reprodução não autorizada."
    },
    en: {
        doc_title: "Player Report - Gustavo Mancha",
        position: "Center-Back | Fortaleza Esporte Clube",
        report_title: "Professional Performance Report",
        profile_title: "Player Profile",
        profile_name: "Name:",
        profile_birth: "Birthdate:",
        profile_age: "Age:",
        profile_age_val: "21 years old",
        profile_nat: "Nationality:",
        profile_nat_val: "Brazilian",
        profile_club: "Club:",
        profile_foot: "Preferred Foot:",
        profile_foot_val: "Left",
        overview_title: "Overview",
        overview_text: "Gustavo Mancha is a promising center-back revealed by Palmeiras and currently a standout at Fortaleza. At just 20 years old, he is already an absolute starter for the team in 2025, with 17 appearances this year. He is noted for his physical presence, good defensive positioning, quality passing, and efficiency in tackles. His on-field maturity and consistency are noteworthy, making him one of the most consistent young defenders in Brazilian football today.",
        overview_matches: "Matches (Youth)",
        overview_goals: "Goals Scored",
        overview_status: "Team Status",
        overview_status_val: "Starter",
        stats_title: "Detailed Statistics (2025 Season)",
        stats_header_comp: "Competition",
        stats_header_matches: "Matches",
        stats_header_mins: "Minutes",
        stats_header_mpm: "Min/Match",
        stats_header_goals: "Goals",
        stats_header_assists: "Assists",
        stats_header_rating: "Rating",
        stats_footer_total: "Total",
        analysis_title: "Technical Analysis",
        analysis_strengths: "Strengths",
        analysis_strength_1: "<strong>Marking & Tackles:</strong> Excellent game reading for interceptions.",
        analysis_strength_2: "<strong>Passing Quality:</strong> Initiates the transition from defense to attack with precision.",
        analysis_strength_3: "<strong>Leadership:</strong> A starter for the team, demonstrating maturity and organization.",
        analysis_strength_4: "<strong>Physical Stamina:</strong> Great vigor and intensity throughout the entire match.",
        analysis_potential: "Development Potential",
        analysis_potential_1: "No notable points.",
        career_title: "Career Path & Titles",
        career_palmeiras_title: "Palmeiras Youth Academy",
        career_palmeiras_desc: "He joined the U-15 team and progressed to the U-20, winning titles such as:",
        career_palmeiras_title_1: "Copa São Paulo de Juniores – 2023",
        career_palmeiras_title_2: "U-20 Copa do Brasil – 2022",
        career_palmeiras_title_3: "U-20 Campeonato Brasileiro – 2022",
        career_fortaleza_date: "(April/2024 - Present)",
        career_fortaleza_desc: "He joined the U-20 team, played over 20 matches for the youth squad, winning:",
        career_fortaleza_title_1: "U-20 Campeonato Cearense",
        videos_title: "Video Highlights",
        videos_watch: "Watch Match",
        footer_text: "Confidential report generated for professional performance analysis. Unauthorized reproduction is prohibited."
    }
};

const setLanguage = (lang) => {
    document.getElementById('html-lang').lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = translations[lang].doc_title;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (key.includes('strength')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('[data-translate^="videos_watch"]').forEach(el => {
        el.textContent = translations[lang].videos_watch;
    });

    document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
};

document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

setLanguage('pt');