def lists ():
    strings = ["vano" , "nika" , "bubazi" , "zauri"]
    even = []
    odd = []
    
    for string in strings:
        if len(string) % 2 == 0:
            even.append(string.upper())
            
        else:
            odd.append(string.upper())
            return odd,even
        print(even)
        print(odd)
lists()
