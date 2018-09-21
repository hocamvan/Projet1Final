function myFunction(){
    let input, filter, ul, ul2, li, li2, a, i;
    input = document.getElementById("myInput");
    filter =  input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul2 = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    li2 = ul2.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
        }else{
            li[i].style.display = "none";
        }
    }
    for(i = 0; i < li2.length; i++){
        a = li2[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li2[i].style.display ="";
        }else{
            li2[i].style.display = "none";
        }
    }
}