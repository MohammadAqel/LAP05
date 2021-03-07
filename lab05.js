let ls=prompt("chose your leisures(cars or animals)");

while (ls != "cars" && ls != "animals"){
ls=prompt("chose your leisures(cars or animals)");
}


let res='';
if(ls=="cars"){
    res = '<img style="width:200px;height:300px" src="Mercedes.jpg" alt="car">'
} else{
    res = '<img style="width:200px;height:300px" src="kitten-440379.jpg" alt="cat">'
}


let num = prompt("how many do you need?");
let order='';
for(var c =0; c<num; c++){
order+=document.write(res);
}