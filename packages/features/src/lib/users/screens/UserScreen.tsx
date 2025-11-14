import { View, Text, Pressable } from 'react-native';
import { Link } from 'solito/link';
import { useUser } from '../hooks/useUser';

type Props = { id: string };

export function UserScreen({ id }: Props) {
  const { user } = useUser(id);
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      <View className="w-full max-w-sm rounded-3xl bg-white/10 p-6 shadow-2xl shadow-slate-950/40">
        <Text className="text-center text-lg font-semibold uppercase tracking-wide text-slate-200">
          Usuário
        </Text>
        <Text className="mt-4 text-center text-3xl font-bold text-white">
          {user?.name ?? 'Usuário não encontrado'}
        </Text>
        <Text className="mt-2 text-center text-base text-slate-300">ID: {id}</Text>

        <Link href="/">
          <Pressable className="mt-8 items-center rounded-2xl bg-blue-500 px-5 py-3 active:bg-blue-600">
            <Text className="text-base font-semibold text-white">Voltar para Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
