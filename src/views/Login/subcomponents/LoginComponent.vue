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
            clearableauto-complete="off"
            placeholder="输入密码"
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
            <a class="registered">立即注册</a>
          </span>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" class="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLogin, getLoginStart } from "network/login";

import loginBack from "./loginBack";

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
        code: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
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
           * username：用户名（邮箱）*
           *password：密码*
           *code：验证码*
           */

          let loginParameter = {
            username: this.ruleForm2.email,
            password: this.ruleForm2.pass,
            code: this.ruleForm2.code
          };

          getLoginStart(loginParameter).then(res => {
            console.log(res);

            if (res.resCode !== 0) {
              this.$Notify({ type: "primary", message: res.message });
            } else {
              let userData = {
                username: res.data.username,
                avatar:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583565648703&di=1b814d41ea84531fe5861fb2f3671b2f&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0dd7912397dda144dac4acc9b2b7d0a20df486f8.jpg",
                RealNameVerification: false,
                phone: "1538993458"
              };

              this.$store.commit("clearfix", userData);

              this.$Notify({ type: "primary", message: res.message });
            }
          });
        } else {
          return false;
        }
      });
    },
    registeredJump() {
      this.$router.push("/registered");
    },
    getVerificationCode() {
      let registeredData = {
        username: this.ruleForm2.email,
        module: "login"
      };

      getLogin(registeredData).then(res => {
        //信息通知
        this.$Notify({ type: "primary", message: res.message });
      });
    }
  }
};
</script>

<style scoped>
.yanz {
  margin-left: 25px;
}
.flaot {
  display: flex;
  flex-direction: row;
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
</style>