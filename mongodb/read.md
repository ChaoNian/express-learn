安装 https://juejin.cn/post/7386873037109772298

启动
方式1、
在mongod 文件夹下 启动mongo
mongod --fork --dbpath data --logpath log/mongo.log --logappend

配置文件启动
命令行
 mongod -f /usr/local/mongodb/etc/mongodb.conf

新建终端
mongo


命令
显示所有数据库 show dbs

切换到指定的数据库， 如果数据库不存在会自动创建数据库 use 数据库名

显示当前所在的数据  db


删除当前数据库
use 库名
db.dropDatabase


集合命令：
切换到数据库
use xxx
创建数据库下的集合
db.createCollection({'users'})

显示集合
show collections

删除某个集合
db.集合名字.drop()

修改某个集合命令
db.集合名字.rename Collection('new'name)


文档操作：
插入文档
db.集合名.insert('文档对象')

查询对象
db.集合名.find('查询条件')
_id 是mongoDB 自动生成的唯一编号，用来唯一标识文档

更新文档
db.集合名.update(查询条件，新的文档) // 默认全部更新
db.集合名.update({name: 'xxx'}, {$set:{age: 15}}) // 只修改指定的某一部分属性

删除文档
db.集合名.remove(查询条件)

mongoose  一个对象文档模型库 https://mongoosejs.net/
作用是： 方便代码操作 mongodb 数据库
使用流程

  