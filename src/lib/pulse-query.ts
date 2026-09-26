import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  getLeaderboard,
  getMarketDetail,
  getMyPulse,
  listHome,
} from "@/lib/pulse-api";

export const pulseKeys = {
  home: ["pulse", "home"] as const,
  market: (id: string) => ["pulse", "market", id] as const,
  me: ["pulse", "me"] as const,
  leaderboard: ["pulse", "leaderboard"] as const,
};

export function useHomePulse() {
  return useQuery({
    queryKey: pulseKeys.home,
    queryFn: () => listHome(),
  });
}

export function useMarketDetail(id: string) {
  return useQuery({
    queryKey: pulseKeys.market(id),
    queryFn: () => getMarketDetail({ data: { id } }),
    enabled: Boolean(id),
  });
}

export function useMyPulse() {
  const { user, isPending } = useCurrentUserState();
  return useQuery({
    queryKey: pulseKeys.me,
    queryFn: () => getMyPulse(),
    enabled: !isPending && Boolean(user),
  });
}

export function useLeaderboard() {
  return useQuery({
    queryKey: pulseKeys.leaderboard,
    queryFn: () => getLeaderboard(),
  });
}

export function useInvalidatePulse() {
  const qc = useQueryClient();
  return (marketId?: string) => {
    void qc.invalidateQueries({ queryKey: pulseKeys.home });
    void qc.invalidateQueries({ queryKey: pulseKeys.me });
    void qc.invalidateQueries({ queryKey: pulseKeys.leaderboard });
    if (marketId) void qc.invalidateQueries({ queryKey: pulseKeys.market(marketId) });
    else void qc.invalidateQueries({ queryKey: ["pulse", "market"] });
  };
}
