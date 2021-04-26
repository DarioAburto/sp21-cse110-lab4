## part-1a

1. line 9 will return 20 
2. line 13 will also return 20 since "var" has no scope and the declaration is processed at the start of the function
3. line 9 will return 20 
4. line 13 will return an error because the variable declaration is only visible in the if statement because it was declared with "let"
5. it returns an error because the variable was declared with the const keyword which means that it can not be reassigned, but we tried to reassign the value at line 5 ( result = num1 + num2)
6. it returns an error because the variable was declared with the const keyword which means that it can not be reassigned, but we tried to reassign the value at line 5 ( result = num1 + num2)

## part-1b

1. line 12 will return 3 since the variable i was declared with the keyword "var" and since the loop runs 3 times  
2. line 13 will return 150 since during the last itertion of the for loop this is the value that gets assigned to discountedPrice. It was also declared with the keyword "var" so it can be used outside the for loop
3. line 14 will return 150 since during the last itertion of the for loop this is the value that gets assigned to finalPrice. It was also declared with the keyword "var" so it can be used outside the for loop
4. it will return [50, 100, 150] needs colsole.log() to print out the return value )
5. it returns an error since the variable i was declared with let which means that it is out of scope when it is called in line 12
6. it returns an error since the variable discountedPrice was declared with let which means that it is out of scope when it is called in line 13
7. line 14 returns 150. Since it was declared outside of the for loop with the keyword let, it was able to be used when called again
8. it returns [50, 100, 150] ( needs colsole.log() to print out the return value )
9. it returns an error since the variable i was declared with let which means that it is out of scope when it is called in line 12
10. line 12 it will return 3 since that was the length of the input when it was declared with const 
11. it returns [50, 100, 150] ( needs colsole.log() to print out the return value )
12. 
    a. student.name  
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorite Teacher'].name 
    e. student.courseLoad

13. 
    a. '32' since + is used to concatenate strings together
    b. '1' since you cant subtract strings to it turns '3' into an int
    c. 3 since null has an int value of 0
    d. 3null since it concatenates 3 with null because of the + operator 
    e. 4 since true has an int value of 1 
    f. 0 since both false and null have an int value of 0 
    g. 3undefined since it concatenates 3 with undefined because of the + operator 
    h. NaN since you can't subtract strings and undefined has a value of NaN

14. 
    a. true since '2' becomes a number an 2 > 1 
    b. false since it compares the first character of both strings and 1 < 2 therefore it returns false
    c. true since '2' becomes a number 
    d. false since === is a strict comparison and since 2 and '2' are of different types it returns false immediately 
    e. false since true has a number value of 1 and 1 does not equal 2 
    f. true since Boolean(value) returns true for any value that is not zero and true === true 

15. === is a strict comparison that checks of the two things being compared are of the same type and if they arent it returns false immediately. == checks if two things are equal regardless of types 
    
16. js file 
17. The result will be [2,4,6]. The function will loop for the length of the input array then it will call the doSomething function on each value of the input array and push that new value into a new array. Since doSomething multiplies a number by 2, then the result array will be [2,4,6].
18. js file 
19. 1432 gets printed. This is because console.log(1) gets printed first, then console.log(2) will be placed in the queue and be pinted out after a 1 second, console.log(3) gets placed in the queue and will be printed after 0 seconds, and console.log(4) gets printed right after 1 since it was not placed in a queue. 


