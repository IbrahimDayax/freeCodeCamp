import copy
import random

class Hat:
    def __init__(self, **colors):
        self.contents = []
        self.colors = colors
        for color in colors:
            for i in range(colors[color]):
                self.contents.append(color)

    def draw(self, amount):
        str = []
        if amount < len(self.contents):
            for x in range(0, amount):
                rand =  random.randint(0, len(self.contents) - 1)
                str.append(self.contents[rand])
                self.contents.pop(rand)
            return str
        else:
            str = self.contents.copy()
            self.contents.clear()
            return str


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    xballs = []
    M = 0
    N = num_experiments
    drawn_balls = []

    for i in range(num_experiments):

        for ball in expected_balls:
            for i in range(expected_balls[ball]):
                xballs.append(ball)

        drawn_balls = hat.draw(num_balls_drawn)

        for j in range(len(drawn_balls)):
            if xballs.count(drawn_balls[j]) > 0:
                xballs.remove(drawn_balls[j])

        if len(xballs) == 0:
            M = M + 1
        else: 
            xballs.clear()

        hat = Hat(**hat.colors)

    print(f"Successful Experiments (M) = {M}, Total Experiments (N) = {N}")
    return M/N


# Testing
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={'red':2,'green':1},
                  num_balls_drawn=5,
                  num_experiments=2000)
print(probability)
