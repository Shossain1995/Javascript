   
   var row=parseInt(prompt("Inter Row number"));

//    for(let i=1; i<=row; i++){

//     for(let j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
//    }


for(let i=row; i>=1; i--){
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    document.write(" <br>");
}