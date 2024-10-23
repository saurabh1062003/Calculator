// Function to append clicked buttons to the display
function appendToDisplay(value) {
       document.getElementById('display').value += value;
   }
   
   // Function to clear the display
   function clearDisplay() {
       document.getElementById('display').value = '';
   }
   
   // Function to evaluate and display the result
   function calculate() {
       let expression = document.getElementById('display').value;
       try {
           let result = eval(expression);
           document.getElementById('display').value = result;
       } catch (error) {
           document.getElementById('display').value = 'Error';
       }
   }
   