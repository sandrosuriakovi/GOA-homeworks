def manual_index(numbers_list,search_value):    #პარამეტრები
    if search_value not in numbers_list:        #თუ  არ  არის გარკვეული მნიშვნელობა სიაში დააბრუნებს -1
        return -1
    for i in range(0,len(numbers_list)):        #ქმნის დიაპასსონს რომელიც გვეუბნება რამდენი მნიშვნელობაა სიაში
        if search_value == numbers_list[i]:     #თუ გარკვეული მნიშვნელობა სიაში არის პრინტავს და საბოლოო შედეგს აბრუნებს
            print(i)
            return i
        
manual_index([1,2,3,4,5,6,7,8,9,10],10)