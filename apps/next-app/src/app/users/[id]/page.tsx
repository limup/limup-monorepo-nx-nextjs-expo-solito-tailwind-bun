"use client";
import { useParams } from 'next/navigation';
import { UserScreen } from '@limup-monorepo-nx-nextjs-expo-solito-tailwind-bun/features/users';

export default function UserPage() {
  const params = useParams();
  const id = params?.id as string;
  return <UserScreen id={id ?? ''} />;
}
