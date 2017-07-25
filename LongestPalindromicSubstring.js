/*
The original code for this program is from github.com/IDeserve, in Java.
I have transformed it to JavaScript and modified it for my learning purposes.
*/

function LongestPalindromicSubstring() {
	
	//this program receives the string "str" somehow, then:

		  var n = str.length();
		  var palindromeBeginsAt = 0; //index where the longest palindrome begins
		  var max_len = 1;//length of the longest palindrome
		  
		  // how to fix/change boolean from Java to JavaScript?
		  // search how to create two-dimensional arrays in javascript
		  boolean palindrome[][] = new boolean[n][n]; //boolean table to store palindrome truth
		  
		  //Trivial case: single letter palindromes
		  for (let i = 0; i < n; i++) {
			  palindrome[i][i] = true;
		  }//end of for
		  
		  //Finding palindromes of two characters.
		  for (let i = 0; i < n-1; i++) {
		    if (str.charAt(i) == str.charAt(i+1)) {
		      palindrome[i][i+1] = true;
		      palindromeBeginsAt = i;
		      max_len = 2;
		    } //end of if
		  } //end of for
		  
		  //Finding palindromes of length 3 to n and saving the longest
		  for (let curr_len = 3; curr_len <= n; curr_len++) {
		    for (let i = 0; i < n-curr_len+1; i++) {
		      let j = i+curr_len-1;
		      if (str.charAt(i) == str.charAt(j) //1. The first and last characters should match 
		    	  && palindrome[i+1][j-1]) //2. Rest of the substring should be a palindrome
		      {
		    	palindrome[i][j] = true; 
		        palindromeBeginsAt = i;
		        max_len = curr_len;
		      }//end of if
		    }//end of for
		  }//end of for
		  return str.substring(palindromeBeginsAt, max_len + palindromeBeginsAt);
		}//end of public


}//end of function
