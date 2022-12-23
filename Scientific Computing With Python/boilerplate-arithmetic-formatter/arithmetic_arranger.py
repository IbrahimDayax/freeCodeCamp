def arithmetic_arranger(problems, show=False):
    # Set up empty string to store arranged problems
    arranged_problems = ''
    
    # Check if there are more than 5 problems in the list
    if len(problems) > 5:
        arranged_problems = "Error: Too many problems."
        return arranged_problems
    
    # Create a list of all the operations in the problems
    operations = list(map(lambda x: x.split()[1], problems))
    # Check if the set of operations contains any elements that are not '+' or '-', and return an error message if it does
    if set(operations) - {'+', '-'}:
        arranged_problems = "Error: Operator must be '+' or '-'."
        return arranged_problems
    
    # Create a list of all the operands in the problems
    numbers = []
    for problem in problems:
        p = problem.split()
        numbers.extend([p[0], p[2]])
    
    # Check if all the operands are made up of digits only
    if not all(map(lambda x: x.isdigit(), numbers)):
        arranged_problems = "Error: Numbers must only contain digits."
        return arranged_problems
    
    # Check if any of the operands are more than 4 digits long
    if not all(map(lambda x: len(x) < 5, numbers)):
        arranged_problems = "Error: Numbers cannot be more than four digits."
        return arranged_problems
    
    # Set up empty strings for top row, dashes, values, and bottom row
    top_row = ''
    dashes = ''
    values = list(map(lambda x: eval(x), problems))
    solutions = ''
    
    # Iterate over operands by pairs and calculate space width for each row
    for i in range(0, len(numbers), 2):
        space_width = max(len(numbers[i]), len(numbers[i+1])) + 2
        top_row += numbers[i].rjust(space_width)
        dashes += '-' * space_width
        solutions += str(values[i // 2]).rjust(space_width)
        # Add spaces to strings for subsequent problems
        if i != len(numbers) - 2:
            top_row += ' ' * 4
            dashes += ' ' * 4
            solutions += ' ' * 4
    
    # Add operator and operand to bottom row string
    bottom_row = ''
    for i in range(1, len(numbers), 2):
        space_width = max(len(numbers[i - 1]), len(numbers[i])) + 1
        bottom_row += operations[i // 2]
        bottom_row += numbers[i].rjust(space_width)
        # Add spaces to string for subsequent problems
        if i != len(numbers) - 1:
            bottom_row += ' ' * 4
    
    # Concatenate all strings with newline characters in between
    if show:
        # If val is True, include solutions in concatenation
        arranged_problems = '\n'.join((top_row, bottom_row, dashes, solutions))
    else:
        # If val is False, do not include solutions in concatenation
        arranged_problems = '\n'.join((top_row, bottom_row, dashes))
    # Return the concatenated string
    return arranged_problems