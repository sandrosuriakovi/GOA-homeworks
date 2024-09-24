#1.
#def pig_it(text):
#    words = text.split()
#    result = []
    
#    for word in words:
#        if word.isalpha():  
#            pig_word = word[1:] + word[0] + "ay"
#            result.append(pig_word)
#        else:
#            result.append(word)
    
#    return " ".join(result)


#2.

#def duplicate_encode(word):
    
#    word = word.lower()
#    return ''.join('(' if word.count(char) == 1 else ')' for char in word)




#3.

#def name_shuffler(str_):
#    return ' '.join(str_.split()[::-1])

