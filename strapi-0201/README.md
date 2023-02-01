# strapi-0201

启动是 `yarn develop`

然后到 http://localhost:1337/admin/ 可以看到后台管理界面，但是只看效果的话前台就可以

email: huamurui@outlook.com

pass: Aa000000

可以在 /my-strapi/.tmp 下找到默认的SQLite数据库文件

从管理员用户、数据/接口类型到具体的数据内容都在这里.

我把 .tmp .env 这些文件都从 gitignore 列表中移除了，所以，可以直接用...

还有一件事，现在的这个strapi，如果用 sqlite 数据库，有一个插件 better-sqlite 在node18下可能是不支持的，把node版本换成16可以。
