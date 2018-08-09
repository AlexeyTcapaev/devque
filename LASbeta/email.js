var request = new ActiveXObject("Msxml2.XMLHTTP.3.0");
var url = "http://10.78.5.144/email.php";
request.open("GET", url);
request.send(null);
WScript.Sleep(500); // чтобы скрипт не завершился, прежде чем запрос уйдет в сеть