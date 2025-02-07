function gradeCalc(marks){
    if(marks >= 90){
        return "A";
    }
    else if(marks >= 80){
        return "B"
    }
    else if(marks >= 70){
        return "C"
    }
    else if(marks >= 60){
        return "D"
    }
    else{
        return "F"
    }
}

let marks = 85
console.log(gradeCalc(marks))