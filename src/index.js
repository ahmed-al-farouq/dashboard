// React
import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
// App.js
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

/*
  ==> Dashboard For Tech Company Which Make Websites
    => Pages
      // Dashboard
      // Projects
      // Our Cutomers
      // Profile
      // 404 Page
      // Log In

    => Components
        * Header
          >>> Avatar
          >>> message icon
          >>> Notifications icon
        * Side Navbar
        * Footer
      // Dashboard Page
      ** Cards State
            >>> Total Projects
            >>> New Clients
            >>> Sales
            >>> Month Projects
        ** Performance Chart
            && Bar Chart With Hover Effect To Show Details
            >>> Horizontal Line --> Months
            >>> Vertical Line   --> Num Of Sales
        ** Projects Chart
            && Line Chart With Hover Effect To Show Details
            >>> Horizontal Line --> Months
            >>> Vertical Line   --> Num Of Projects
        ** Table Of Workers
            >>> Name
            >>> Position
            >>> Age
            >>> Start Date
            >>> Salary
            >>> Status
            >>> Action
              --> Delete Or Change Details
            >>> Add More
              --> Form
                /* Name
                /* Position
                /* Age
                /* Start Date
                /* Salary
                /* Status
          * Add New
        ** Table Of Current Projects
            >>> Project Name
            >>> Who Works On It
            >>> Start Date
            >>> Deadline
            >>> Price
            >>> Action
              --> Delete Or Change Details
          * Add New
      // Projects Page
        * Header
        * Table Of All Projects
          >>> Project Name
          >>> Client Name
          >>> Price
          >>> DeadLine
          >>> Status
        * Add New
      // Our Cutomers Page
        * Header
        * Table
          >>> Client Name
          >>> Num Of Projects
          >>> Total Price
          >>> Paid
          >>> indebtedness
        * Add New
      // Profile Page
        * Header
        * Card Details
          >>> Edit Details
          >>> User Name
          >>> Email
          >>> Phone Number
          >>> Phone Number For Money Transfers
          >>> Address
          >>> City
          >>> Country
          >>> Postal Code
          >>> Target
        * Slide Card
          >>> Image
          >>> Position
          >>> Num Of Projects
          >>> Salary
          >>> Start Date
          >>> Status --> Full Time
      // 404 Page
        * 404 Page Is Not Found With  Electric Effect & Clip Property
      // Log In Pages
        * Form
          >>> Name
          >>> Email
          >>> Password
        * Text --> If You do not have an account yet. You have to call support
*/
