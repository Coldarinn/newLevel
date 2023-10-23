import { FeatureFlags } from '@/shared/types/featureFlags';

import { JsonSettings } from './jsonSettings';

export type UserRole = 'admin' | 'user' | 'manager';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  isLoading?: boolean;
  _inited: boolean;
}
