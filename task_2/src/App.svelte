<script lang="ts">
  let amount: number = 0;

function convertCurrency(): void {
  const currency1: string = (document.getElementById("currency1") as HTMLSelectElement).value;
  const currency2: string = (document.getElementById("currency2") as HTMLSelectElement).value;

  const url: string = `https://v6.exchangerate-api.com/v6/7c2fc9ec06675114690aadd8/latest/${currency1}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const exchangeRate: number = data.conversion_rates[currency2];
      const result: number = amount * exchangeRate;

      (document.getElementById("result") as HTMLInputElement).value = result.toFixed(2);
    })
    .catch(error => {
      console.error("Ошибка при выполнении запроса к API:", error);
    });
}
</script>


<div class="container">
  <h1>Конвертер валют</h1>

  <div>
    <label for="currency1">Первая валюта:</label>
    <select id="currency1">
      <option value="RUB">Рубли</option>
      <option value="USD">Доллары</option>
    </select>
  </div>

  <div>
    <label for="currency2">Вторая валюта:</label>
    <select id="currency2">
      <option value="RUB">Рубли</option>
      <option value="USD">Доллары</option>
    </select>
  </div>

  <div>
    <label for="amount">Сумма:</label>
    <input type="number" id="amount" bind:value={amount} on:input={convertCurrency}>
  </div>

  <div>
    <label for="result">Результат:</label>
    <input type="text" id="result" readonly class="result">
  </div>
</div>


<style>

</style>
