# Submit Form Component

## Description

This component allows users to submit a simple form containing their name and age.  The submitted data is then displayed below the form.  It's designed for educational purposes to demonstrate basic React form handling and state management.

## Features

This component does the following:

1. It uses React's `useState` hook to manage the state for the name, age, and submitted data.
2. The form is controlled, meaning the input values are bound to the state variables.
3. On form submission, it prevents the default form behavior, sets the submitted data in the state, and displays it below the form.
4. It uses vanilla CSS for styling.
5. The CSS provides a clean, responsive layout with some basic styling for the form elements and the submitted data display.
6. It includes basic form validation using the `required` attribute on inputs.