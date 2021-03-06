export default {
    components: {
        Home: () => import('./components/Home'),
        Component1: () => import('./components/Component1'),
	},
    options: {
        cnName: '仅修改默认Home的template',
        page3Background: `url(${require('./res/page3background.jpg')})`,
    },
    styles: [() => import('./base.less')],
    externalCss: ['/element-themes/index.css']
}