import UserListComponent from '@/components/user-list';
import React from 'react';

export default function DynamicPageWithSuspense() {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2">
        <h1>Dynamic Page</h1>
        <p>Static page content</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Dynamic content</h2>
        <UserListComponent />
      </div>
    </div>
  );
}
