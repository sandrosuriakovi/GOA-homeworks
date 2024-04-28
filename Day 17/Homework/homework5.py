nums = [1,2,3,4,5,6,7,8,9,10]
result = 0
nums_multiplied = 1


for num in nums:
    if num % 2 != 0:
        result += num
        nums_multiplied *= num
print(result)
print(nums_multiplied)