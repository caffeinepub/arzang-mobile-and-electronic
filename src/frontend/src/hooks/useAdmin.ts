import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useAuth } from './useAuth';

export function useAdmin() {
  const { actor, isFetching: actorFetching } = useActor();
  const { isAuthenticated } = useAuth();

  const adminQuery = useQuery({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });

  return {
    isAdmin: adminQuery.data ?? false,
    isLoading: actorFetching || adminQuery.isLoading,
  };
}
