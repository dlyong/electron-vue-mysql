<template>
  <div id="wrapper" align="center">
    <table border="1" align="center">
      <tr>
        <td>序号</td><td>姓名</td><td>操作</td>
      </tr >
        <tr v-for="item in this.userTable">
          <td>{{item.id}}</td><td>{{item.username}}</td>
          <td>
            <button @click="handleDel(item.id)">删除</button>
            <button @click="handleUpdate(item.id)">更改</button>
          </td>
        </tr>
    </table>
    <div style="padding-top: 100px;cursor: pointer" >
      <button @click="addUser">添加新用户</button>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  export default {
    name: 'landing-page',
    components: {SystemInformation},
    data () {
      return {
        userTable:[],
        user: this.$sequelize.model('user')
      }
    },
    methods: {
      open(link) {
        require('electron').shell.openExternal(link)
      },
      // 增
      async addUser(){
        let _this = this
       /* let user = this.$sequelize.model('user');*/
        await  this.user.create({
          username:'wangerxiao'
        }).then(function (result) {
          console.log("插入成功"+result);
          _this.init()
        }).catch(function (err) {
          console.log("插入失败"+err);
        })
      },
      // 删
      async handleDel(id) {
        let _this = this
      /*  let user = this.$sequelize.model('user');*/
        this.user.destroy({where:{id:id}}).then(function (result) {
          _this.init()
          console.log("delete success：" +result)
        }).catch(function (err) {
          console.log("delete fail："+ err)
        })
      },
      async handleUpdate(id) {
        let _this = this
        this.user.findOne({where: {id:id}}).then(
          function (user) {
            user.update({
              username:'wudalang'
            }).then(function (result) {
              console.log("update success：" +result)
              _this.init()
            }).catch(function (err) {
              console.log("update fail："+ err)
            })
          }).catch(function (err) {
          console.log("无此用户")
        })
      },
      async init(){
        this.userTable = await this.user.findAll()
      }

    },
    mounted() {
      this.init()
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
