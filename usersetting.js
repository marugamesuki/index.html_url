function displayInputs() {
    const age = document.getElementById('ageInput').value;
    const weight = document.getElementById('weightInput').value;
    const resultDisplay = document.getElementById('resultDisplay');

    if (!age || !weight) {
        resultDisplay.textContent = "年齢と体重を正しく入力してください。";
        return;
    }

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    let waterIntake = 0;

    if (ageNum <= 5) {
        resultDisplay.textContent = "このアプリの対象年齢外です。";
    } else {
        if (ageNum >= 6 && ageNum <= 12) {
            waterIntake = weightNum * (60 - (ageNum-6)*10/7)-(0.8+0.24);
        } else if (ageNum >= 13 && ageNum <= 17) {
            waterIntake = weightNum * (50 - (ageNum-13)*10/5)-(1+0.3);
        } else if (ageNum >= 18 && ageNum <= 29) {
            waterIntake = weightNum * (40 - (ageNum-18)*5/12)-(1+0.3);
        } else if (ageNum >= 30 && ageNum <= 54) {
            waterIntake = weightNum * (35 - (ageNum-30)*5/25)-(1+0.3);
        } else if (ageNum >= 55 && ageNum <= 64) {
            waterIntake = weightNum * (30 - (ageNum-55)*5/10)-(1+0.3);
        } else if (ageNum >= 65) {
            waterIntake = weightNum * 25-(0.8+0.24);
        }

        resultDisplay.textContent = `年齢: ${ageNum} 歳, 体重: ${weightNum} kg, 目安の水分量: ${waterIntake} ml`;
    }
}