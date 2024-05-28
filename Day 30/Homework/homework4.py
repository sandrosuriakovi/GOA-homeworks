def modify_list(lst):
    result_list = []
    for item in lst:
        if item.isupper():
            result_list.append(item.lower())
        else:
            result_list.append(item.upper())
    return result_list

test_case = ["vano", "DAVIT", "LUKA", "nika"]
result_list = modify_list(test_case)
print(result_list)
