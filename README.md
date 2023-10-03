## Getting Started

First, run the development server:


```bash
# 1
npm install
# 2
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My Approach and Thought Process

Used a clean Next Js project without any libraries. Decided to use the NextJS framwork for the simple capabilities of loading in the fetched data from the API while the static UI elements ( the table header ) are instantly shown. Therefore the "Loading..." state will be shown before the data is stream onto the table. The implementation is pure react and typescript.

Once the data is loaded into the componets the sortData() function will map the username to the temporary usertable array. It will then sort the data by name then by the custom course ranking order using the || opperator. 

Using the MVVM model:

- The Model which handles grabbing the data, is located in the @/data/\* folder
- The ViewModel which handles the logic, is located in the @/utils/\* folder
- The View are the ui elements which are located in page.tsx & ./components/\* folder

This models abstracts away the bussniess logic from the UI elements to create clean UI components.
