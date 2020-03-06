import { request } from "./request";

export function getHomeMultidata() {
  return request("/home/multidata");
}

export function getHomeGoodsdata(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
