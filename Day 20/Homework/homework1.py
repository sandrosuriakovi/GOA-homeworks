word = input("enter a word:")


start_index = 0
end_index = len(word)-1

while start_index < end_index:
    if word[start_index] != word[end_index]:
        print(word, "is not a palindrome")
        break
    start_index += 1
    end_index -=1
else:
    print(word,"is a palindrome")


