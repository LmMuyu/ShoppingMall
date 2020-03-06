import axios from "axios";

export function request(config) {
	const instance = axios.create({
		baseURL: "http://106.54.54.237:8000/api/wh",
		timeout: 10000
	});

	instance.interceptors.response.use(
		res => {
			return res.data.data;
		},
		err => {
			return console.log(err);
		}
	);

	return instance(config);
}

export function detaildata(config) {
	const instance = axios.create({
		baseURL: "http://106.54.54.237:8000/api/wh",
		timeout: 10000,
	});
	instance.interceptors.response.use(
		res => {
			return res.data;
		},
		err => {
			return console.log(err);
		}
	);

	return instance(config);
}

export function verification(config) {
	const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi";

	const verificationCode = axios.create({
		baseURL: BASEURL,
		timeout: 10000
	});

	verificationCode.interceptors.response.use(
		res => {
			return res.data;
		},
		error => {
			return Promise.reject(error);
		}
	);

	//发送真正的网络请求
	return verificationCode(config);
}
