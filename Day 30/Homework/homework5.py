def find_and_modify(text):
    index = text.find("n")
    if index % 2 == 0:
        return text.upper()
    else:
        return text.capitalize()

test_case = "vano motiashvili"
result1 = find_and_modify(test_case)
print(result1)

test_case = "luka"
result2 = find_and_modify(test_case)
print(result2)















