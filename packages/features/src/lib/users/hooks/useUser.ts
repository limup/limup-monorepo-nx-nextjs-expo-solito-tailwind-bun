export function useUser(id: string) {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ];
  const user = users.find((u) => u.id === id);
  return { user };
}
