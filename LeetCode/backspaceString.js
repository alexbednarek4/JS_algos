/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */

 /**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {

    //pointers
    let s_Pointer = S.length -1;
    let t_Pointer = T.length -1;
    
    //skip variables
    let s_Skip = 0;
    let t_Skip = 0;
    
    // since we are looping backwards, we want to make sure we iterate until beginning of string
    while(s_Pointer >= 0 || t_Pointer >= 0) {
        
        while(s_Pointer>=0){
            if(S[s_Pointer] === "#"){
                s_Skip +=1;
                s_Pointer -=1;
            }else if (s_Skip > 0) {
                s_Pointer -=1;
                s_Skip -=1;
            } else{
                break;
            }
        }
        while(t_Pointer>=0){
            if(T[t_Pointer] === "#"){
                t_Skip +=1;
                t_Pointer -=1;
            }else if (t_Skip > 0) {
                t_Pointer -=1;
                t_Skip -=1;
            } else{
                break;
            }
        }
        // check if string values are equal
        if(s_Pointer >= 0 && t_Pointer >= 0 && S[s_Pointer] !== T[t_Pointer]){
            return false;
        }
        
        // final check, length of iterables
            // if one of the pointers hits 0 before the other, we know the strings are not the same
        if((s_Pointer >= 0) !== (t_Pointer >= 0)) {
            return false;
        }
        //move pointers backwards
        s_Pointer -= 1;
        t_Pointer -= 1;
        
    }
    return true;
};