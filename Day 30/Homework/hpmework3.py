def strings():
    strs = ["sandro","saba","ioane","niko"]
    random_list = []
    for string in strs:
        if len(string) % 2 ==0:
            print(string.upper())
        random_list.append(string)
    else:
        print(string.lower())
        

strings()


