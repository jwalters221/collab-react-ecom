# 4Geeks Collaboration- React Ecommerce Using Context

Collaborative React App Using Context!

Group 1 Renel Irvine: NavBar/Login View (Session)/
 https://getbootstrap.com/docs/4.1/examples/sign-in/
 
Group 2 Fabio Paulo: Landing Page with Carousel (Products and Posts) | https://getbootstrap.com/docs/4.1/examples/carousel/
 Blog/Post View (Posts) | https://getbootstrap.com/docs/4.1/examples/blog/

Group 3 Scott Brian: Store/Checkout (Products) | https://getbootstrap.com/docs/4.1/examples/product/ & https://getbootstrap.com/docs/4.1/examples/checkout/

This project was bootstrapped with Create React App.

Requirements: Make sure you are using node version 8
* `$ node -v` to check which node version you are using
* `$ nvm use 8` to switch to using version 8
* `$ nvm install 8` to install version 8 if necessary

##### Clone this boilerplate
```
$ git https://github.com/jwalters221/collab-react-ecom.git
```

##### and install the npm package:
```
$ npm install
```

## Start coding! 

Start the webpack server with live reload:
- `$ npm run c9` for Cloud 9 Users.
- `$ npm run dev-server` for windows, mac or linux.

## Reactstrap Installation

##### Install reactstrap and peer dependencies via NPM
```
npm install --save reactstrap react react-dom
```

### Import required reactstrap components within src/App.js file or your custom component files:
```
import { Button } from 'reactstrap';
```

```
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
```



Now you are ready to use the imported reactstrap components within your component hierarchy defined in the render method. 
Here is an example App.js redone using reactstrap.