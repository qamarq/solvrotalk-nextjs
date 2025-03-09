import { Container } from '@/components/container'
import UserListComponent from '@/components/user-list'
import React, { Suspense } from 'react'

export default function DynamicPageWithLoading() {
  return (
    <Container className="flex-row gap-4 items-start h-auto">
      <div className="flex flex-col gap-2">
        <h1>Dynamic Page</h1>
        <p>Static page content</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Dynamic content</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <UserListComponent />
        </Suspense>
      </div>
    </Container>
  )
}
