print(' '.join(map(str,(lambda a, b,c,d:  [i for i in range(a,b+1) if i % d == c])(int(input()), int(input()),int(input()), int(input()) ))))