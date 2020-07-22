<template>
  <div class="container">
    
    <div class="row" style="height: 10%;">
      <div class="col">
        <img src="../assets/kku.png" class="logo" alt="" />
        <img src="../assets/an.png" class="logo" alt="" />
        <img src="../assets/en.png" class="logo" alt="" />
      </div>
    </div>
    <div class="row" style="height: 40%;">
      <div class="col" id="title_img">
        <img id="img" src="../assets/title.png" alt="" />
      </div>
    </div>
    <div class="row" style="text-align: center; padding-top: 20px;">
      <div style="text-align: center; width: 100%; padding: 0px; height: 10%;">
        <h2>เก็บข้อมูล</h2>
        <p>ประชากร</p>
      </div>
      <div class="div_btn" v-if="this.status === 'default'">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="login">
          เข้าสู่ระบบ
        </button>
        <button type="button" class="btn btn-register btn-lg" v-on:click="register">ลงทะเบียน</button>
      </div>
    </div>

    <div v-if="this.status === 'login'" class="body" id="slide">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; color:#508944; font-size: 20px;
        border: 2px solid #508944; border-radius: 50%;"
      >
        X
      </button>
      <div style="magin-top:110px; height:70px "></div>
      <div>
        <h2 style="coloe:#C6D589;">เข้าสู่ระบบ</h2>
        <div class="form-group">
          <label for="exampleFormControlInput1">บัญชี</label>
          <input
            type="email"
            class="form-control"
            id="input_login"
            placeholder="name@example.com"
            v-model="email"
          />
          <br />
          <label for="exampleFormControlInput1">รหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            id="input_login"
            placeholder="xxxxxxxxx"
            v-model="password"
          />
        </div> 
         <button type="button" class="btn-ok" v-on:click="nextpage">ตกลง</button>
   
      </div>
     </div>

     <div v-if="this.status === 'register'" class="body" id="slide">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; color:#508944; font-size: 20px;
        border: 2px solid #508944; border-radius: 50%;"
      >
        X
      </button>
      <div style="magin-top:110px; height:70px "></div>
      <div>
        <h2 style="coloe:#C6D589;">ลงทะเบียน</h2>
        <div class="form-group">
          <label for="exampleFormControlInput1">บัญชี</label>
          <input
            type="email"
            class="form-control"
            id="input_login"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="exampleFormControlInput1">รหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            id="input_login"
            placeholder="xxxxxxxxx"
            v-model="password"
          />
          <label for="exampleFormControlInput1">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            id="input_login"
            placeholder="xxxxxxxxx"
            v-model="passwordConfirm"
          />
        </div> 
         <button type="button" class="btn-ok" v-on:click="signup">ตกลง</button>
   
      </div>
     </div>

     <div id="load" v-if="this.status_load === 'load'">
      <h4
        style="display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
      color: #ffffff;
      margin-top: 300px"
      >กำลังเข้าระบบ</h4>
      <sync-loader
        style="display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;"
      ></sync-loader>
    </div>
  
  </div>
  
</template>

<script>
import * as firebase from "firebase/app";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import "firebase/auth";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  components:{
    SyncLoader
  },
  data: function() {
    return {
      status: "default",
      email: "",
      password: "",
      loader: false,
      passwordConfirm: '',
      status_load: "default",
    };
  },
  methods: {
    login() {
      this.status = "login";
    },
    cancel() {
      this.status = "default";
    },
    register(){
      //this.status = "register";
      alert("ยังไม่พร้อมใช้งาน");
    },
    async signup(){
      alert("ยังไม่พร้อมใช้งาน")

    },
    async nextpage() {
      this.loader = true;
      this.status_load = "load"
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("home");
            //console.log(data);
          },
          (err) => {
            alert("ับัญชี หรือ รหัสผ่าน ไม่ถูกต้อง!");
            console.log(err);
            this.status_load = "default"
          }
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#load {
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.075);
}
#title_img {
  width: 100%;
  text-align: center;
  margin: auto;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  padding-top: 0px;
}
.container {
  height: 100%;
  width: 100%;
  margin: auto;
}
.logo {
  width: 40px;
  margin: 16px;
}
.col {
  padding: 0px;
}
.title_img {
  width: 40%;
  text-align: center;
  margin: 0;
}
.btn-primary {
  background-color: #508944 !important;
  color: #ffffff;
  border: 0px;
  width: 60%;
  border-radius: 50px;
}
.btn-register {
  background-color: inherit !important;
  color: #848282;
  border: 0px;
  font-size: 16px;
  width: 60%;
}
.div_btn {
  width: 100%;
  text-align: center;
  margin-top: 7%;
}
.body {
  text-align: center;
  border-radius: 20px 20px 0px 0px;
  margin: 0;
  background-color: #ffffff;
  box-shadow: 0 0 10px #f3f3f3, 0 0 20px #e2e2e2;
}
.btn-primary {
  background-color: #508944 !important;
  color: #ffffff;
  border: 0px;
  width: 60%;
  border-radius: 50px;
}
.btn-register {
  background-color: inherit !important;
  color: #848282;
  border: 0px;
  font-size: 16px;
  width: 60%;
}
.btn-secondary {
  background-color: #84828200 !important;
  color: #848282;
  border: 0px;
  width: auto;
  margin: 5px;
  font-size: 25px;
}
.btn-ok {
  background-color: #508944;
  color: #ffffff;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  height: 40px;
  font-size: 22px;
  width: 55%;
  margin-top: 5%;
  margin-bottom: 20px;
}
.form-group {
  text-align: left;
  margin: 0pc 16px 0px 16px;
}
.form-control {
  background-color: #eeeeee;
  border-radius: 50px;
  border: 0;
}
#slide {
  position: absolute;
  bottom: -200px;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0.2s;
  animation: slide 0.5s forwards;
  animation-delay: 0.2s;
}
@-webkit-keyframes slide {
  100% {
    bottom: 0;
  }
}

@keyframes slide {
  100% {
    bottom: 0;
  }
}
@media only screen and (max-width: 480px) {
  #slide {
    position: absolute;
    bottom: -500px;
    width: 92%;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 0.2s;
    animation: slide 0.5s forwards;
    animation-delay: 0.2s;
  }
  #img {
    width: 100%;
    text-align: center;
    padding-top: 20%;
    margin: auto;
  }
}
</style>
