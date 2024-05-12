#შექმენით ფუნქცია, რომელიც დააბრუნებს მარტივია თუ არა რიცხვი (მარტივია რიცხვი, თუ მას მარტო ორი გამყოფი აქვს).
def num(number):
    num = number
    if num % 2 != 0:
        print("your number is simple")
    else:
        print("your number is not simple")
num(44)