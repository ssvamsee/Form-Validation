function reportCard() {
    event.preventDefault()
   var stName = document.getElementById("studentName").value
   var s1 = parseInt(document.getElementById("sub1").value)
   var s2 = parseInt(document.getElementById("sub2").value)
   var s3 = parseInt(document.getElementById("sub3").value)
   var s4 = parseInt(document.getElementById("sub4").value)
   var s5 = parseInt(document.getElementById("sub5").value)
   var s6 = parseInt(document.getElementById("sub6").value)
   var total = s1 + s2 + s3 + s4 + s5 + s6
   var gender = document.getElementsByName("gender");
   var title = document.getElementsByName("marital")
    if (s1 >= 0 && s1 <= 100 &&
        s2 >= 0 && s2 <= 100 &&
        s3 >= 0 && s3 <= 100 &&
        s4 >= 0 && s4 <= 100 &&
        s5 >= 0 && s5 <= 100 &&
        s6 >= 0 && s6 <= 100) {
        if (s1 >= 35 && s1 <= 100 &&
            s2 >= 35 && s2 <= 100 &&
            s3 >= 35 && s3 <= 100 &&
            s4 >= 35 && s4 <= 100 &&
            s5 >= 35 && s5 <= 100 &&
            s6 >= 35 && s6 <= 100) {
            result = "Passed";
        } else {
            result = "Failed";
        }
        document.getElementById("totalMarks").value=total

    } else {
        alert("Please Enter Valid Marks")
    }


    if (gender[0].checked) {
        document.getElementById("showData").innerHTML = (`Hey Mr.${stName}! You have ${result} and your total marks are ${total}`)
    } else if (gender[1].checked) {
        if (title[0].checked) {
            var tit = title[0].value
            document.getElementById("showData").innerHTML = (`Hey ${tit}.${stName}! You have ${result} and your total marks are ${total}`)
        } else {
            var tit = title[1].value
            document.getElementById("showData").innerHTML = (`Hey ${tit}.${stName}! You have ${result} and your total marks are ${total}`)

        }
    }


}
reportCard();
