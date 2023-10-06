const puppeteer = require('puppeteer');

async function capturarTemperatura() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Navegue para o site que contém informações sobre a temperatura
    await page.goto('https://openweathermap.org/city/3406334'); // Substitua com o URL correto

    // Use seletor CSS ou XPath para encontrar o elemento que contém a temperatura
    const temperaturaElement = await page.$('.classe-da-temperatura'); // Substitua com o seletor correto

    if (temperaturaElement) {
      const temperatura = await temperaturaElement.evaluate(element => element.textContent.trim());
      console.log(`A temperatura atual é: ${temperatura}`);
    } else {
      console.log('Elemento de temperatura não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao capturar temperatura:', error);
  } finally {
    await browser.close();
  }
}

capturarTemperatura();
