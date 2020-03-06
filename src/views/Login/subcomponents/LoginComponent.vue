<template>
  <div class="logincomponent">
    <div class="loginfrom">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        class="demo-ruleForm"
        :inline-message="true"
        size="mini"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="ruleForm2.email"
            prefix-icon="el-icon-message"
            auto-complete="off"
            clearable
            @input="inputEnter"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            prefix-icon="el-icon-edit"
            v-model="ruleForm2.pass"
            clearableauto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="faot">
          <el-input v-model="ruleForm2.code" auto-complete="off" clearable class="isleft"></el-input>
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
import { getLogin } from "network/login";

import { loginmixin } from "common/mixin";

export default {
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
      if (value !== "200216") {
        callback(new Error("验证码错误!!"));
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
          this.$Notify({ type: "danger", message: "登录成功" });
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
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.logincomponent{
  margin-top: 25px;
}
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
  width: 80px;
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
.borders {
  border: 1px solid red;
  border-radius: 5px;
}
</style>