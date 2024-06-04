function viewdate(){
    var dateObj=new Date();
    var date=dateObj.getDate();
    var month=dateObj.getMonth()+1;
    var year=dateObj.getFullYear();
    var h=dateObj.getHours();
    var m=dateObj.getMinutes();
    var ss=dateObj.getSeconds();
    document.getElementById("time").innerHTML="Time : "+h+"-"+m+"-"+ss;
    document.getElementById("date").innerHTML="Date : "+date+"-"+month+"-"+year;


}setInterval(viewdate,1000)