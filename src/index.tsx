import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() belowdfdfd. Note this comes widfdfdth some pitfalls.
// Learn more about service workers: https:/ffdfdf/cra.link/PWA
serviceWorkerRegistration.register();

// if (Notification.permission === "default") {
//   Notification.requestPermission();
// }

// if(!navigator.onLine){
//   new Notification('提示', {body: '当前网络已断开'})
// }

// window.addEventListener('online', () => {
//   new Notification('提示', {body: '当前网络已连接'})
// })