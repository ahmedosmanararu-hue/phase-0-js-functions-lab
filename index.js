// ============================================
// ALL FIVE FUNCTIONS - COMPLETE CODE
// ============================================

// Function 1: Calculate 10% tax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: Convert string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: Find the larger of two numbers
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;  // Ternary operator version
}

// Function 4: Check if string is a palindrome
function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}

// Function 5: Calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}

// ============================================
// TESTING ALL FUNCTIONS
// ============================================

console.log("=== Function Tests ===");
console.log("calculateTax(100):", calculateTax(100));                    // 10
console.log("convertToUpperCase('hello'):", convertToUpperCase("hello")); // HELLO
console.log("findMaximum(25, 40):", findMaximum(25, 40));                // 40
console.log("isPalindrome('racecar'):", isPalindrome("racecar"));        // true
console.log("calculateDiscountedPrice(100, 20):", calculateDiscountedPrice(100, 20)); // 80




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };