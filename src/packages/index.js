
const install =(Vue)=>{
    // require.context('文件路径','','匹配文件')
    const requreComponent=require.context('.',true,/\.vue/);
    requreComponent.keys().forEach(fileName=>{
        const config=requreComponent(fileName);
        Vue.component(config.default.name,config.default)
    })
}
export default {
    install
}