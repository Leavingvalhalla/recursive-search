def recursive_search(arr, target)
  return false if arr == []
  return true if arr[0] == target
  return false if arr.length == 1
  recursive_search(arr[1..-1], target)
end


# Please add your pseudocode to this file

# false if array is empty
# true if first number is target
# run search again with all but first num


# And a written explanation of your solution

# We are checking to see if the first element in the array 
# is the target element. If it's not, we're calling the function again
# with all but the first element. If the array is called when completely empty
# (after all other numbers have been eliminated as possible solutions), 
# the function returns false.