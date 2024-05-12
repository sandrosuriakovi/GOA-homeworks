#შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია.
# თქვენი დავალებაა, რომ დააბრუნოთ ამ სიის განახლებული ვერსია, სადაც ყველა სახელი დიდი ასოთი დაიწყება.

def capitalize_names(names):
    capitalize_names = [name[0].upper() + name[1:] for name in names]
    print(capitalize_names)

capitalize_names(["luka","nuka","sandro","lizi"])




