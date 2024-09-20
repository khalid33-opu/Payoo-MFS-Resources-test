// add money to the account
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {

        // page reload

        event.preventDefault();
        console.log('money add button click');

        const inputAddMoney = document.getElementById('input-add-money').value;
        console.log(inputAddMoney);

        // get the pin number

        const pinNumberInput = document.getElementById('input-pin-number')
        console.log(pinNumberInput);

        // verify pin

        if (pinNumberInput === '1234') {
            console.log('adding money to your account');


            // grt the currant balance

            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);

            // add money input with money
            const newBalance = balance + inputAddMoney ;
            console.log(newBalance);

        }
        else {
            alert('failed to add money ! please tey again')
        }


    })