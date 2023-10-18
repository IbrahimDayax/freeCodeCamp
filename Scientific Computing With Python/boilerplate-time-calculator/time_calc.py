from mymodule import Time
from mymodule import days_passed
from mymodule import am_or_pm

def add_time(start_time, duration, day_of_week=None):
    # store all the weekdays in a tuple to make iteration over them possibe
    weekdays = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    
    # separate the start_time into a List with hours being the first item and minutes being the second
    start_time = start_time.split(":")
    # check if the start_time is AM or PM
    AM = start_time[1].endswith("AM")
    # remove the AM/PM from the start_time List
    start_time[1] = start_time[1].split(" ")[0]
    # separate the duration time into a List with hours being the first item and minutes being the second
    duration = duration.split(":")
    
    # calculate the new total time
    new_time = Time(int(start_time[0]) + int(duration[0]), int(start_time[1]) + int(duration[1]))
    # if the minutes are more than 60 increment the hours by 1 and decrement the minutes by 60
    if new_time.minutes >= 60:
        new_time.hours += 1
        new_time.minutes -= 60
    # if the minutes are less than 10 add a 0 in front of them, eg to get 5:01 instead of 5:1
    if new_time.minutes < 10:
        new_time.minutes = "0" + str(new_time.minutes)

    # calculate the number of days that passed
    days_later = days_passed(new_time.hours, AM) 
    # calculate the new time of day
    time_of_day = am_or_pm(AM, new_time.hours)
      
    if day_of_week:
        # convert the day_of_week string to lowercase then make the first letter uppercase
        day_of_week = day_of_week.lower().title()
        # get the current index of the day of week before the time was added
        day_index = weekdays.index(day_of_week)
        # calculate the actual time in the new day from the total time passed
        if new_time.hours > 24:
            new_time.hours = new_time.hours - days_later * 24
        # make sure new time is in 12-hour format
        if new_time.hours > 12:
            new_time.hours -= 12
        if new_time.hours == 0:
            new_time.hours = 12
        # get rid of any negatives
        if new_time.hours < 0:
            new_time.hours *= -1
        # iterate over the weekdays tuple circularly when looking for the new day of the week
        day_index = (days_later + day_index) % len(weekdays)
        day_of_week = weekdays[day_index]
            
        if days_later > 1:
            return new_time.__str__() + time_of_day + ", " + day_of_week + " (" + str(days_later) + " days later" + ")"
        elif days_later == 1:
            return new_time.__str__() + time_of_day + ", " + day_of_week + " (next day)"
        else:
            return new_time.__str__() + time_of_day + ", " + day_of_week
        
    else:
        # calculate the actual time in the new day from the total time passed
        if new_time.hours > 24:
            new_time.hours = new_time.hours - days_later * 24
        # make sure the new time is in 12-hour format
        if new_time.hours > 12:
            new_time.hours -= 12
        if new_time.hours == 0:
            new_time.hours = 12
        # get rid of any negatives
        if new_time.hours < 0:
            new_time.hours *= -1
            
        if days_later > 1:
            return new_time.__str__() + time_of_day + " (" + str(days_later) + " days later" + ")"
        elif days_later == 1:
            return new_time.__str__() + time_of_day + " (next day)"
        else:
            return new_time.__str__() + time_of_day
        