
var data=[{
  username:"admin",
  password:"123"
}
]

function getInfo()
{
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;

  for(var i=0;i<data.length;i++)
    {
    if(username == data[i].username && password == data[i].password)
    {
      window.location.assign('\admin.html');
    }

    else if(username != data[i].username && password == data[i].password)
    {
      window.alert("Invalid Username");
    }

    else if(username == data[i].username && password != data[i].password)
    {
      window.alert("Invalid Password");
    }

    else if (username != data[i].username && password != data[i].password)
    {
      window.alert("Fill the details");
    }

    

    }

  }
