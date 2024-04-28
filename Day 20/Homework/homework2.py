numbers = []
numbers_list = []


for _ in range (5):
    num = int(input("enter a number:"))
    numbers.append(num)



for number in numbers_list:
    count = numbers_list.count(number)
    if count > 1 and number is not  numbers:
        numbers.append(number)
print(numbers)