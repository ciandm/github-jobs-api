# GitHub Jobs API Project

[Built using React and the design from www.frontendmentor.io](https://www.frontendmentor.io)

This project pulls in the most recent jobs from the GitHub Jobs API and displays them, with added information on the job on click. The descriptions come through as markdown from the person who submitted them, so some may look different to others.

## Features

#### Dark Mode

There is a dark mode option available. A custom hook finds whether the user has visited before, and if their preference is saved in local storage. If not, it checks whether they prefer dark mode, and will set accordingly.

---

#### Job filters

You can filter by title, company, description, location & full time jobs using the form. Mobile required a new component, with the location & full time option being removed and placed in a modal.

---


#### Job details

Users can click into each particular job, and see more information on that role & apply. No routers were used here, it is just state used to show or hide the job details. A short animation has been included switching from the job board to the individual job detail. When returning to the job board, the user will be brought back to their original position.

---


#### Load more

Users can opt to load more jobs, if there is any. This allows for infinite scrolling through job pages.

---


#### Skeleton loaders

Skeleton loaders have been included to fit the style & shape of the job cards when they are loading, instead of a spinner.

---

