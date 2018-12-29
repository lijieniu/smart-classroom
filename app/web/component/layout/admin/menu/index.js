const menu = {
  home: {
    name: 'menu.home',
    path: '/',
    icon: 'el-icon-menu',
  },
  user: {
    name: 'menu.usermanage',
    icon: 'el-icon-menu',
    path: '/user'
  },
  attendance: {
    name: 'menu.attendancemanage',
    icon: 'el-icon-bell',
    children: {
      actualnumber: {
        name: 'menu.actualnumber',
        path: '/attendance/actual'
      },
      absencenumber: {
        name: 'menu.absencenumber',
        path: '/attendance/absence'
      },
      leavenumber: {
        name: 'menu.leavenumber',
        path: '/attendance/leave'
      },
    }
  },
  summary: {
    name: 'menu.summarymanage',
    icon: 'el-icon-date',
    children: {
      daysummary: {
        name: 'menu.daysummary',
        path: '/summary/day'
      },
      weeksummary: {
        name: 'menu.weeksummary',
        path: '/summary/week'
      },
      monthsummary: {
        name: 'menu.monthsummary',
        path: '/summary/month'
      }
    }
  },
  content: {
    name: 'menu.articlemanage',
    icon: 'el-icon-document',
    children: {
      list: {
        name: 'menu.articlequery',
        icon: 'el-icon-edit-outline',
        path: '/article/list'
      },
      add: {
        name: 'menu.articleadd',
        icon: 'el-icon-edit-outline',
        path: '/article/add'
      }
    }
  }
};

export default menu;