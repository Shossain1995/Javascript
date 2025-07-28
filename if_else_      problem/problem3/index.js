// 3. Calculate grade based on average marks of 5 subjects
// Algorithm:
// Input marks of 5 subjects

// Calculate average

// If avg > 80 → A+

// Else if avg > 70 → A

// Else if avg > 60 → B

// Else if avg > 50 → C

// Else if avg > 40 → D

// Else → F

var ban=5,eng=6,math=20,science=60,gen=80,avg_num;
avg_num=(ban+eng+math+science+gen)/5;

if(avg_num>=80){
      document.write("The result is "+avg_num+"  Grade = A+");
}
else if(avg_num>=70){
      document.write("The result is "+avg_num+"  Grade = A");
}
else if(avg_num>=60){
      document.write("The result is "+avg_num+"  Grade = B");
}
else if(avg_num>=50){
      document.write("The result is "+avg_num+"  Grade = C");
}
else if(avg_num>=40){
      document.write("The result is "+avg_num+"  Grade = D");
}
else {
      document.write("The result is "+avg_num+"  Grade = F");
}

