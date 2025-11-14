export function useUser(id: string) {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ];
  const user = users.find((u) => u.id === id);
  return { user };
}
