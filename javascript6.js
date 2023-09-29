document.getElementById("calculateButton").addEventListener("click", function () {
    const totalBill = parseFloat(document.getElementById("totalBill").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  
    if (isNaN(totalBill) || isNaN(tipPercentage)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }
  
    const tipAmount = totalBill * (tipPercentage / 100);
    const totalAmount = totalBill + tipAmount;
  
    document.getElementById("result").textContent = `Propina: $${tipAmount.toFixed(2)} Total a Pagar: $${totalAmount.toFixed(2)}`;
  });