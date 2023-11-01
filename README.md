[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12632415&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not? Add your answer, including your
reasoning, to this markdown file.  

**ANSWER:**  
The asymptotic complexity of the tail-recursive Fibonacci is *extremely* different  
from the non-tail recursive version. The non-tail recursive version has a runtime  
of $O(2^n)$, which is one of the worst possible runtimes for an algorithm.  
This can be proven by observing how this function operates. We know that the function  
will have to go down at least n levels in order to get an answer. So for instance,  
Fib(5) will have to at *least* go down to 4, then 3, then 2, and 1 in order to find  
the answer. However, this implementation ultimately requires that each term to split  
in two at every single level. As a result, the number of computations it will have to  
do ends up being $O(2^n)$.  
The tail-recursive version, however, has a runtime of $O(n)$. This is because it only  
has to iterate over the values leading up to n one time each as opposed to multiple times  
like is the case in the non-tail recursion version. As a result, once it  
reaches n, practically all of the calculations should be done. On top of this, the  
function does not rely on extra memory like memoization, and may use memory even more  
efficiently if ran in a language that supports the optimization of tail-end recursion.  
So, needless to say, the different between the two of the runtimes is astronomical to  
say the least. The tail-recusrion version will ultimately be the better choice for  
practically every single scenario.  

**NOTE**: Please note that I added a clause in my testing file that causes it to disregard  
any values above 40. I did this because the non-tail recursive function ran *incredibly*  
slow for values that were too large on my computer. So, for the sake of convenience, I  
added that clause. If you'd like me to do away with it, let me know and I will gladly do  
so.
