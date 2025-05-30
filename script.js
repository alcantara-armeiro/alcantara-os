document.getElementById('osForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const cliente = document.getElementById('cliente').value;
  const descricao = document.getElementById('descricao').value;
  const valor = document.getElementById('valor').value;

  const win = window.open('', '', 'height=700,width=800');
  win.document.write('<html><head><title>Ordem de Serviço</title></head><body>');
  win.document.write('<h1>Alcantara Armeiro</h1>');
  win.document.write('<p><strong>Cliente:</strong> ' + cliente + '</p>');
  win.document.write('<p><strong>Serviço:</strong> ' + descricao + '</p>');
  win.document.write('<p><strong>Valor:</strong> R$ ' + valor + '</p>');
  win.document.write('<p>Data: ' + new Date().toLocaleDateString() + '</p>');
  win.document.write('</body></html>');
  win.document.close();
  win.print();
});