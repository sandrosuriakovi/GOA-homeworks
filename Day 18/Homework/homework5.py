numbers = [1,2,3,4,5,6,7,8,9,10]
result = 0
nums_multyplied = 1


for num in numbers:
    if num % 2 != 0:
        print(num)
        result += num
        nums_multyplied *= num
print(nums_multyplied)
print(result)