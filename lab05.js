let ls=prompt("chose your leisures(BMW or Marcedes)");

while (ls != "BMW" && ls != "Marcedes"){
ls=prompt("chose your leisures(cars or Marcedes)");
}


let res='';
if(ls=="BMW"){
    res = '<img style="width:200px;height:300px" src="BMW.jpg" alt="BMW">'
} else{
    res = '<img style="width:200px;height:300px" src="Mercedes.jpg" alt="Marcedes">'
}


let num = prompt("how many do you need?");
let order='';
for(var c =0; c<num; c++){
order+=document.write(res);
}