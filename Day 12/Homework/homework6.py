num1=int(input("please enter a number:"))
operator = input("enter the operation u want to do (-,+,/,*):")
num2=int(input("please enter a number:"))

if operator =="+":
    result = num1+num2
elif operator == "-":
    result = num1-num2
elif operator == "/":
    result=num1/num2
elif operator == "*":
    result = num1*num2
else:
    print("invalid operation")

print(result)