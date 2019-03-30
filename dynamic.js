function loadJson(file,callback)
{//send request
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json")
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status=="200"){
  callback(xhr.responseText)
  }
}
xhr.send();
}//calling functions
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text)
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
})//profile details
var left=document.querySelector(".left");
function profile(p){
  console.log(p.name);
  var image=document.createElement("img");
  image.src=p.img;
  left.append(image);
  var h2=document.createElement("h4");
  h2.textContent=p.name;
  left.append(h2);
  var h1=document.createElement("h4");
  h1.textContent=p.designation;
  left.append(h1);
  var h3=document.createElement("h4");
  h3.textContent=p.mobile;
  left.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.email;
  left.append(h4);
}//career details
  var right=document.querySelector(".right");
  function career(ca){
    var h1=document.createElement("h3");
    h1.textContent="Career Objectives";
    right.append(h1);
    var hr=document.createElement("hr");
    right.append(hr);
    var pa=document.createElement("p");
    pa.textContent=ca.info;
    right.append(pa);
  }//education details
    function education(ed){
      var h1=document.createElement("h3");
      h1.textContent="Education Details";
      right.append(h1);
      var hr=document.createElement("hr");
      right.append(hr);
      var table=document.createElement("table");
      table.border="2";
      //right.append(table);
      var tr1="<tr><th>Sno</th><th>Name of the institute</th><th>Qualification</th><th>Percentage</th><th>yop</th></tr>";
      var tr2="";
      for(i=0;i<ed.length;i++)
      {
        tr2=tr2+"<tr><td>"+ed[i].Sno+"</td><td>"+ed[i].Nameoftheinstitute+"</td><td>"+ed[i].Qualification+"</td><td>"+ed[i].Percentage+"</td><td>"+ed[i].yop+"</td></tr>";
      }
      table.innerHTML=tr1+tr2;
      right.append(table);
    }
      function skills(sk){
        var ss=document.createElement("h3");
        ss.textContent="Skills";
        right.append(ss);
        var hr=document.createElement("hr");
        right.append(hr);
        var ul=document.createElement("ul");
        for(var i in sk){
          var li=document.createElement("li");
          li.innerHTML=sk[i].name+":"+sk[i].info;
          ul.append(li);
        }
        right.append(ul);
          }
