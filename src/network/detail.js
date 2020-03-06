import { detaildata } from "./request";

export function getDetail(iid) {
	return detaildata({
		url: "/detail",
		params: {
			iid
		}
	});
}

export function getDetailRecommend() {
	return detaildata({
		url: "/recommend"
	});
}

export class Goods {
	constructor(columns, shopInfo, itemInfo) {
		this.columns = columns;
		this.services = shopInfo.services;
		this.oldPrice = itemInfo.oldPrice;
		this.newPrice = itemInfo.price;
		this.title = itemInfo.title;
		this.discountDesc = itemInfo.discountDesc;
		this.lownowprice = itemInfo.lowNowPrice;
	}
}

export class Business {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.goods = shopInfo.cGoods;
		this.score = shopInfo.score;
	}
}

export class Parameters {
	constructor(itemParams) {
		this.set = itemParams.info.set;
		this.tables = itemParams.rule.tables[0];
	}
}
