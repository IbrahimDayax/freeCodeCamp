# Arithmetic Arranger

A python function that takes a list of arithmetic problems and returns them in a grid.

## Usage

```python
arithmetic_arranger(problems, val=False)
```

## Parameters

    problems: a list of strings containing arithmetic problems in the form "operand1 operator operand2".
    val: a boolean value indicating whether to include the solutions to the problems in the output.

## Returns

A string containing the arithmetic problems arranged in a grid, with the solutions included if val is True.

## Examples

```python
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----

arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True)

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
  730     3799      88      172
```
## Error Handling

If there are more than 5 problems in the list, the function returns an error message: "Error: Too manproblems."

If any of the operations are not '+' or '-', the function returns an error message: "Error: Operatomust be '+' or '-'."

If any of the operands contain non-digit characters, the function returns an error message: "ErrorNumbers must only contain digits."

If any of the operands are more than 4 digits long, the function returns an error message: "ErrorNumbers cannot be more than four digits."

## How It Works

This is a function called arithmetic_arranger that takes in a list of strings called problems and an optional boolean parameter val with a default value of False.

The function first initializes an empty string called arranged_problems that will be used to store the final output of the function.

The function then checks if the length of the problems list is greater than 5. If it is, the function sets arranged_problems to "Error: Too many problems." and returns it. This means that the function can only process a maximum of 5 problems.

The function then creates a list called operations which contains the operation (either "+" or "-") for each problem in the problems list, in string format. If the set of elements in operations is not equal to {"+"} or {"-"} or has a length that is not equal to 2, the function sets arranged_problems to "Error: Operator must be '+' or '-'." and returns it. This means that the function can only process problems that contain either addition or subtraction, and not both.

The function then creates a list called numbers which contains all the operands in the problems list, in string format. It does this by iterating over each problem in the problems list and using the split() method to split the problem into a list containing the operands and the operator. It then adds these operands to the numbers list.

The function then checks if all the elements in the numbers list contain only digits using the isdigit() method. If any of the elements do not contain only digits, the function sets arranged_problems to "Error: Numbers must only contain digits." and returns it.

The function then checks if all the elements in the numbers list have a length that is less than 5 using the len() function. If any of the elements have a length that is 5 or more, the function sets arranged_problems to "Error: Numbers cannot be more than four digits." and returns it.

The function then initializes three empty strings called top_row, dashes, and solutions. It also creates a list called values which contains the results of evaluating each problem in the problems list using the eval() function.

The function then iterates over the numbers list, using a step size of 2. For each iteration, it calculates the space width needed for the current operand in the top row by taking the maximum of the lengths of the two current operands and adding 2. It then adds the first operand to top_row and right-justifies it using the calculated space width. It also adds a string of dashes to dashes with a length equal to the calculated space width. Finally, it adds the result of the current problem to solutions and right-justifies it using the calculated space width. If the current iteration is not the second to last iteration, it also adds 4 spaces to top_row, dashes, and solutions.

The function then initializes an empty string called bottom_row. It then iterates over the numbers list again, this time using a step size of 2 and starting at the second element. For each iteration, it calculates the space width needed for the current operand in the bottom row by taking the maximum of the lengths of the two current operands and adding 1. It then adds the operator for the current problem to bottom_row, followed by the second operand and right-justifies it using the calculated space width. If the current iteration is not the last iteration, it also adds 4 spaces to bottom_row.

Finally, the function checks the value of the val parameter. If it is True, the function sets arranged_problems to a string that is the concatenation of top_row, bottom_row, dashes, and solutions, separated by newline characters. If val is False, the function sets arranged_problems to a string that is the concatenation of top_row, bottom_row, and dashes, separated by newline characters. The function then returns arranged_problems.

This function can be used to arrange a list of arithmetic problems in a formatted string, with the operands in the top row, the operators in the bottom row, and the results in the bottom row if the val parameter is set to True. It also includes error handling for cases where the input is invalid.
