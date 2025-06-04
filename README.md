# 🎵 Shotgun Clone - Mini Event App

Une version simplifiée de l'app Shotgun pour la découverte et l'achat de tickets d'événements musicaux.

## 🚀 Fonctionnalités

### ✅ Implémentées
- **📱 Liste d'événements** - Affichage de cartes avec image, date, lieu, artiste
- **🎫 Détail d'événement** - Page avec infos détaillées, bouton "Acheter un ticket"
- **💳 Achat fictif de ticket** - Simulation d'ajout au "wallet"
- **👛 Mon Wallet** - Voir mes tickets (fictifs), QR code, statut (à venir, expiré...)
- **🔍 Filtres** - Aujourd'hui / Ce week-end
- **📱 Design responsive** - Interface optimisée mobile/desktop
- **🎨 Thème sombre** - Design fidèle à Shotgun.live

### 🔧 Stack Technique
- **Next.js 15** (SSR + rapide à builder)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling rapide et responsive
- **GraphQL (Apollo Client)** - Gestion des données avec resolvers mock
- **LocalStorage** - Stockage des tickets fictifs
- **React QR Code** - Génération de QR codes pour les tickets

## 📁 Structure du Projet

```
src/
├── app/
│   ├── page.tsx              # Home - liste events
│   ├── event/[id]/page.tsx   # Event detail
│   └── wallet/page.tsx       # Liste de mes tickets
├── components/
│   ├── EventCard.tsx         # Carte d'événement
│   ├── EventsList.tsx        # Liste avec filtres
│   ├── EventDetail.tsx       # Détail complet
│   ├── WalletView.tsx        # Wallet avec QR codes
│   └── AppHeader.tsx         # Navigation
└── lib/
    ├── events.ts             # Données mock d'événements
    ├── wallet.ts             # Service de gestion des tickets
    ├── apollo.ts             # Configuration GraphQL
    └── graphql.ts            # Requêtes GraphQL
```

## 🎯 Parcours Utilisateur

1. **Découverte** - L'utilisateur voit la liste d'événements avec filtres
2. **Exploration** - Clic sur un événement → page détail avec description, lineup, map
3. **Achat** - Bouton "Acheter" → simulation d'achat fictif
4. **Wallet** - Accès aux tickets avec QR codes, statuts (à venir/expiré)

## 🔧 Installation & Lancement

```bash
# Cloner le repo
git clone git@github.com:flobby41/shotgun-clone-florian.git
cd shotgun-clone-florian

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'app sera disponible sur `http://localhost:3000`

## 🎨 Design & UX

- **Thème sombre** avec accents violet (comme Shotgun)
- **Cartes d'événements** avec hover effects
- **Typographie claire** et hiérarchie visuelle
- **QR codes** générés dynamiquement pour chaque ticket
- **Responsive design** mobile-first

## 🔮 Améliorations Possibles

- **Vraie API GraphQL** (remplacer les resolvers mock)
- **Authentification** utilisateur
- **Paiement réel** (Stripe/PayPal)
- **Géolocalisation** et cartes interactives
- **Push notifications** pour les événements
- **Partage social** des événements
- **Reviews & ratings** d'événements

## 🏗️ Architecture

L'app utilise une architecture moderne avec :
- **Apollo Client** pour la gestion d'état GraphQL
- **LocalStorage** pour la persistance des tickets
- **TypeScript** pour la type safety
- **Composants modulaires** réutilisables
- **Mock data** pour simuler une vraie API

---

**Note :** Il s'agit d'une démonstration technique. Aucun vrai paiement n'est traité, et les QR codes sont fictifs.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
