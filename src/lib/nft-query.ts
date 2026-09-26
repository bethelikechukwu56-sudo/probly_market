import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getMyNftStake, getNft, listNfts } from "@/lib/nft-api";

export const nftKeys = {
  list: ["nft", "list"] as const,
  detail: (id: string) => ["nft", "detail", id] as const,
  stake: (id: string) => ["nft", "stake", id] as const,
};

export function useNftList() {
  return useQuery({
    queryKey: nftKeys.list,
    queryFn: () => listNfts(),
  });
}

export function useNftDetail(id: string) {
  return useQuery({
    queryKey: nftKeys.detail(id),
    queryFn: () => getNft({ data: { id } }),
    enabled: Boolean(id),
  });
}

export function useMyNftStake(id: string) {
  const { user, isPending } = useCurrentUserState();
  return useQuery({
    queryKey: nftKeys.stake(id),
    queryFn: () => getMyNftStake({ data: { id } }),
    enabled: !isPending && Boolean(user) && Boolean(id),
  });
}

export function useInvalidateNft() {
  const qc = useQueryClient();
  return (id?: string) => {
    void qc.invalidateQueries({ queryKey: nftKeys.list });
    void qc.invalidateQueries({ queryKey: ["pulse", "me"] });
    void qc.invalidateQueries({ queryKey: ["pulse", "leaderboard"] });
    if (id) {
      void qc.invalidateQueries({ queryKey: nftKeys.detail(id) });
      void qc.invalidateQueries({ queryKey: nftKeys.stake(id) });
    }
  };
}
