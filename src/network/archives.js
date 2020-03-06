import { verification } from "./request";

export function loginRequest() {
	return verification({
		method: "post",
		url: "/getSms/"
	});
}
