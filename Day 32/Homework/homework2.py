def manual_max(numbers):
    """აბრუნებს სიიდან მაქსიმალურ რიცხვს."""
    if not numbers:  # თუ სია ცარიელია
        return None  # აბრუნებს None-ს
    max_num = numbers[0]  # პირველი რიცხვის მნიშვნელობით ვიწყებთ
    for num in numbers:  # ყველა რიცხვზე დავაკვირდებით სიის გარეშე
        if num > max_num:  # თუ რიცხვი მეტია მაქსიმალურ რიცხვზე
            max_num = num  # შეინახავს რიცხვს მაქსიმუმის მნიშვნელობად
    return max_num  # აბრუნებს მაქსიმუმს

