import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/auth",
      component: () => import(/* webpackChunkName: auth */ "../layout/Auth.vue"),
      redirect: () => {
        return "/auth/signup";
      },
      children: [
        // {
        //   path: "signup",
        //   component: () =>
        //     import(/* webpackChunkName: auth */ "@/views/auth/signup.vue"),
        // },
        {
          name: "/login",
          path: "login",
          component: () =>
            import(/* webpackChunkName: auth */ "@/views/auth/login.vue"),
        },
        // {
        //   name: "ConfirmEmail",
        //   path: "confirm-email",
        //   component: () =>
        //     import(/* webpackChunkName: auth */ "@/views/auth/confirm-email.vue"),
        // },
        // {
        //   name: "ForgotPassword",
        //   path: "forgot-password",
        //   component: () =>
        //     import(
        //       /* webpackChunkName: auth */ "@/views/auth/forgot-password.vue"
        //     ),
        // },
        // {
        //   name: "ResetPassword",
        //   path: "reset-password",
        //   component: () =>
        //     import(
        //       /* webpackChunkName: auth */ "@/views/auth/reset-password.vue"
        //     ),
        // },
        {
          path: "/refund",
          name: "refund",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: auth */ "../views/auth/refund.vue")
        },
      ],
    },
  ]
})

export default router
