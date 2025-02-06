 // Program task 3;
 /* A program that calculates addition , subtraction, multiplication,division , 
  and  remainder of 2  numbers. */
  //Declaring  all variables,
   var num1, num2 ,sum, sub ,mul, dev, rem;
   /*getting num1 and num2 and also converting them  into integer. remember the defult data type  data type of prompt is string. */
   num1= parseInt(prompt("Enter Your Frist Number :"));
   num2= parseInt(prompt("Enter Your Second Number :"));
   //we could convert it like folloing ;
   //num1= PraseInt(num1,10);
   //calculating the and then printing the result 
   sum= num1+num2;
   document.write('Addidition :' +sum + "</br>");
   //calculation the sub and then printing the result 
   sub = num1 -num2;
   document.write ("Subtraction =" +sub + "</br>");
   //calculating the multiplication  and then printing the result;
    mul = num1*num2;
    document.write ("Multiplication =" +mul + "</br>");
    //calculating the Devision  and then printing the result;
    dev = num1/num2;
    document.write ("Devision = " + dev +"</br>");
      //calculating the remainder  and then printing the result;
      dev = num1%num2;
      document.write ("Remainder = " + dev +"</br>")