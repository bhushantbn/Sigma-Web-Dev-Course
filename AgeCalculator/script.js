function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;

    if (birthdate === "") {
        alert("Please enter your birthdate");
        return;
    }

    var today = new Date();
    var birthDate = new Date(birthdate);

    if (birthDate > today) {
        alert("Birthdate cannot be greater than today's date");
        return;
    }

    var remainingMilliseconds = birthDate - today;

    var remainingSeconds = Math.abs(remainingMilliseconds) / 1000;
    var remainingMinutes = remainingSeconds / 60;
    var remainingHours = remainingMinutes / 60;
    var remainingDays = remainingHours / 24;
    var remainingMonths = remainingDays / 30.44; // Approximate average month length
    var remainingYears = remainingDays / 365.25; // Approximate average year length with leap years

    remainingDays = Math.floor(remainingDays);
    remainingMonths = Math.floor(remainingMonths);
    remainingYears = Math.floor(remainingYears);

    document.getElementById("result").innerHTML =
        "You have " +
        remainingDays +
        " days, " +
        remainingMonths +
        " months, and " +
        remainingYears +
        " years remaining until your next birthday";
}
