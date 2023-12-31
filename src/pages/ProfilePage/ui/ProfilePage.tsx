import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';

export interface ProfilePageProps {
  additionalClasses?: string[];
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{ id: string }>();

  return (
    <Page additionalClasses={[...additionalClasses]} dataTestid="ProfilePage">
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
