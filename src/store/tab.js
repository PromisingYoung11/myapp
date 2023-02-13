export default {
    state: {
        isCollapse: false, //控制菜单的展开还是收起
        tabList: [{
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }] //面包屑数据
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectTab(state, val) {
            //判断是否为首页
            console.log(val, 'val');
            if (val.name !== 'home') {
                //判断是否已存在
                const index = state.tabList.findIndex(item => item.name === val.name)
                console.log(index);
                if (index === -1) { //-1为不存在
                    state.tabList.push(val)
                }
            }
        },
        // 删除指点的tag数据
        closeTag(state, item) {
            const index = state.tabList.findIndex(val => val.name === item.name)
            state.tabList.splice(index, 1)
        }
    }
}