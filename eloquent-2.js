Looping a triangle

#
##
###
####
#####
######
#######

Solution:

for (var line = "#"; line.length < 8; line += "#")
  console.log(line); 

  // var line is the first thing that goes into the first line of your triangle.
  // line.legnth = line number if you write 100 JS will give you 100 lines of #
  // += gives you extra amount of # as the line gets longer. -= would not work and will only display 1 #
  // console.log has to be added as debugging process and also it allows a script to log data to the JS console



FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


Solution:

for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }


Chess board

Passing this string to console.log should show something like this:

# # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

var size = 8;

var chessboard = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      chessboard += " ";
    else
      chessboard += "#";
  }
  chessboard += "\n";
}

console.log(chessboard);

