# JiafeimaoStore
## Table of contents
* [General info](#general-info)
* [Test](#test)
* [How  to  use](#how-to-use)
* [Technologies](#technologies)

## General info
This is imaginary online shop.The key technologies I used for this are React, Redux, Webpack, PWA, Express, Jest, Firebase, stripe. Firebase handles authentication and storing shop items data and user data. Since this is imaginary online shop, I set Stripe payment function as test mode. If you would like to check the payment function, please use the card information on the checkout page.


## Test
1/Download this repositely, and dependecies.<br>
2/Open src/components/stripeButton/stripeButton.componet.js. update publishableKey with your key.<br>
4/<optional> for activate product version of Stripe, please update STRIPE_SECRET_KEY in src/server/server-prod.js. <br>
4/"npm run buildDev" is for dev mode,"npm run buildProd" is for production mode. <br>


## How to use
- Post image<br>
1/Please sign in with your google account or email to use cart.<br>
2/Click add button to add an item.<br>
3/On checkout page, you can increase, devrease and remove items in your cart.<br>





## Technologies
"dependencies": {
    "@babel/polyfill": "^7.6.0",
    "@babel/runtime": "^7.6.0",
    "axios": "^0.19.0",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^8.1.0",
    "express": "^4.17.1",
    "express-cache-controller": "^1.1.0",
    "firebase": "^6.6.1",
    "prop-types": "^15.7.2",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-redux": "^7.1.1",
    "react-router": "^5.0.1",
    "react-router-dom": "^5.0.1",
    "react-scripts": "^3.1.1",
    "react-stripe-checkout": "^2.6.3",
    "redux": "^4.0.4",
    "redux-devtools-extension": "^2.13.8",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0",
    "reselect": "^4.0.0",
    "stripe": "^7.9.1",
    "webpack": "^4.40.2"
  },
  "devDependencies": {
    "@babel/core": "^7.6.2",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/plugin-proposal-export-namespace-from": "^7.5.2",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-transform-runtime": "^7.6.2",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-react": "^7.0.0",
    "babel-eslint": "^10.0.3",
    "babel-jest": "^24.9.0",
    "babel-loader": "^8.0.6",
    "babel-preset-react": "^6.24.1",
    "compression-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "enzyme": "^3.10.0",
    "enzyme-adapter-react-16": "^1.14.0",
    "enzyme-to-json": "^3.4.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-jest-enzyme": "^7.1.1",
    "eslint-loader": "^3.0.0",
    "eslint-plugin-babel": "^5.3.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.3",
    "file-loader": "^4.2.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.9.0",
    "jest-enzyme": "^7.1.1",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "prettier": "^1.18.2",
    "react-hot-loader": "^4.12.13",
    "resolve-url-loader": "^3.1.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.0",
    "terser-webpack-plugin": "^2.1.2",
    "webpack-bundle-analyzer": "^3.5.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-middleware": "^3.7.1",
    "webpack-hot-middleware": "^2.25.0",
    "webpack-node-externals": "^1.7.2",
    "webpack-pwa-manifest": "^4.0.0",
    "workbox-webpack-plugin": "^4.3.1"
    }
