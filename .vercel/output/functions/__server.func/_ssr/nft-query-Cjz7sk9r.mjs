import { G as useQueryClient, O as useQuery } from "../_libs/@rainbow-me/rainbowkit+[...].mjs";
import { f as getMyNftStake, m as listNfts, p as getNft } from "./router-BO0wqGQQ.mjs";
import { o as useCurrentUserState } from "./probly-wordmark-D3WF-xkE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nft-query-Cjz7sk9r.js
var nftKeys = {
	list: ["nft", "list"],
	detail: (id) => [
		"nft",
		"detail",
		id
	],
	stake: (id) => [
		"nft",
		"stake",
		id
	]
};
function useNftList() {
	return useQuery({
		queryKey: nftKeys.list,
		queryFn: () => listNfts()
	});
}
function useNftDetail(id) {
	return useQuery({
		queryKey: nftKeys.detail(id),
		queryFn: () => getNft({ data: { id } }),
		enabled: Boolean(id)
	});
}
function useMyNftStake(id) {
	const { user, isPending } = useCurrentUserState();
	return useQuery({
		queryKey: nftKeys.stake(id),
		queryFn: () => getMyNftStake({ data: { id } }),
		enabled: !isPending && Boolean(user) && Boolean(id)
	});
}
function useInvalidateNft() {
	const qc = useQueryClient();
	return (id) => {
		qc.invalidateQueries({ queryKey: nftKeys.list });
		qc.invalidateQueries({ queryKey: ["pulse", "me"] });
		qc.invalidateQueries({ queryKey: ["pulse", "leaderboard"] });
		if (id) {
			qc.invalidateQueries({ queryKey: nftKeys.detail(id) });
			qc.invalidateQueries({ queryKey: nftKeys.stake(id) });
		}
	};
}
//#endregion
export { useNftList as i, useMyNftStake as n, useNftDetail as r, useInvalidateNft as t };
