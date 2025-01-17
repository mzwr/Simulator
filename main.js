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


//percentage choces
const selectElement = document.getElementById("choices");  
const examValue = document.getElementById("examValue");
const ccValue = document.getElementById("ccValue");
let percentageOfExam = 0.6;
let percentageOfCC = 0.4;

selectElement.addEventListener('change', function () {
    if (selectElement.value === 'option1') {

        examValue.textContent = '60';
        percentageOfExam = 0.6;

        ccValue.textContent = '40';
        percentageOfCC = 0.4;

    } else if (selectElement.value === 'option2') {

        examValue.textContent = '50';
        percentageOfExam = 0.5;

        ccValue.textContent = '50';
        percentageOfCC = 0.5;
        
    } else if(selectElement.value === 'option3'){
        examValue.textContent = '70';
        percentageOfExam = 0.7;

        ccValue.textContent = '30';
        percentageOfCC = 0.3;
    }
});


function calculateAverage() {
    let totalWeightedSum = 0;
    let totalCoefficients = 0;

    for (let i = 1; i <= 12; i++) {
        const coef = parseFloat(document.getElementById(`coef${i}`).value) || 0;
        const cc = parseFloat(document.getElementById(`cc${i}`).value) || 0;
        const exam = parseFloat(document.getElementById(`exam${i}`).value) || 0;

        if (coef > 0) { // Include only modules with a valid coefficient
            let moduleAverage;

            if (coef === 1) {
                // If coefficient is 1, exam contributes 100%
                moduleAverage = exam;
            } else {
                // If coefficient is greater than 1, CC = 40% and Exam = 60%
                moduleAverage = (percentageOfCC * cc) + (percentageOfExam * exam);
            }

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

    document.getElementById("result").textContent = `Your get: ${finalAverage}.... ${comment}`;
}
 
