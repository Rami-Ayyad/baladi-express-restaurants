<div style="text-align:center">
  <img src="./src/assets/baladiLogo.svg" alt="Centered Image">
</div>

---

# Restaurants Page

This is a small web application that displays a list of restaurants and their categories using cards and carousels formats.

Best practices, appropriate naming conventions,Responsiveness, and an organized folder structure were all meticulously adhered to within the given time frame. These considerations have been integrated to ensure the codebase's maintainability and clarity.

It was mainly built using:

- `React.js`.
- `Vite` as the main development environment.
- `Axios` with `React-Query` for data fetching.
- `react-router-dom` for routing.
- `Bootstrap` and `react-bootstrap`, along with pure `CSS Modules`, for styling.
- `react-icons`, `react-loading-skeleton`, and `react-slick` for an enhanced UI and improved user experience.

## Installation

Before you can run this project, make sure you have `Node.js` and `npm` installed on your system.

1. Clone the repository to your local machine:
   `git clone https://github.com/Rami-Ayyad/baladi-express-restaurants.git`

2. Change into the project directory: `cd baladi-express-restaurants`

3. Install the required dependencies: `npm install`

4. After the installation has successfully completed, run the command: `npm run dev`

5. Access the provided `local URL` in your browser, and you should be able to see the application functioning normally.

## Notes

- The majority of images retrieved from the backend via `baseUrl/imgSrc` resulted in `404 errors`, so I chose to use static images provided in the UI/UX design. However, all other data, such as prices, titles, descriptions, etc., were sourced from the API endpoint successfully.

- While there is room for various enhancements, including hover and click effects, loaders, error handling,using `TypeScript`, and more, however the primary focus was on meeting the core tasks and requirements of the project.
