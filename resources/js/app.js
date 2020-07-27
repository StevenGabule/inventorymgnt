require("./bootstrap");

import Vue from "vue";

import VueRouter from "vue-router";
import routes from "./routes";
import Swal from "sweetalert2";

import User from "./helpers/User";


window.User = User;
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
});

const app = new Vue({
    el: "#app",
    router,
});
