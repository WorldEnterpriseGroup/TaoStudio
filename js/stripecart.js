
const stripe = Stripe('pk_test_V0e6TSDtlCC91T11tEy5WYQN', {betas: ['checkout_beta_2']});

function introbuy() {    
const checkoutButton = document.getElementById('introbuy');
checkoutButton.addEventListener('click', async () => {
  // Redirect your customer to Checkout.
  const {error} = await stripe.redirectToCheckout({
    items: [{type: 'plan', id: 'plan_DtbEHeT5GziTXx', quantity: 1}],
    successUrl: 'https://taostudio.org/success',
    cancelUrl: 'https://taostudio.org/canceled',
  });

  if (error) {
    // If `redirectToCheckout` fails due to a browser or network error,
    // display the localized error message to your customer.
    const displayError = document.getElementById('error-message');
    displayError.textContent = error.message;
  }
});
}

function focusbuy() {    
    const checkoutButton = document.getElementById('focusbuy');
    checkoutButton.addEventListener('click', async () => {
      // Redirect your customer to Checkout.
      const {error} = await stripe.redirectToCheckout({
        items: [{type: 'plan', id: 'plan_DtbNP43tm4dNwd', quantity: 1}],
        successUrl: 'https://taostudio.org/success',
        cancelUrl: 'https://taostudio.org/canceled',
      });
    
      if (error) {
        // If `redirectToCheckout` fails due to a browser or network error,
        // display the localized error message to your customer.
        const displayError = document.getElementById('error-message');
        displayError.textContent = error.message;
      }
    });
    }

function masterbuy() {    
        const checkoutButton = document.getElementById('masterbuy');
        checkoutButton.addEventListener('click', async () => {
          // Redirect your customer to Checkout.
          const {error} = await stripe.redirectToCheckout({
            items: [{type: 'plan', id: 'plan_DtbNP43tm4dNwd', quantity: 1}],
            successUrl: 'https://taostudio.org/success',
            cancelUrl: 'https://taostudio.org/canceled',
          });
        
          if (error) {
            // If `redirectToCheckout` fails due to a browser or network error,
            // display the localized error message to your customer.
            const displayError = document.getElementById('error-message');
            displayError.textContent = error.message;
          }
        });
        }
