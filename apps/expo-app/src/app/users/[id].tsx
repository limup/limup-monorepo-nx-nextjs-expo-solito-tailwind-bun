import { useRoute, RouteProp } from '@react-navigation/native';
import { UserScreen } from '@limup-monorepo-nx-nextjs-expo-solito-tailwind-bun/features/users';
import { RootStackParamList } from '../navigation';

type UserPageRouteProp = RouteProp<RootStackParamList, 'users/[id]'>;

export default function UserPage() {
  const route = useRoute<UserPageRouteProp>();
  const id = route.params?.id ?? '';
  return <UserScreen id={id} />;
}
