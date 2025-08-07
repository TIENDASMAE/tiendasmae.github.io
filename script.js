
document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    const container = document.getElementById('products-container');
    const product = document.createElement('div');
    product.className = 'product';
    product.innerHTML = `<img src="\${image}" alt="\${name}"><h3>\${name}</h3><p>\${price}</p>`;
    container.appendChild(product);

    this.reset();
});

function openContactMenu() {
    const menu = document.getElementById('contactMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
