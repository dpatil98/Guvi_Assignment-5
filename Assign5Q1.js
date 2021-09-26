/*Name: Dhananjay Patil
Batch : B28 */

console.log("Q1.")
// Do the below programs in anonymous function & IIFE

// Print odd numbers in an array //
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of same size
// Remove duplicates from an array
// Rotate an array by k times


console.log("A) Print odd numbers in an array");
console.log("    Anonumous Fucntion :");

    var oddnumbers = function(nums) 
    {
        return nums.filter( (n) => n%2!==0);     
    }

    console.log( oddnumbers([1,2,3,4,5]) ) ;
    

console.log("    IIFE Fucntion :");

   ( function(){
        let nums=[1,2,3,4,5];
     console.log( nums.filter( (n) => n%2!==0))  ;

    }());


console.log("----------------------------------------------------");




console.log("B) Convert all the strings to title caps in a string array");
console.log("    Anonumous Fucntion :");

    title_Upper = function(str1) 
    {
        return str1.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
        
    }

    console.log( title_Upper("welcome to guvi classes.") );

console.log("    IIFE Fucntion :");

   ( function(){

   let str2="welcome to guvi classes.".split(" ");
    console.log( str2.map(s => s.charAt(0).toUpperCase() + s.slice(1)) )

    }());


console.log("----------------------------------------------------");




console.log("C). Sum of all numbers in an array");
console.log("    Anonumous Fucntion :");

    sumation = function(sumnum) {return sumnum.reduce((currN,sum) =>sum+=currN ,0)}
            
    console.log( sumation([1,2,3,4]) );

console.log("    IIFE Fucntion :");

   ( function(){
        let  sumnum2=[1,2,3,4];
        console.log(sumnum2.reduce((currN,sum) =>sum+=currN ,0))

    }());


console.log("----------------------------------------------------");



console.log("D). Return all the prime numbers in an array");
console.log("    Anonumous Fucntion :");

    is_prime = function (Dnums){

              return Dnums.filter(n => {

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
              
    }

    console.log( is_prime([1,2,3,4,5,6,7,8,9]))

console.log("    IIFE Fucntion :");

   ( function(){
   
            Dnums=[1,2,3,4,5,6,7,8,9];
            console.log( Dnums.filter(n => {

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
                );
    


    }());


console.log("----------------------------------------------------");




console.log("E). Return all the palindromes in an array");
console.log("    Anonumous Fucntion :");

    let palindrome = function(pali_str) {    
          return pali_str.filter(s =>  s.split("").reverse().join("")===s )
    }                                 
    
    console.log(palindrome(['nitin','mam','laptop','guvi']));
   

console.log("    IIFE Fucntion :");

   ( function(){
            let palinInput = ['nitin','mam','laptop','guvi'];

           console.log( 
                        palinInput.filter(s => s.split("").reverse().join("")===s) 
                        
                      );   
    }());


console.log("----------------------------------------------------");



console.log("F) Return median of two sorted arrays of same size");
console.log("    Anonumous Fucntion :");


   var median = function(sarr1,sarr2) {

            merged=[];

            for(let ind in sarr1)
            {
                if(sarr1[ind] < sarr2[ind])
                {
                    merged.push(sarr1[ind]);
                    merged.push(sarr2[ind]);
                }
                else
                {
                    merged.push(sarr2[ind]);
                    merged.push(sarr1[ind]);
                }
            }
                     
            return (merged[sarr1.length-1] + merged[sarr1.length] ) /2;
   }

   console.log(median([2,3,8,9],[1,4,5,7]))
 

console.log("    IIFE Fucntion :");

   ( function(){

        let array1 =[2,3,8,9];
        let array2 =[1,4,5,7];
        let mergedarr=[];

        for(let ind in array1)
            {
                if(array1[ind] < array2[ind])
                {
                    mergedarr.push(array1[ind]);
                    mergedarr.push(array2[ind]);
                }
                else
                {
                    mergedarr.push(array2[ind]);
                    mergedarr.push(array1[ind]);
                }
            }
            console.log( (mergedarr[array1.length-1] + merged[array1.length] ) /2 )
    }());


console.log("----------------------------------------------------");



console.log("G) Remove duplicates from an array");
console.log("    Anonumous Fucntion :");

    remv_dub = function(rarr) 
    {   result={};
        rarr.forEach(e => {
                    if(!result[e])
                    {
                        result[e]=e;
                        
                    }
        });
        return Object.values(result);
    }

    console.log(remv_dub([1,2,3,2,4,7,7]))

console.log("    IIFE Fucntion :");

   ( function(){

       let remarr=[1,2,3,2,4,7,7]
        result1={};
        remarr.forEach(e => {
                if(!result1[e])
                {
                    result1[e]=e;
                    
                }
        });
        console.log( Object.values(result1) );

    }());


console.log("----------------------------------------------------");


console.log("H) Rotate an array by k times");
console.log("    Anonumous Fucntion :");

    rotate=function(karr,k)
    {
        for(r=0;r<k;r++)
        {
            temp=karr[0];
            for(i=1;i<karr.length;i++)
            {
                karr[i-1]=karr[i];
            }
            karr[karr.length-1]=temp;
        }
        return karr;
    }
    console.log("Input : [1,2,3,4,5] k : 3 ");
    console.log(rotate([1,2,3,4,5],3));

console.log("    IIFE Fucntion :");

   ( function(){
        let karr1=[1,2,3,4,5];
        let k=3;

        for(r=0;r<k;r++)
        {   
            
            temp1=karr1[0];
            for(i=1;i<karr1.length;i++)
            {
            karr1[i-1]=karr1[i];
            }
            karr1[karr1.length-1]=temp1;
        }
        console.log("Input : [1,2,3,4,5] k : 3 ");
        console.log(karr1);      
        
    }());


console.log("----------------------------------------------------");

