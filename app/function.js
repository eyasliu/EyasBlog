function htmlencode(s){  
    var div = document.createElement('div');  
    div.appendChild(document.createTextNode(s));  
    return div.innerHTML;  
}  
function htmldecode(s){  
    var div = document.createElement('div');  
    div.innerHTML = s;  
    return div.innerText || div.textContent;  
}  
function clearCache(){
    localStorage.clear();
    location.reload() 
}