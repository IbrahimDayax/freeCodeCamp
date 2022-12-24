def add_time(start_time, duration, day_of_week=None):
    day_of_week = day_of_week.lower().title()
    
    weekdays = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    
    start_time = start_time.split(":")
    
    AM = start_time[1].endswith("AM")
    PM = start_time[1].endswith("PM")
    
    start_time[1] = start_time[1].split(" ")[0]
    
    duration = duration.split(":")
    
    #print(start_time[0], start_time[1], AM, PM, duration[0], duration[1])

    new_time = {
        "hours": start_time[0] + duration[0],
        "minutes": start_time[1] + duration[1]
    }

    if new_time["minutes"] >= 60:
        new_time["hours"] += 1
        new_time["minutes"] -= 60
        
    if day_of_week:
        day_index = weekdays.index(day_of_week)
        if new_time["hours"] >= 24:
            days_later = days_passed(new_time["hours"])
            
           
    

#add_time("11:30 AM", "2:32", "Monday")

def days_passed(n):
    if n < 24:
        return 0
    else:
        return days_passed(n - 24) + 1