import { View, Text } from 'react-native';
import { Link } from 'solito/link';
import { useUser } from '../hooks/useUser';

type Props = { id: string };

export function UserScreen({ id }: Props) {
  const { user } = useUser(id);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>{user?.name ?? 'User not found'}</Text>
      <Text style={{marginBottom:8}}>ID: {id}</Text>
      <Link href="/"><Text style={{color:'#2563EB'}}>Go Home</Text></Link>
    </View>
  );
}
