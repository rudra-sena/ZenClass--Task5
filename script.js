var info=document.createElement('div');
info.setAttribute('class', 'info');
var timeZones=document.createElement('div');
document.body.appendChild(timeZones)

document.getElementById('ip').addEventListener('click',()=>{
    info.innerHTML="";
    fetch('https://restcountries.com/v3.1/all')
    .then((response)=>{
        
        return response.json();
    })
    .then((result)=>{
        var time=result.filter((country)=>{
            return country.timezones.length>1;
        })
        time.forEach((country)=>{
            info.innerHTML+="<div>"+country.name.common+"</div>"
            })
        document.body.appendChild(info);
        
    })
    
    
    .catch((error)=>{
        console.error(error)
    })
})
