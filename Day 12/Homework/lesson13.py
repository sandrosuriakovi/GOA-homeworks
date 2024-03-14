age=int(input("please enter your age:"))
if age < 18: 
  print("yure yung")
elif age >= 75: 
  print("yure old")
else:
  print("you have grown")

temperature = int(input("temperature is:"))
if temperature > 30:
    print("its hot")
elif temperature < 0:
    print("its cold")
else:
    print("its warm")

heart_rate = int(input("heart rate is:"))

if heart_rate < 50:
    print("youre heart rate is low")
elif heart_rate > 100:
    print ("youre heart rate is high")
else:
    print("youre heart rate is normal")


user_eats=input("tell us what tipe of food do you eat:")

if user_eats == "fastfood":
    print("youre fat")
elif user_eats =="home made food":
    print("youre a goat")
else:
    if user_eats == "i dont want to tell":
     print("then youre fat")

grades = int(input("enter the pupils grade:"))

if grades > 7:
    print ("youre grades are good")
elif grades > 5:
    print ("youre grades are ok")
else:
    if grades < 5:
     print("youre grades are bad")


