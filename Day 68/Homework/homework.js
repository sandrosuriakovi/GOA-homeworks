function duplicateCount(text){
    const lowerText = text.toLowerCase();//სტრიქონის ყველა სიმბოლო გადაყავთ პატარა ასოებად, რომ შემთხვევითი ასოები იგნორირდეს (მაგალითად, 'A' და 'a' ერთი და იგივე იყოს).
    const duplicates = [];//ქმნით ცარიელ მასივს, სადაც შეინახება უკვე ნაპოვნი დუბლირებული სიმბოლოები.
    
    for(let i = 0; i < text.length; i++){//პირველ ლუპში გატარებულია თითოეული სიმბოლო სტრიქონიდან.
      let count = 0;//ყოველი სიმბოლოსთვის ცვლადი count ინიციალიზდება, რომ გაითვალოს რამდენჯერ ჩანს ეს სიმბოლო.
      
      for(let x = 0; x < text.length; x++){//მეორე ლუპი გადის სტრიქონს თავიდან ბოლომდე, რათა შეამოწმოს რამდენჯერ ემთხვევა პირველი ლუპის სიმბოლო სხვა სიმბოლოებს.
        if(lowerText[i] === lowerText[x]) {//თუ სიმბოლოები ემთხვევა, ითვლება მათი რაოდენობა.
          count++;
        }
      }
      
      if(count > 1 && !duplicates.includes(lowerText[i])){//თუ სიმბოლო ორჯერ ან მეტჯერ გაითვალა და ჯერ მასივში duplicates არ არის, მას დამატებს მასივში.
        duplicates.push(lowerText[i])//
      }
    }
    
    return duplicates.length;//აბრუნებს დუბლირებული სიმბოლოების რაოდენობას (იგივე, რაც duplicates მასივის სიგრძეა).
  }




  //მსგავსი


  function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = {};
    let duplicates = 0;
  
    for (let char of lowerText) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let count in charCount) {
      if (charCount[count] > 1) {
        duplicates++;
      }
    }
  
    return duplicates;
  }
  