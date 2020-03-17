def factorial(n):
    out = 1
    while(n > 0):
        out *= n
        n -= 1
    return out


print(factorial(5))
