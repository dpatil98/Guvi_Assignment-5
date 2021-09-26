/* Name Dhananjay Patil 
    Batch : B28*/

// Do the below programs in arrow functions
    // Print odd numbers in an array
    // Convert all the strings to title caps in a string array
    // Sum of all numbers in an array
    // Return all the prime numbers in an array
    // Return all the palindromes in an array
    
    console.log("------------------------");
    console.log("Q3. Using Arrow Function");
    console.log("------------------------");
    console.log("A) Print odd numbers in an array");
  
    
        var oddnumbers = (nums) => nums.filter( (n) => n%2!==0);
        console.log( oddnumbers([1,2,3,4,5]) ) ;
    
    console.log("----------------------------------------------------");


    console.log("B) Convert all the strings to title caps in a string array");
   
    
        title_Upper = str1 => str1.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
        console.log( title_Upper("welcome to guvi classes.") );
    
 
    
    
    console.log("----------------------------------------------------");
    
    
    
    
    console.log("C). Sum of all numbers in an array");

    
        sumation = (sumnum) =>sumnum.reduce((currN,sum) =>sum+=currN ,0)
                
        console.log( sumation([1,2,3,4]) );
    

    
    
    console.log("----------------------------------------------------");
    
    
    
    console.log("D). Return all the prime numbers in an array");
  
    
        is_prime = Dnums => Dnums.filter(n => {
    
                                                i=1;
                                                count=0;
                                                while(n!==i)
                                                {
                                                    if(n%i===0)
                                                    {
                                                        count++;
                                                    }
                                                    i++;
                                                }
                                                if(count<2){return n};
                  })
    
        console.log( is_prime([1,2,3,4,5,6,7,8,9]))
    

    
    
    console.log("----------------------------------------------------");
    
    
    
    
    console.log("E). Return all the palindromes in an array");

    
        let palindromeArrow = pali_str =>  pali_str.filter(s => (s.split("").reverse().join("")===s ))     
        console.log(palindromeArrow(['nitin','mam','laptop','guvi']));
    

    
    
    console.log("----------------------------------------------------");

