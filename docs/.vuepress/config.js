module.exports = {
	title: 'pfLiu 的学习笔记',
	description: 'pfLiu 的学习笔记',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }]
	],
	themeConfig: {
		displayAllHeaders: true,
		// 左目录
		sidebar: [
			{
				title: '阅读说明', // 必要的
				path: '/', // 可选的, 标题的跳转链接, 应为绝对路径且必须存在
				collapsable: false, // 可选的,是否可以折叠 默认值是 true
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
	
				]
			},
			{
				title: '数据结构',
				collapsable: true,
				sidebarDepth: 1,
				children: [
				   "/structures/list-node"
				]
			}
		],
		// 导航栏链接
		nav: [
			{   
				text: '首页',
				link: '/'
			},
		]
	}
}
