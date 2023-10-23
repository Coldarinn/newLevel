import { buildSelector } from '@/shared/lib/store';

export const [useUserIsLoading] = buildSelector(
  (state) => state.user.isLoading,
);
