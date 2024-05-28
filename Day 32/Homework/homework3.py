def manual_pop(lst, index):
    """აბრუნებს სიას, სადაც მითითებული index-ის წაშლილია."""
    if index < 0 or index >= len(lst):  # თუ index არ არის სწორი
        return lst[:]  # აბრუნებს სიის კოპიას
    new_lst = lst[:index] + lst[index+1:]  # ახალი სია ბეჭდავს წასაშლელი ელემენტის გარეშე
    return new_lst  # აბრუნებს ახალი სიას