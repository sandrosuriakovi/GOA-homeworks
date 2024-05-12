def start_end (start,end):
    numbers = []
    for i in range(start,end):
        numbers.append(i)

    result = sum(numbers)/len(numbers)

    print(result)
start_end(1,10)