const base = {
    get() {
        return {
            url : "http://localhost:8080/yiqingjujiajianceguanli/",
            name: "yiqingjujiajianceguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiqingjujiajianceguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情居家检测管理系统"
        } 
    }
}
export default base
