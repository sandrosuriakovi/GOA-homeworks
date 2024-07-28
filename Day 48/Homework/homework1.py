def smaller(arr):
    result = []   # ვქმნით ცარიელ სიას, სადაც შეინახება შედეგი
    count = 0    
    
    for i in range(len(arr)):  # ვციკლავთ arr სიის თითოეულ ელემენტზე
        for j in range(i + 1, len(arr)):  # ვციკლავთ მარცხნივ მდებარე ელემენტებზე
            if arr[i] > arr[j]:  # ვამოწმებთ, არის თუ არა arr[i] მეტი arr[j]-ზე
                count += 1  # თუ კი, ვზრდით count-ს ერთით
        
        result.append(count)  # შედეგს ვამატებთ სიაში result
        count = 0  # count-ს ვაბრუნებთ ნულზე შემდეგი ელემენტისთვის
    
    return result  # ვაბრუნებთ შედეგს
