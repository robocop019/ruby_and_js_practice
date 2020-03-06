# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end
# print_every_other_item(["a", "b", "c", "d", "e"])


# # Write a method that accepts an array of numbers and returns the sum.
# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end
# puts compute_sum([2, 4, 5])


# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# city_populations = {chi: 2700000}
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations



# Write a method that prints out every number from 1 to 100. 

# def print_nums
#   index = 1
#   while index <= 100
#     puts index
#     index += 1
#   end
# end 

# print_nums


# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# def print_nums
#   index = 1
#   while index < 100
#     puts index if index % 2 == 1
#     index += 1
#   end
# end

# print_nums

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# def count_55(array)
#   count = 0
#   array.each do |num|
#     count += 1 if num == 55
#   end
#   count
# end

# puts count_55([1, 55, 3, 55, 6, 56, 55, 77, 55, 89])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def awesome(array)
  new_array = []
  array.each do |char|
    new_array << char
    new_array << 'awesomesauce' if array.last != char
  end
  new_array
end  

p awesome(["a", "b", "c", "d", "e"])


# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

# item_amounts = {chair: 5, table: 2}

# item_amounts[:chair] = 3

# puts item_amounts

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

# item_amounts = {chair: 5, table: 2}

# item_amounts[:desks] = 7

# puts item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(num)
#   fact = 1
#   while num > 0
#     fact *= num
#     num -= 1
#   end
#   fact
# end

# puts factorial(5)
# puts factorial(6)
# puts factorial(10)


# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def adding_arrays(array_1, array_2)
#   new_array = []
#   array_1.each do |num_1|
#     array_2.each do |num_2|
#       new_array << num_1 + num_2
#     end
#   end
#   new_array
# end

# p adding_arrays([1, 5, 10], [100, 500, 1000])