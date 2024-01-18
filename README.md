# Multi-Step Form Application

This is a multi-step form application built using React- [React](https://reactjs.org/) - JS library
and JS [Next.js](https://nextjs.org/) - React framework. It allows users to go through a series of steps to complete a form.
This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Features

- **Step Navigation:** Users can navigate through different steps of the form using the "Next" and "Go Back" buttons.
- **Form Validation:** Form fields are validated, and errors are displayed when the user attempts to proceed without filling in required information.
- **Confirmation:** After completing all the steps, users can confirm their choices.

## Components

The application consists of the following React components:

- `MultiStepForm`: The main component that renders the multi-step form. It manages the current step and handles step changes.
- `StepSelector`: Displays the list of steps and highlights the current step.
- `Step1`, `Step2`, `Step3`, `Step4`: Individual step components that collect specific information from the user.
- `Confirmation`: Displays a summary of the user's choices for confirmation.
- `NavigationButtons`: Provides navigation buttons to go to the next step, go back, and confirm the choices.

### Flexbox Design

- **multi-step-form-container**: This container uses Flexbox to arrange its content horizontally. It has a gap of `32px` between its children to separate the content.
- **steps-list**: This container houses the list of form steps. It uses Flexbox to display the steps horizontally. The background image is used to create a visual background for the step list.
- **step-item**: Each step in the step list is represented as a `step-item`. The `active` styling is used to highlight the current step.
- **step-content**: This container is responsible for the form text and input forms. It uses Flexbox to arrange the content in a column layout.

### Responsive Design

The application is optimized for both desktop and mobile screens:

- **@media (max-width: 375px)**: This media query is activated for screens with a maximum width of `375px`, such as mobile devices.
  - **multi-step-form-container**: The width of the main container is changed to `100%` to fill the entire screen. The background is set to white, and a bottom margin of `70px` is added to accommodate the buttons.
  - **steps-list**: The width of the step list container is changed to `100%` to fill the entire screen. The background image is displayed at the top, and the border radii are removed.
  - **step-content**: The width of the step content container is changed to `80%` to center the content on the screen. The height is set to `150px`, and a white background with rounded corners is added. A shadow is displayed to elevate the container, and the position is shifted slightly upwards to make room for the buttons.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.

## Usage

- Follow the on-screen instructions to complete each step of the form.
- Use the "Next" and "Go Back" buttons for navigation.
- Review your choices on the confirmation step and click "Confirm" to submit.

## Dependencies

- React
- React Router (for navigation)

## Author

[Miriam Sparbrod]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Screenshot

![desktop-main](src\assets\design\Screen_Desktop_Step1.png)
![desktop-main-validation](src\assets\design\Screen_Desktop_Validation.png)
