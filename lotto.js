//주석은 이렇게
var ball = [];

while (ball.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);

  //중복 없이 6개 넣을 수 있도록 하자
  //num을 갖고있는 배열이 없으면 indexOf(num)==-1
  if (ball.indexOf(num) == -1) ball.push(num);
}
ball.sort((a, b) => a - b); //오름차순 정렬
//document.write(ball);
document.write("<div class='ball ball0'>" + ball[0] + "</div>");
document.write("<div class='ball ball1'>" + ball[1] + "</div>");
document.write("<div class='ball ball2'>" + ball[2] + "</div>");
document.write("<div class='ball ball3'>" + ball[3] + "</div>");
document.write("<div class='ball ball4'>" + ball[4] + "</div>");
document.write("<div class='ball ball5'>" + ball[5] + "</div>");
