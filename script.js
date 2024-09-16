const testQuestions = [
    ["Wat is de hoofdstad van Frankrijk?"],
    ["Hoeveel poten heeft een spin?"],
    ["Wat is het grootste meer van Nederland?"],
    ["Noem een Duits automerk"],
    ["Noem een Waddeneiland"],
];

const correctAnswers = [
    ["parijs"],
    ["8"],
    ["ijsselmeer"],
    ["volkswagen", "audi", "opel", "porsche", "bmw", "mercedes"],
    ["texel", "vlieland", "terschelling", "ameland", "schiermonnikoog"],
];

document.getElementById("controleerAntwoorden").addEventListener("click", function () {
    var inputs = document.querySelectorAll('input[type="text"]');

    var alleCorrect = true;

    inputs.forEach(function (input, index) {
        var antwoord = input.value.trim().toLowerCase();
        if (correctAnswers[index].includes(antwoord)) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "lightcoral";
            alleCorrect = false;
        }
    });

    var resultaatDiv = document.getElementById("resultaat");
    resultaatDiv.innerHTML = alleCorrect ? "Alle antwoorden zijn correct!" : "Er zijn foute antwoord(en)";
});