numbers = [34,21,49,27,98]
result = 0
results = 0


for num in numbers:
    if num % 2 == 0:
        result += num
print(result)

for num in numbers:
    if num % 2 != 0:
        results += num
print(results)