const gradeInput = document.getElementById('grade-input');
const histogramTable = document.querySelector('#histogram table');
const boundInputs = document.getElementsByClassName('bound-input');

var grades = new Array();
var tally = [0,0,0,0,0,0,0,0,0,0,0];
var gradeBounds = [100,95,90,85,80,75,70,65,60,55,50,0];
var gradeBoundsCheck = new Array();

var max = 100;
var aplus = 95;
var a = 90;
var aminus = 85;
var bplus = 80;
var b = 75;
var bminus = 70;
var cplus = 65;
var c = 60;
var cminus = 55;
var d = 50;
var f = 0;





function refreshTally() {
    for (var j=0; j<tally.length; j++) {
        tally[j] = 0;
    }
    for (var i=0; i<grades.length; i++) {
        var g = grades[i];
        switch (true) {
            case g <= gradeBounds[0] && g >= gradeBounds[1]:
                tally[0]++;
                break;
            case g < gradeBounds[1] && g >= gradeBounds[2]:
                tally[1]++;
                break;
            case g < gradeBounds[2] && g >= gradeBounds[3]:
                tally[2]++;
                break;
            case g<gradeBounds[3] && g>=gradeBounds[4]:
                tally[3]++;
                break;
            case g<gradeBounds[4] && g>=gradeBounds[5]:
                tally[4]++;
                break;
            case g<gradeBounds[5] && g>=gradeBounds[6]:
                tally[5]++;
                break;
            case g<gradeBounds[6] && g>=gradeBounds[7]:
                tally[6]++;
                break;
            case g<gradeBounds[7] && g>=gradeBounds[8]:
                tally[7]++;
                break;
            case g<gradeBounds[8] && g>=gradeBounds[9]:
                tally[8]++;
                break;
            case g<gradeBounds[9] && g>=gradeBounds[10]:
                tally[9]++;
                break;
            case g<gradeBounds[10] && g>=gradeBounds[11]:
                tally[10]++;
                break;
        }
    }
}

function drawTally() {

}

gradeInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const value = parseFloat(gradeInput.value);
        if (isNaN(value) || value < 0 || value > 100) {
            alert("Please enter a valid grade between 0 and 100.");
        }
        else {
            alert("Number succesfully added");
            grades.push(value);
            refreshTally();
            drawTally();
            console.log(tally);
            console.log(grades);
        }
    }
} );

for (var i = 0; i < boundInputs.length; i++) {
    boundInputs[i].addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            for (var k=0; k<boundInputs.length; k++) {
                const value = parseFloat(boundInputs[k].value);
                gradeBoundsCheck.push(value);
            }
            var update = true;
            for (var j=1; j<gradeBoundsCheck.length-1; j++) {
                var arr = gradeBoundsCheck;
                console.log("br");
                if (arr[j].value >= arr[j-1].value && arr[j].value <= arr[j+1].value) {
                    update = false;
                    alert("Invalid inputs, bounds have not been changed.");
                }
            }
            if (update == true) {
                gradeBounds = gradeBounds.concat(gradeBoundsCheck);
            }
        }
        console.log(gradeBounds);
    })
}

