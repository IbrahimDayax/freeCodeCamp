# add_time

A Python function that takes a start time, a duration, and optionally a day of the week as inputs and returns the new time and day of the week after the specified duration has passed.

## Inputs

    start_time: a string in the format "hh:mm AM/PM" representing the starting time
    duration: a string in the format "hh:mm" representing the duration of time to add to the start time
    day_of_week: an optional string representing the day of the week (e.g. "Monday", "Tuesday", etc.)

## Outputs

    A string in the format "hh:mm AM/PM, day_of_week" or "hh:mm AM/PM, day_of_week (next day)" if the duration spans over the current day, or "hh:mm AM/PM, day_of_week (x days later)" if the duration spans over multiple days.

## Examples

```python
add_time("9:00 AM", "1:30") => "10:30 AM"
add_time("9:00 AM", "1:30", "Monday") => "10:30 AM, Monday"
add_time("9:00 AM", "25:00", "Monday") => "10:00 AM, Tuesday (next day)"
add_time("9:00 AM", "48:00", "Monday") => "09:00 AM, Wednesday (2 days later)"
```
