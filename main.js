
function toggleCC(moduleNumber) {
    const coef = parseFloat(document.getElementById(`coef${moduleNumber}`).value) || 0;
    const ccField = document.getElementById(`cc${moduleNumber}`);

    if (coef === 1) {
        ccField.value = ""; // Clear CC field if coefficient is 1
        ccField.disabled = true; // Disable CC field
    } else {
        ccField.disabled = false; // Enable CC field for coefficients > 1
    }
}

function calculateAverage() {
    let totalWeightedSum = 0;
    let totalCoefficients = 0;

    for (let i = 1; i <= 12; i++) {
        const coef = parseFloat(document.getElementById(`coef${i}`).value) || 0;
        const cc = parseFloat(document.getElementById(`cc${i}`).value) || 0;
        const exam = parseFloat(document.getElementById(`exam${i}`).value) || 0;

        if (coef > 0) { // Include only modules with a valid coefficient
            const moduleAverage = coef === 1 ? exam : (cc + 2 * exam) / 3;
            totalWeightedSum += moduleAverage * coef;
            totalCoefficients += coef;
        }
    }



    const finalAverage = totalCoefficients > 0 ? (totalWeightedSum / totalCoefficients).toFixed(2) : 0;
  
    let comment = ""
    if(finalAverage >= 10){
        comment = "bsahtk 👋😄"
    }else{
        comment = "Rattrapage 😂"
    }

    document.getElementById("result").textContent = `You get : ${finalAverage}......!${comment}`;
    
}

