student_array = [];

function submit() {
    display_array = [];
    for (var j = 1; j <= 4; j++) {
        var student_name = document.getElementById("name_of_the_student_" + j).value;
        student_array.push(student_name);
    }
    console.log(student_array);
    var array_length = student_array.length;
    for (var k = 0; k < array_length; k++) {
        display_array.push("<h4> NAME-" + student_array[k] + "</h4>");

    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_commas = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    student_array.sort();
    display_array = [];
    var array_length = student_array.length;
    for (var k = 0; k < array_length; k++) {
        display_array.push("<h4> NAME-" + student_array[k] + "</h4>");

    }
    console.log(display_array);
    var remove_commas = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
function new_update(){
document.getElementById("display_name_without_commas").innerHTML="<h1>"+ student_array + "</h1>"

}