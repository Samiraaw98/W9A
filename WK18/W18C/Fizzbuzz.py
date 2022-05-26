
num = 15
if (num % 3==0 and num % 5==0):
    print ("FIZZBUZZ")
elif (num % 3==0):
     print("FIZZ")
elif(num % 5 ==0):
    print("BUZZ")

div_nums= [2,3,6,9,10,12,15,20,22,23,30,35,37,42,50,55]
for num in div_nums:
    if (num % 5==0 and num % 3==0):
        print("FIZZBUZZ")
        
    elif (num % 3==0):
        print("FIZZ")
        
    elif(num % 5 ==0):
        print("BUZZ")
        
    else :
        print("not divisible but either")



 
