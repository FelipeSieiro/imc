document.getElementById('imc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) {
    document.getElementById('result').textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const imc = (weight / (height * height)).toFixed(2);
  const status = getImcStatus(imc);

  document.getElementById('result').textContent = `Seu IMC é ${imc} (${status})`;
});

function getImcStatus(imc) {
  imc = parseFloat(imc);
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau 1';
  if (imc < 40) return 'Obesidade grau 2';
  return 'Obesidade grau 3 (mórbida)';
}
