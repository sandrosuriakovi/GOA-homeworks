#Demonstrate an infinite loop and how to stop it.
# Infinite loop
i = 1
while True:
    print(i)
    i += 1
    if i > 5:
        break
