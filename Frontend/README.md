# SoulLume mobile starter

Cross-platform React Native + Expo + TypeScript starter for SoulLume.

## Requirements
- Node.js LTS
- Git
- Expo Go on a phone (or Android Studio / Xcode simulator)

## Run locally
```bash
npm install
npx expo start
```
Scan the QR code with Expo Go, or press `a` for Android emulator / `i` for iOS simulator.

## Included
- Expo Router tabs
- Reusable `AppText`, `Screen`, `Button`, `Card`, `SectionHeader`, `StatCard`
- Centralized colors, spacing and typography
- Responsive, scrollable Home screen with placeholder data
- Placeholder Journal, Habits, Analysis and Calm Me screens

## Team workflow
1. One person creates the GitHub repository and pushes this starter to `main`.
2. Create `develop` from `main`.
3. Each developer creates a feature branch from `develop`.
4. Work on separate screens/files; pull before starting and open a PR into `develop`.
5. Merge to `main` only after the app runs and the team reviews it.

Suggested ownership:
- Frontend lead: app structure, design tokens, shared UI, Home, Analysis, Profile, integration.
- Frontend teammate: Journal, Habits, Calm Me and their screen-specific components.

## Important
The included screens use local placeholder data only. They are not connected to Supabase or an AI service yet.
Keep credentials out of source control. Use a secure backend/Edge Function for any private LLM key.
