document.addEventListener('DOMContentLoaded', function() {
  const productForm = document.getElementById('productForm');
  const productList = document.getElementById('productList');
  const newProductButton = document.getElementById('newProductButton');

  productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productValue = document.getElementById('productValue').value;
    const productAvailability = document.getElementById('productAvailability').value;
    addProduct(productName, productValue);
    productForm.reset();
  });

  function addProduct(name, value) {
    const newRow = productList.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = value;
  }


  produtos.forEach(produto => addProduct(produto.nome, produto.valor));

  produtos.sort((a, b) => a.valor - b.valor);
});
