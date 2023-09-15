# Course Registration

## Description

Course Registration is a single-page website created with basic React and Tailwind CSS. This project allows users to add courses to their cart, and the selected course names will be displayed in the cart. Users cannot add the same course multiple times to their cart, and there is a constraint of not exceeding 20 hours of credits. The website is fully responsive across all devices, ensuring a seamless user experience. If a user attempts to select the same course multiple times or exceed the 20-hour credit limit, a toast notification will be displayed to alert them about the constraint.

## Features

This project includes the following features:

- **Course Selection**: Users can add courses to their cart.

- **Cart Display**: The selected course names are displayed in the cart.

- **Course Redundancy Check**: Users cannot add the same course multiple times to their cart.

- **Credit Limit**: There is a constraint of not exceeding 20 hours of credits, ensuring users do not register for an excessive number of courses.

- **Responsive Design**: The website is fully responsive and adapts to different device sizes.

- **Toast Notifications**: If a user attempts to select the same course multiple times or exceeds the credit limit, a toast notification is displayed to inform them of the constraint.


## Use Of State

I have a list of selected course names that I want to display in a cart. To manage this list, I use a state called "cart," which is an array. Since both the course selection component and the cart component need access to this list, I move this state up to a common ancestor component, which is the App component. I pass both the "cart" state and the function to modify this state as props to the child components.

Similarly, I also need to keep track of the total price and total credits for the selected courses. To ensure both the cart and course selection components can access these values, I follow the same pattern: I use state to manage these variables in the App component and pass them down to the child components as props.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/programming-hero-web-course2/my-course-roster-ornob90.git
   ```

2. Navigate to the project directory:
   
   ```
   cd course-registration
   ```

4. Install the required dependencies:
   
   ```
   npm install
   ```
   
5. Start the development server:
   
   ```
   npm start
   ```
