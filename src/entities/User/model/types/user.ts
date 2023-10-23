import { FeatureFlags } from '@/shared/types/featureFlags';

export type UserRole = 'admin' | 'user' | 'manager';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
