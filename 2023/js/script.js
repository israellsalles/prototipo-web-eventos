document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    let activeMenuItem = localStorage.getItem('activeMenuItem');

    if (activeMenuItem) {
        // Se há um item ativo armazenado no localStorage, aplique a classe 'active' a ele
        menuItems.forEach(item => {
            if (item.textContent === activeMenuItem) {
                item.classList.add('active');
            }
        });
    }

    // Adicione o evento de clique a cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remova a classe 'active' de todos os itens do menu
            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            // Adicione a classe 'active' ao item clicado
            this.classList.add('active');

            // Armazene o item ativo no localStorage
            localStorage.setItem('activeMenuItem', this.textContent);
        });
    });
});