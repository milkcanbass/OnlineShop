# JiafeimaoStore

https://jaifeimaohandagou.firebaseapp.com/

## Table of contents

- [General info](#general-info)
- [Test](#test)
- [How to use](#how-to-use)
- [Dependencies](#Dependencies)

## General info

This is an imaginary online shop. <br>
The key technologies I used for this are <br>
React, Redux, Webpack, PWA, Express, Jest, Firebase, Stripe.<br>
Firebase handles authentication and storing shop items data and user data. <br>
Since this is an imaginary online shop, I set Stripe payment function as test mode.<br>
If you would like to check the payment function, please use the card information on the checkout page.

## Test

1/Download this repository and dependencies.<br>
2/Open src/components/stripeButton/stripeButton.componet.js. update publishableKey with your key.<br>
3/<optional> for activate product version of Stripe, please update STRIPE_SECRET_KEY in src/server/server-prod.js. <br>
4/"npm run buildDev" is for dev mode,"npm run buildProd" is for production mode. <br>

## How to use

1/Please sign in with your Google account or email to use cart.<br>
2/Click Add button to add an item.<br>
3/On checkout page, you can increase, decrease and remove items in your cart.<br>

## Dependencies

"dependencies": <br>
"@babel/polyfill": "^7.6.0",<br>
"@babel/runtime": "^7.6.0",<br>
"axios": "^0.19.0",<br>
"compression": "^1.7.4",<br>
"cors": "^2.8.5",<br>
"dotenv": "^8.1.0",<br>
"express": "^4.17.1",<br>
"express-cache-controller": "^1.1.0",<br>
"firebase": "^6.6.1",<br>
"prop-types": "^15.7.2",<br>
"react": "^16.9.0",<br>
"react-dom": "^16.9.0",<br>
"react-redux": "^7.1.1",<br>
"react-router": "^5.0.1",<br>
"react-router-dom": "^5.0.1",<br>
"react-scripts": "^3.1.1",<br>
"react-stripe-checkout": "^2.6.3",<br>
"redux": "^4.0.4",<br>
"redux-devtools-extension": "^2.13.8",<br>
"redux-persist": "^6.0.0",<br>
"redux-thunk": "^2.3.0",<br>
"reselect": "^4.0.0",<br>
"stripe": "^7.9.1",<br>
"webpack": "^4.40.2"<br><br><br>
"devDependencies": <br>
"@babel/core": "^7.6.2",<br>
"@babel/plugin-proposal-class-properties": "^7.5.5",<br>
"@babel/plugin-proposal-export-namespace-from": "^7.5.2",<br>
"@babel/plugin-syntax-dynamic-import": "^7.2.0",<br>
"@babel/plugin-transform-runtime": "^7.6.2",<br>
"@babel/preset-env": "^7.6.0",<br>
"@babel/preset-react": "^7.0.0",<br>
"babel-eslint": "^10.0.3",<br>
"babel-jest": "^24.9.0",<br>
"babel-loader": "^8.0.6",<br>
"babel-preset-react": "^6.24.1",<br>
"compression-webpack-plugin": "^3.0.0",<br>
"css-loader": "^3.2.0",<br>
"enzyme": "^3.10.0",<br>
"enzyme-adapter-react-16": "^1.14.0",<br>
"enzyme-to-json": "^3.4.2",<br>
"eslint": "^6.4.0",<br>
"eslint-config-airbnb": "^18.0.1",<br>
"eslint-config-jest-enzyme": "^7.1.1",<br>
"eslint-loader": "^3.0.0",<br>
"eslint-plugin-babel": "^5.3.0",<br>
"eslint-plugin-import": "^2.18.2",<br>
"eslint-plugin-jest": "^22.17.0",<br>
"eslint-plugin-jsx-a11y": "^6.2.3",<br>
"eslint-plugin-prettier": "^3.1.0",<br>
"eslint-plugin-react": "^7.14.3",<br>
"file-loader": "^4.2.0",<br>
"html-loader": "^0.5.5",<br>
"html-webpack-plugin": "^3.2.0",<br>
"identity-obj-proxy": "^3.0.0",<br>
"jest": "^24.9.0",<br>
"jest-enzyme": "^7.1.1",<br>
"mini-css-extract-plugin": "^0.8.0",<br>
"node-sass": "^4.12.0",<br>
"optimize-css-assets-webpack-plugin": "^5.0.3",<br>
"prettier": "^1.18.2",<br>
"react-hot-loader": "^4.12.13",<br>
"resolve-url-loader": "^3.1.0",<br>
"robotstxt-webpack-plugin": "^6.0.0",<br>
"sass-loader": "^8.0.0",<br>
"style-loader": "^1.0.0",<br>
"terser-webpack-plugin": "^2.1.2",<br>
"webpack-bundle-analyzer": "^3.5.2",<br>
"webpack-cli": "^3.3.9",<br>
"webpack-dev-middleware": "^3.7.1",<br>
"webpack-hot-middleware": "^2.25.0",<br>
"webpack-node-externals": "^1.7.2",<br>
"webpack-pwa-manifest": "^4.0.0",<br>
"workbox-webpack-plugin": "^4.3.1"<br>
