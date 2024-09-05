class Category:
    # The Category class represents a budget category with a ledger for transactions.

    def __init__(self, name):
        # Initialize the Category with a name and an empty ledger list.
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        # Add a deposit to the ledger with the specified amount and description.
        # If no description is provided, it defaults to an empty string.
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        # Attempt to withdraw the specified amount from the ledger.
        # Check if there are sufficient funds using the check_funds method.
        # If funds are sufficient, add the withdrawal to the ledger as a negative amount.
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True  # Return True if the withdrawal was successful.
        return False  # Return False if there were insufficient funds.

    def get_balance(self):
        # Calculate the current balance by summing all the amounts in the ledger.
        return sum(item['amount'] for item in self.ledger)

    def transfer(self, amount, category):
        # Transfer the specified amount from this category to another category.
        # First, check if there are sufficient funds using the check_funds method.
        if self.check_funds(amount):
            # Withdraw the amount from this category's ledger with a description indicating the transfer.
            self.withdraw(amount, f"Transfer to {category.name}")
            # Deposit the amount into the target category's ledger with a description indicating the transfer.
            category.deposit(amount, f"Transfer from {self.name}")
            return True  # Return True if the transfer was successful.
        return False  # Return False if there were insufficient funds for the transfer.

    def check_funds(self, amount):
        # Check if there are sufficient funds in the current balance to cover the specified amount.
        return self.get_balance() >= amount

    def __str__(self):
        # Generate a string representation of the Category, showing the name, each ledger entry, and the total balance.
        # Title of the category centered and surrounded by asterisks.
        title = f"{self.name:*^30}\n"
        
        # Initialize an empty string for the items (ledger entries).
        items = ""
        
        # Loop through each entry in the ledger.
        for item in self.ledger:
            # Format each ledger entry to show the first 23 characters of the description
            # and the amount right-aligned to 7 characters with 2 decimal places.
            items += f"{item['description'][:23]:23}{item['amount']:>7.2f}\n"
        
        # Calculate the total balance.
        total = f"Total: {self.get_balance():.2f}"
        
        # Combine the title, items, and total into one string to return.
        return title + items + total

def create_spend_chart(categories):
    # Generate a spend chart (bar chart) based on the spending in each category.
    
    # Title of the chart.
    title = "Percentage spent by category\n"
    
    # Calculate the total spending across all categories.
    total_spent = sum(
        abs(item['amount']) for category in categories for item in category.ledger if item['amount'] < 0
    )
    
    # Calculate the spending percentage for each category.
    percentages = [
        (sum(abs(item['amount']) for item in category.ledger if item['amount'] < 0) / total_spent) * 100
        for category in categories
    ]

    # Start building the chart string with the title.
    chart = title
    
    # Create the y-axis of the chart, displaying percentage marks from 100% down to 0%.
    for i in range(100, -1, -10):
        # Add the percentage mark aligned to the right.
        chart += f"{i:>3}| "
        for percentage in percentages:
            # Add 'o' if the category's spending percentage is greater than or equal to the current mark.
            chart += "o  " if percentage >= i else "   "
        chart += "\n"  # Move to the next line for the next percentage mark.

    # Add the horizontal line at the bottom of the chart.
    chart += "    -" + "---" * len(categories) + "\n"

    # Extract the names of all categories.
    category_names = [category.name for category in categories]
    
    # Find the maximum length of the category names.
    max_length = max(len(name) for name in category_names)
    
    # Loop through each character position up to the length of the longest category name.
    for i in range(max_length):
        chart += "     "  # Add spacing before the names start.
        for name in category_names:
            # Add the ith character of each name, or a space if the name is shorter.
            chart += name[i] + "  " if i < len(name) else "   "
        chart += "\n"  # Move to the next line for the next character position.

    # Return the chart, stripping any trailing newlines.
    return chart.rstrip("\n")


# Testing
food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
clothing.withdraw(25, 'wedding suit')
print(food)
print(clothing)
print(create_spend_chart([food, clothing]))