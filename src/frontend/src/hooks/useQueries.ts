import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserProfile } from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetProductsByName(name: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['products', 'byName', name],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByName(name);
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetProductsByPriceRange(minPrice: number, maxPrice: number) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['products', 'byPrice', minPrice, maxPrice],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByPriceRange(BigInt(minPrice), BigInt(maxPrice));
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useIsStripeConfigured() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['stripeConfigured'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isStripeConfigured();
    },
    enabled: !!actor && !actorFetching,
  });
}
