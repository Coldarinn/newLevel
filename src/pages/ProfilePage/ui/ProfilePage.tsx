import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';

export interface ProfilePageProps {
  additionalClasses?: string[],
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { additionalClasses = [] } = props;

  const { id } = useParams<{id: string}>();

  return (
    <Page additionalClasses={[...additionalClasses]}>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
