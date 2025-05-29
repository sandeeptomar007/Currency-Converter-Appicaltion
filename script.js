const amountInput = document.getElementById('amountInput');
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        const convertBtn = document.getElementById('convertBtn');
        const resultDisplay = document.getElementById('resultDisplay');

        // Hardcoded exchange rates (for demonstration purposes)
        // Rates are relative to USD. For example, 1 USD = 0.85 EUR, so 1 EUR = 1 / 0.85 USD.
        const exchangeRates = {
            USD: 1.0,
            EUR: 0.92, // 1 USD = 0.92 EUR (approx)
            GBP: 0.79, // 1 USD = 0.79 GBP (approx)
            JPY: 156.98, // 1 USD = 156.98 JPY (approx)
            INR: 83.47  // 1 USD = 83.47 INR (approx)
        };

        /**
         * Performs the currency conversion based on selected currencies and amount.
         */
        function convertCurrency() {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;

            // Basic validation
            if (isNaN(amount) || amount <= 0) {
                resultDisplay.textContent = 'Please enter a valid amount.';
                resultDisplay.classList.remove('text-blue-800');
                resultDisplay.classList.add('text-red-600');
                return;
            }

            resultDisplay.classList.remove('text-red-600');
            resultDisplay.classList.add('text-blue-800');

            // Convert 'from' currency to USD first
            const amountInUSD = amount / exchangeRates[fromCurrency];

            // Then convert from USD to 'to' currency
            const convertedAmount = amountInUSD * exchangeRates[toCurrency];

            // Display the result, formatted to 2 decimal places
            resultDisplay.textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
        }

        // Event listener for the Convert button
        convertBtn.addEventListener('click', convertCurrency);

        // Optional: Perform conversion on initial load
        window.onload = () => {
            convertCurrency();
        };
