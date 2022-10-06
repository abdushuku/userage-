var userage = +prompt("Yoshingizni kiriting")
var age = Number(userage)
if( age > 0 && age<=18){
    alert("Yoshsiz. O'qishingiz kerak")
}else if(age > 19 && age <=50){
    alert("Ishlahsingiz kerak")
}else if (age > 50 &&  age<=59){
    alert('Yaqinda pensiyaga chiqasiz')
}else if (age > 59 && age <=150){
    alert("Pensiyanerga o'xshaysiz , hali tirik bo'lsangiz :)")
}else {
    alert('Nimadur xato ketib qoldi')
}