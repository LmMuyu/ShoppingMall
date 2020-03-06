import BackTop from "components/content/backtop/BackTop";

export const backtopmixin = {
	components: {
		BackTop
	},
	data() {
		return {
			show: false
		};
	},
	methods: {
		backclick() {
			this.$refs.scroll.scrollTo();
		}
	}
};

export const loginmixin = {
	data() {
		return {
			regex: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			true: true,
			timer: 0, //验证码秒数
			time: null, //验证码倒计时
			bode: false, //邮箱错误时显示的边框颜色
			buttonStatus: true
		};
	},
	methods: {
		sendCode() {
			//倒计时
			if (this.time) return false;

			this.timer = 60; //获取验证码的时间为60s

			this.time = setInterval(() => {
				//启动倒计时
				this.timer--;

				if (this.timer <= 0) {
					clearInterval(this.time);
					this.time = null;
				}
			}, 1000);

			//发送验证码
			this.getVerificationCode();
		},
		inputEnter() {
			//每一次输入用正则判断邮箱符不符合规范，规范取消按钮禁用状态
			if (this.ruleForm2.email.match(this.regex)) {
				this.buttonStatus = false;
			}

			//判断邮箱有没有值，没有按钮进入禁用状态
			if (!this.ruleForm2.email) {
				this.buttonStatus = true;
			}
		}
	},
	computed: {
		timesr() {
			return this.timer === 0 ? "获取验证码" : `${this.timer}s`;
		}
	}
};
