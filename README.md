# Js_-algorithms--largestRange

Input:Your SolutionOur SolutionNo changes made.
Run Code

function largestRange(array) {
  // Write your code here.
}

// Do not edit the line below.
exports.largestRange = largestRange;

1
function largestRange(array) {
2
  // Write your code here.
3
}
4
​
5
// Do not edit the line below.
6
exports.largestRange = largestRange;
7
​
Tests:HideShow

27
​
28
it('Test Case #7', function() {
29
  chai.expect(program.largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14])).to.deep.equal([10, 19]);
30
});
31
​
32
it('Test Case #8', function() {
33
  chai.expect(program.largestRange([0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14])).to.deep.equal([-1, 19]);
34
});
35
​
36
it('Test Case #9', function() {
37
  chai.expect(program.largestRange([0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2])).to.deep.equal([-7, 7]);
38
});
39
​
40
it('Test Case #10', function() {
41
  chai.expect(program.largestRange([0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2])).to.deep.equal([-7, 7]);
42
});
43
​
44
it('Test Case #11', function() {
45
  chai.expect(program.largestRange([-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2])).to.deep.equal([-8, 19]);
46
});
47
​
Output:Custom OutputRaw Output
Run your code when you feel ready.
Question:JavaScriptPythonC++JavaGoQuestions List

​
Largest Range
​
Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array. The first number in the output array should be the first number in the range while the second number should be the last number in the range. A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers do not need to be ordered or adjacent in the array in order to form a range. Assume that there will only be one largest range.
​
Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
Sample output: [0, 7]
​
Help:HideShow

How can you use a hash table to solve this problem with an algorithm that runs in linear time?
Video ExplanationGo to Conceptual OverviewGo to Code WalkthroughQuestions List
Copyright © 2018 AlgoExpert, LLC. All rights reserved.Legal StuffContact Us
