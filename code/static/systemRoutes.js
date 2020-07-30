const Abstract = '@/components/common/abstract'
module.exports = [
  {
    id: 1,
    path: "home",
    name: "总览",
    meta: {
      icon: "iconfont iconzonglan"
    },
    component: 'home'
  },
  {
    id: 2,
    path: "setting",
    name: "设置",
    meta: {
      icon: "iconfont iconzonglan"
    },
    component: 'Abstract',
    children: [
      {
        id: 3,
        path: "role",
        name: "角色管理",
        component: 'role'
      },
      {
        id: 4,
        path: "permission",
        name: "权限管理",
        component: 'permission'
      }
    ]
  }
]