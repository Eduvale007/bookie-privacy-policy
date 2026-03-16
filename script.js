const translations = {
    'pt': {
        welcome_title: "Bem-vindo ao Bookie",
        welcome_subtitle: "Onde seus estudos ganham um toque de magia.",
        features_title: "O que é possível fazer?",
        security_title: "Resumos Seguros",
        security_desc: "Seus resumos estão protegidos contra invasores com biometria e pins mágicos.",
        cloud_title: "Nas Nuvens",
        cloud_desc: "Seus resumos voando com o Bookie! Acesse de qualquer lugar, a qualquer hora.",
        
        previews_title: "Conheça o App",
        preview_login: "Login Seguro",
        preview_home: "Suas Notas",
        preview_backup: "Backup Mágico",
        preview_menu: "Menu Mágico",

        privacy_title: "Nossa Política de Privacidade",
        privacy_desc: "Cuidamos dos seus dados como cuidamos das nossas poções mais raras.",
        privacy_btn: "Ler detalhes",
        policy_lang: "Português (Brasil)",
        flag: "🇧🇷",
        delete_account_instr: "Para excluir sua conta no Bookie e remover seus dados, siga as instruções abaixo:",
        app_label: "No Aplicativo:",
        app_desc: "Basta realizar o logout (sair da conta).",
        backup_label: "Dados de Backup:",
        backup_desc: "Seus backups ficam no seu Google Drive. Você pode excluir a pasta 'Bookie' lá.",
        support_label: "Suporte:",
        lang_status: "Idioma: Português",
        
        // Nova chave para o link do modal
        full_privacy_link: "Ver Política de Privacidade Completa →"
    },
    'en': {
        welcome_title: "Welcome to Bookie",
        welcome_subtitle: "Where your studies get a touch of magic.",
        features_title: "What can you do?",
        security_title: "Secure Summaries",
        security_desc: "Your summaries are protected against intruders with biometrics and magic pins.",
        cloud_title: "In the Clouds",
        cloud_desc: "Your summaries flying with Bookie! Access anywhere, anytime.",
        
        previews_title: "App Preview",
        preview_login: "Secure Login",
        preview_home: "Your Notes",
        preview_backup: "Magic Backup",
        preview_menu: "Magic Menu",

        privacy_title: "Our Privacy Policy",
        privacy_desc: "We care for your data like we care for our rarest potions.",
        privacy_btn: "Read details",
        policy_lang: "English (US)",
        flag: "🇺🇸",
        delete_account_instr: "To delete your Bookie account and remove your data, follow these instructions:",
        app_label: "In the App:",
        app_desc: "Simply log out of your account.",
        backup_label: "Backup Data:",
        backup_desc: "Your backups are in your Google Drive. You can delete the 'Bookie' folder there.",
        support_label: "Support:",
        lang_status: "Language: English",
        
        // Nova chave para o link do modal
        full_privacy_link: "View Full Privacy Policy →"
    },
    'es': {
        welcome_title: "Bienvenido a Bookie",
        welcome_subtitle: "Donde tus estudios reciben un toque de magia.",
        features_title: "¿Qué puedes hacer?",
        security_title: "Resúmenes Seguros",
        security_desc: "Tus resúmenes están protegidos contra intrusos con biometría y pines mágicos.",
        cloud_title: "En las Nubes",
        cloud_desc: "¡Tus resúmenes volando con Bookie! Accede desde cualquier lugar.",
        
        previews_title: "Conoce la App",
        preview_login: "Inicio Seguro",
        preview_home: "Tus Notas",
        preview_backup: "Respaldo Mágico",
        preview_menu: "Menú Mágico",

        privacy_title: "Política de Privacidad",
        privacy_desc: "Cuidamos tus datos como cuidamos nuestras pociones más raras.",
        privacy_btn: "Leer detalles",
        policy_lang: "Español",
        flag: "🇪🇸",
        delete_account_instr: "Para eliminar tu cuenta de Bookie y tus datos, sigue estas instrucciones:",
        app_label: "En la App:",
        app_desc: "Simplemente cierra sesión.",
        backup_label: "Copia de Seguridad:",
        backup_desc: "Tus copias están en tu Google Drive. Puedes eliminar la carpeta 'Bookie' allí.",
        support_label: "Soporte:",
        lang_status: "Idioma: Español",
        
        // Nova chave para o link do modal
        full_privacy_link: "Ver Política de Privacidad Completa →"
    }
};


function applyLanguage() {
    let lang = navigator.language.split('-')[0]; 
    if (!translations[lang]) lang = 'en';

    const texts = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.innerText = texts[key];
    });

    document.getElementById('flag-icon').innerText = texts.flag;
    document.getElementById('lang-indicator').innerText = texts.lang_status;
}

// Lógica do Modal
const modal = document.getElementById("privacy-modal");
const btn = document.getElementById("open-privacy");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

window.onload = applyLanguage;