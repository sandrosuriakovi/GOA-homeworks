def transform_numbers(numbers):
    updated_list = []
    for num in numbers:
        if num % 2 ==0:
            updated_list.append(num // 2)
        else:
            updated_list.append(num * 2)
    print(updated_list)

transform_numbers([10,15,40,35,17])





