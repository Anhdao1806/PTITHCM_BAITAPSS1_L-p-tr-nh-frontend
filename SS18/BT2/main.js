let mathScores = prompt("Nhập điểm môn Toán");
mathScores = Math.floor(mathScores);
let literatureScore = prompt("Nhập điểm môn Văn");
literatureScore = Math.floor(literatureScore);
let englishSubjectScores = prompt("Nhập điểm môn Anh");
englishSubjectScores = Math.floor(englishSubjectScores);
let averageScore = ((mathScores + literatureScore + englishSubjectScores)/3);

if (averageScore >= 8){
    alert("Xếp loại giỏi");
}
else if ( averageScore>=6.5 || averageScore<=7.9) {
    alert("Xếp loại khá");
}
else if ( averageScore>=5.0 || averageScore <=6.4){
    alert("Xếp loại trung bình");
}
else { 
    alert("Xếp loại yếu");
}