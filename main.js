'use strict';

const handler = () => {
    const salaryForm = document.getElementById('salary').value;
    const rentForm = document.getElementById('rent').value;

    let different = salaryForm - rentForm;
    let percent = ((salaryForm - rentForm) / salaryForm) * 100;

    let h2 = document.createElement('h2');
    h2.innerHTML = `Остаётся ${different} грн или ${percent}% от зарплаты`;
    document.body.append(h2);
};

const button = document.getElementById('btn');
button.addEventListener('click', handler);
