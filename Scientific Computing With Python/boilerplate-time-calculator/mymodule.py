# this class defines the structure of our time object
class Time:
    def __init__(self, hours, minutes):
        self.hours = hours
        self.minutes = minutes
    
    def __str__(self):
        return str(self.hours) + ":" + str(self.minutes) + " "
    
def days_passed(hours, pm=False):
    if hours < 24:
        if hours >= 12 and pm == True:
            return 1
        else:
            return 0
    else:
        return days_passed(hours - 24) + 1

# this function determines whether the new time has changed from AM to PM or vice versa
def am_or_pm(am, total_hours):
    if (total_hours/12) % 2 > 0:
        if am:
            return "PM"
        else:
            return "AM"
    else:
        if am:
            return "AM"
        else:
            return "PM"
    