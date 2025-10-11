const rates = {
  USD: 1,
  EUR: 0.95,
  GBP: 0.82,
  JPY: 149.3,
  CNY: 7.3,
  CAD: 1.37,
  AUD: 1.58,
  CHF: 0.91,
  MXN: 18.2,
  BRL: 5.1,
  KRW: 1345,
  INR: 83.2,
  RUB: 96.5,
  ARS: 350,
  CLP: 920,
  COP: 4120,
  SEK: 10.8,
  NOK: 10.9,
  ZAR: 18.8,
  TRY: 28.9
};

const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");

Object.keys(rates).forEach(currency => {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.textContent = currency;
  fromSelect.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = currency;
  option2.textContent = currency;
  toSelect.appendChild(option2);
});

fromSelect.value = "USD";
toSelect.value = "EUR";

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromSelect.value;
  const to = toSelect.value;
  const resultDiv = document.getElementById("result");
  const datetimeDiv = document.getElementById("datetime");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Por favor ingrese un monto válido.";
    resultDiv.style.color = "red";
    datetimeDiv.textContent = "";
    return;
  }

  const converted = (amount / rates[from]) * rates[to];
  resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  resultDiv.style.color = "green";

  const now = new Date();
  datetimeDiv.textContent = `Conversión realizada el ${now.toLocaleString()}`;
}

