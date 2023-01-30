function getData(dataSource, divID)
{
  var xhr = false;

  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  var obj = document.getElementById(divID);

  xhr.open("POST", dataSource);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () 
  {
    if (xhr.readyState == 4 && xhr.status == 200) {
      obj.innerHTML = xhr.responseText;
    }
  }
  xhr.send(null);
}

function fetchData(sourceData, id)
{
  xhr = false;

  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
  }

  var obj = document.getElementById(id);
  var lname = document.getElementById("name").value;
  var param = "lname=" + lname;

  xhr.open("post", sourceData, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function ()
  {
    if (xhr.readyState == 4 & xhr.status == 200) {
      obj.innerHTML = xhr.responseText;
    }
  }
  xhr.send(param);
} 