name = "sandro"
string = ""

for i in range(0,len(name)):
    if i % 2 != 0:
        string += name[i]
print(string)