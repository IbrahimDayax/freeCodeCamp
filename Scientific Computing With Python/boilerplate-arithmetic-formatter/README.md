# Arithmetic Arranger

A python function that takes a list of arithmetic problems and returns them in a grid.

## Usage

'''python
arithmetic_arranger(problems, val=False)
'''

## Parameters

    problems: a list of strings containing arithmetic problems in the form "operand1 operator operand2".
    val: a boolean value indicating whether to include the solutions to the problems in the output.

## Returns

A string containing the arithmetic problems arranged in a grid, with the solutions included if val is True.

## Examples

'''python
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----

arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True)

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
  730     3799      88      172

Examples

arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----

arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True)

   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
  730     3799      88      172
'''
## Error Handling

If there are more than 5 problems in the list, the function returns an error message: "Error: Too manproblems."
If any of the operations are not '+' or '-', the function returns an error message: "Error: Operatomust be '+' or '-'."
If any of the operands contain non-digit characters, the function returns an error message: "ErrorNumbers must only contain digits."
If any of the operands are more than 4 digits long, the function returns an error message: "ErrorNumbers cannot be more than four digits."