const display = document.getElementById("display");

// Adiciona valor no display
function appendValue(value) {
  display.value += value;
}

// Limpa o display
function clearDisplay() {
  display.value = "";
}

// Apaga o último caractere
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calcula a expressão
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}
