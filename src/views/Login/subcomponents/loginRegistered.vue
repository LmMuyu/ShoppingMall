<template>
  <div class="logincomponent">
    <login-back />
    <div class="loginfrom">
      <el-form
        :model="ruleForm2"
        :rules="rules2"
        ref="ruleForm2"
        class="demo-ruleForm"
        :inline-message="true"
        size="mini"
      >
        <el-form-item prop="email">
          <el-input
            v-model="ruleForm2.email"
            prefix-icon="el-icon-message"
            auto-complete="off"
            clearable
            @input="inputEnter"
            placeholder="输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            prefix-icon="el-icon-edit"
            v-model="ruleForm2.pass"
            clearable
            auto-complete="off"
            placeholder="输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            prefix-icon="el-icon-edit"
            v-model="ruleForm2.checkPass"
            clearable
            auto-complete="off"
            placeholder="确定密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="faot">
          <el-input
            v-model="ruleForm2.code"
            auto-complete="off"
            clearable
            class="isleft"
            maxlength="6"
          ></el-input>
          <van-button
            class="yanz"
            @click.prevent="sendCode"
            type="info"
            plain
            hairline
            round
            size="small"
            :disabled="buttonStatus"
          >{{timesr}}</van-button>
        </el-form-item>
        <div>
          <span @click="registeredJump" class="regis">
            <a class="registered">返回登录</a>
          </span>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" class="submit">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginBack from "./loginBack";

import { getVerification, getRegisteredStart } from "network/login";
import { loginmixin } from "common/mixin";

export default {
  components: {
    loginBack
  },
  mixins: [loginmixin],
  data() {
    var verifyemail = (rule, value, callback) => {
      if (!value) return callback(new Error("邮箱不能为空"));

      setTimeout(() => {
        if (!String(value).match(this.regex)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }, 1000);
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (value.length < 6) {
          callback(new Error("请输入大于6位数的密码"));
        } else {
          callback();
        }
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };

    var verificationCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入验证码"));
        return false;
      }

      if (value !== this.ruleForm2.code) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        email: "",
        pass: "",
        code: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: verifyemail, trigger: "blur" }],
        code: [{ validator: verificationCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          /**
           *username：用户名（邮箱）*
           *password：密码*
           *code：验证码*
           */
          let RegisteredParameter = {
            username: this.ruleForm2.email,
            password: this.ruleForm2.pass,
            code: this.ruleForm2.code
          };

          getRegisteredStart(RegisteredParameter).then(res => {
            this.$Notify({ type: "danger", message: res.message });
          });
        } else {
          return false;
        }
      });
    },
    registeredJump() {
      this.$router.push("/login").catch(err => {
        err;
      });
    },
    getVerificationCode() {
      //获取邮箱注册信息
      let registeredData = {
        username: this.ruleForm2.email,
        module: "register"
      };

      getVerification(registeredData).then(res => {
        //信息通知
        this.$Notify({ type: "primary", message: res.message });
      });
    }
  }
};
</script>

<style scoped>
.logincomponent {
  height: 100vh;
  position: relative;
  z-index: 12;
  background-color: #f0f0f0;
}
.yanz {
  margin-left: 25px;
}
.flaot {
  display: flex;
}
.flaot span {
  margin-left: 25px;
}
.isleft {
  width: 90px;
}
.submit {
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  font-size: 16px;
}
.loginfrom {
  margin: 0 auto;
  background-color: #fff;
  padding: 35px 35px 35px 35px;
  margin-top: 25px;
}
.regis {
  display: block;
  float: none;
}
.registered {
  float: none;
  color: red;
  font-size: 14px;
}
.flaot span {
  margin-left: 0;
}
</style>