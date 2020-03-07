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
  //登录验证码
  return verification({
    method: "post",
    url: "/getSms/",
    data
  });
}

export function getRegisteredStart(data) {
  //注册
  return verification({
    method: "post",
    url: "/register/",
    data
  });
}

export function getLoginStart(data) {
  //注册
  return verification({
    method: "post",
    url: "/login/",
    data
  });
}
