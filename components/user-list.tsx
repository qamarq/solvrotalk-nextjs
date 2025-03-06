import { db } from '@/lib/db';
import React from 'react';

export default async function UserListComponent() {
  const users = await db.slowGetUsers();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
