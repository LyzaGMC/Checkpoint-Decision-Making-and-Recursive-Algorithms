function getTicketPriceRecursion(age) {
    if (age <= 12) {
      return 10;
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else if (age >= 18) {
      return 20;
    } else {
      return "Invalid age";
    }
  }
  
  function mainRecursion() {
    const ages = [10, 15, 20, 30, -1, 'abc']; // Example ages to test
    for (const ageInput of ages) {
      const age = parseInt(ageInput, 10);
      if (isNaN(age) || age < 0) {
        console.log(`Invalid input: ${ageInput}`);
      } else {
        const price = getTicketPriceRecursion(age);
        console.log(`Age: ${age}, Ticket Price: $${price}`);
      }
    }
  }
  
  // Run the main function using recursion
  mainRecursion();
  