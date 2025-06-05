'use client'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/apollo'
import WalletView from '@/components/WalletView'
import AppHeader from '@/components/AppHeader'


export default function WalletPage() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-black text-white">
        <AppHeader />
        <main>
          <WalletView />
        </main>
      </div>
    </ApolloProvider>
  )
}