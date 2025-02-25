export function initDropdown() {
    document.querySelectorAll('.faq-pergunta').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}
