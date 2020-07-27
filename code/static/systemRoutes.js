module.exports = [
  {
    id: 1,
    path: "home",
    name: "总览",
    meta: {
      icon: "iconfont iconzonglan"
    },
    component: () => import("@/views/Home")
  }
]