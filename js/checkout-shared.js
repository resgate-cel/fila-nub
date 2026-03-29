const baseLinks = {
    up1: "https://pay.carrinhofinaliza.site/lDW0ZaJnkA9GN7E",
    up2: "https://pay.carrinhofinaliza.site/n1NLgwJNem2GMxE",
    up3: "https://pay.carrinhofinaliza.site/N1nVZpYWAxYGlM6",
    up4: "https://pay.carrinhofinaliza.site/kYL6geWMBlRZrKM",
    up5: "https://pay.carrinhofinaliza.site/lDW0ZaJnkw6GN7E",
    up6: "https://pay.carrinhofinaliza.site/KV603koL0xL3w8y",
    up7: "https://pay.carrinhofinaliza.site/nQ7kZ7pQJaEG0eJ",
    up8: "https://pay.carrinhofinaliza.site/2wq7Gr7dYWVgBAN",
    up9: "https://pay.carrinhofinaliza.site/6YQPgjn69Elgpxz",
    up10:"https://pay.carrinhofinaliza.site/5pjw3RnpMKV32lQ",
    up11:"https://pay.carrinhofinaliza.site/521rZJz1DKrZeaX",
    up12:"https://pay.carrinhofinaliza.site/1VOvGV47KEX3D62"
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
