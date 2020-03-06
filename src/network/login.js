import { verification } from "./request";

export function getVerification(data) {
	//注册验证码
	return verification({
		method: "post",
		url: "/getSms/",
		data
	});
}

export function getLogin(data) {
	//注册验证码
	return verification({
		method: "post",
		url: "/getSms/",
		data
	});
}