import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "@/pages/MainPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import CartPage from "@/pages/CartPage.vue";
import notFoundPage from "@/pages/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {name: 'main', component: MainPage, path: '/'},
  {name: 'product', component: ProductPage, path: '/product/:id'},
  {name: 'cart', component: CartPage, path: '/cart'},
  {name: 'notFound', component: notFoundPage, path: '*'},
];

const router = new VueRouter({
  routes,
});

export default router;
