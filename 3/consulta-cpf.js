// API de consulta CPF
const API_URL = 'https://api.alphapulse.online/api/cpf/fa9d37bc446e991aa6bc24cd7d74f624e100a8f6cc1ea2ffae176f862d65e1e9/';

// Consulta CPF na API
async function consultarCPF(cpf) {
    // Remove formatação (pontos e traço)
    const cpfLimpo = cpf.replace(/\D/g, '');
    
    if (cpfLimpo.length !== 11) {
        return null;
    }
    
    try {
        const response = await fetch(API_URL + cpfLimpo);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao consultar CPF:', error);
        return null;
    }
}

// Inicializa quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const nomeInput = document.getElementById('nome');
    
    if (!cpfInput || !nomeInput) return;
    
    // Listener para quando terminar de digitar o CPF
    cpfInput.addEventListener('input', async function(e) {
        const cpfLimpo = e.target.value.replace(/\D/g, '');
        
        // Quando tiver 11 dígitos, consulta a API
        if (cpfLimpo.length === 11) {
            // Mostra loading no campo nome
            nomeInput.value = 'Buscando...';
            nomeInput.disabled = true;
            
            const dados = await consultarCPF(cpfLimpo);
            
            if (dados && dados.nome) {
                nomeInput.value = dados.nome;
                nomeInput.classList.add('success');
                
                // Salva no localStorage também
                localStorage.setItem('nome', dados.nome);
                localStorage.setItem('nascimento', dados.nascimento || '');
                localStorage.setItem('mae', dados.mae || '');
            } else {
                nomeInput.value = '';
                nomeInput.placeholder = 'CPF não encontrado - digite manualmente';
            }
            
            nomeInput.disabled = false;
        }
    });
});

