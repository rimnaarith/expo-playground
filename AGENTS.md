# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# React Native + Expo Project Architecture Guide

This document defines the project architecture, coding conventions, and styling guidelines for all contributors and AI coding agents.

---

# Core Principles

1. Use **Feature-First Architecture**.
2. Keep **routing separate from business logic**.
3. Keep **UI separate from business logic**.
4. Keep **business logic separate from API communication**.
5. Prefer **composition over inheritance**.
6. Each feature owns its own components, hooks, services, state, types, and validation.
7. Shared code belongs in `src/`; feature-specific code belongs inside `src/features`.
8. Follow the **Single Responsibility Principle** for files, components, and functions.
9. Keep code simple, readable, and maintainable.

---

# Project Structure

```
app/
├── _layout.tsx
├── (auth)/
├── (tabs)/
├── post/
└── ...

src/
├── api/
├── assets/
├── components/
│   ├── ui/
│   ├── form/
│   └── common/
├── config/
├── features/
├── hooks/
├── lib/
├── providers/
├── store/
├── styles/
├── types/
└── utils/
```

---

# Folder Responsibilities

## app/

Contains **Expo Router pages only**.

Pages should be extremely small.

Good

```tsx
export { default } from "@/features/home/screens/HomeScreen";
```

The `app/` directory should only:

- Define routes
- Configure layouts
- Handle route groups

Do **not** put:

- API calls
- Validation
- Business logic
- State management
- Complex UI

---

## src/features

Every business feature lives here.

Example

```
features/
    auth/
    post/
    profile/
    notification/
```

Each feature owns everything related to itself.

Example

```
features/post/

├── components/
├── hooks/
├── screens/
├── services/
├── store/
├── types.ts
├── validation.ts
├── constants.ts
├── mapper.ts
└── index.ts
```

A feature should be as self-contained as possible.

Never import another feature's internal files.

Good

```ts
import { usePosts } from "@/features/post";
```

Bad

```ts
import { usePosts } from "@/features/post/hooks/usePosts";
```

Always import through the feature's public `index.ts`.

---

# Screens

Feature screens live inside the feature.

```
features/post/screens/
```

Expo Router pages simply re-export them.

Example

```tsx
export { default } from "@/features/post/screens/PostDetailScreen";
```

---

# Components

## Shared Components

```
src/components/
```

Contains reusable UI.

Examples

```
Button
Card
Input
Avatar
Modal
Loading
```

These components must not contain business logic.

---

## Feature Components

```
features/post/components/
```

Contains components used only by that feature.

Examples

```
PostCard
PostGrid
CommentList
LikeButton
```

Do not move feature-specific components into shared folders.

---

# Hooks

## Global Hooks

```
src/hooks/
```

Examples

```
useTheme
useDebounce
usePermissions
useNetwork
```

Must be generic and reusable.

---

## Feature Hooks

```
features/post/hooks/
```

Examples

```
usePosts
useCreatePost
useDeletePost
useComments
```

Business logic belongs here.

---

# API Layer

```
src/api/
```

Contains only shared API infrastructure.

Examples

```
client.ts
interceptors.ts
```

This folder should never contain business endpoints.

---

# Services

Each feature owns its own service.

Example

```
features/post/services/post.service.ts
```

Responsibilities:

- Call backend APIs
- Transform request/response data
- Handle endpoint-specific logic

Do not:

- Update UI
- Navigate
- Show alerts
- Access React state

---

# State Management

Use:

- **Zustand** for client state.
- **TanStack Query** for server state.

## Global State

```
src/store/
```

Examples

```
auth.store.ts
theme.store.ts
ui.store.ts
```

Only application-wide state belongs here.

---

## Feature State

```
features/post/store/
```

Examples

```
draftPost
selectedPost
filters
```

Keep feature state close to the feature.

---

# Forms

Use:

- React Hook Form
- Zod

Validation belongs inside the feature.

```
features/post/validation.ts
```

Never perform validation inside components.

---

# Types

Feature types

```
features/post/types.ts
```

Shared types

```
src/types/
```

Examples

```
api.ts
navigation.ts
common.ts
```

---

# Utils

```
src/utils/
```

Contains pure utility functions.

Examples

```
formatDate()
capitalize()
truncate()
```

Utilities must not depend on React.

---

# Lib

```
src/lib/
```

Contains wrappers around third-party libraries.

Examples

```
storage.ts
queryClient.ts
logger.ts
```

Never use third-party libraries directly throughout the app.

Good

```ts
storage.set(...)
```

Bad

```ts
AsyncStorage.setItem(...)
```

---

# Providers

```
src/providers/
```

Examples

```
AuthProvider
ThemeProvider
QueryProvider
```

Compose providers in the root layout.

---

# Assets

```
assets/
├── fonts/
├── icons/
├── images/
└── animations/
```

---

# Styling Guide (NativeWind)

This project uses **NativeWind** as the primary styling solution.

---

## Styling Principles

- Prefer **NativeWind** (`className`) for all styling.
- Keep styles close to the component.
- Avoid `StyleSheet.create()` unless required.
- Avoid inline styles except for truly dynamic values.
- Use semantic design tokens instead of hardcoded colors.
- Build reusable UI components instead of repeating utility classes.

---

## Styling Priority

1. NativeWind (`className`)
2. Reusable UI components
3. `StyleSheet.create()`
4. Inline `style`

---

## NativeWind

Good

```tsx
<View className="flex-1 items-center justify-center bg-background">
  <Text className="text-lg font-semibold text-foreground">Hello</Text>
</View>
```

Avoid

```tsx
<View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  }}
/>
```

---

## Dynamic Classes

Use a utility like `cn()` (`clsx` + `tailwind-merge`).

Good

```tsx
<Button
  className={cn(
    "rounded-xl",
    disabled && "opacity-50",
    selected && "border-primary",
  )}
/>
```

Avoid manually concatenating class strings.

---

## Theme

Never hardcode colors.

Good

```tsx
className = "bg-primary text-primary-foreground";
```

Avoid

```tsx
className = "bg-blue-600 text-white";
```

Theme colors should come from the Tailwind configuration.

---

## Spacing

Use Tailwind spacing utilities.

Good

```tsx
className = "p-4 gap-3 mt-6";
```

Avoid

```tsx
style={{
    padding: 17,
    marginTop: 11,
}}
```

---

## Typography

Prefer Tailwind typography utilities.

Good

```tsx
<Text className="text-xl font-semibold">
```

---

## Layout

Prefer Flexbox utilities.

Good

```tsx
<View className="flex-row items-center justify-between">
```

---

## Reusable Components

If utility classes are reused repeatedly, extract a component.

Good

```
components/ui/Button.tsx
components/ui/Card.tsx
components/ui/Badge.tsx
```

Avoid duplicating the same utility classes across multiple screens.

---

## Icons

Use one icon library consistently.

Recommended

- `lucide-react-native`
- `@expo/vector-icons`

---

## Images

Prefer `expo-image` over the default React Native `Image`.

---

## Animations

Preferred libraries

- React Native Reanimated
- React Native Gesture Handler

---

# Naming Conventions

Components

```
UserCard.tsx
PostItem.tsx
```

Hooks

```
usePosts.ts
useLogin.ts
```

Services

```
post.service.ts
auth.service.ts
```

Stores

```
post.store.ts
auth.store.ts
```

Validation

```
validation.ts
```

Types

```
types.ts
```

Constants

```
constants.ts
```

Mapper

```
mapper.ts
```

---

# Dependency Flow

```
Expo Router Page
        ↓
Feature Screen
        ↓
Feature Hook
        ↓
Feature Service
        ↓
API Client
        ↓
Backend
```

Dependencies should always flow downward.

Never import upward.

---

# Preferred Libraries

| Purpose        | Library                      |
| -------------- | ---------------------------- |
| Routing        | Expo Router                  |
| API            | Axios                        |
| Server State   | TanStack Query               |
| Client State   | Zustand                      |
| Forms          | React Hook Form              |
| Validation     | Zod                          |
| Styling        | NativeWind                   |
| Secure Storage | Expo Secure Store            |
| Local Storage  | AsyncStorage                 |
| Image          | Expo Image                   |
| Animation      | React Native Reanimated      |
| Gestures       | React Native Gesture Handler |
| Icons          | lucide-react-native          |

---

# Rules for AI Coding Agents

When generating code:

- Follow the Feature-First Architecture.
- Keep Expo Router pages as thin routing layers.
- Put business logic in hooks or services.
- Never perform API calls directly inside components.
- Never place feature-specific code in shared folders.
- Prefer reusable components over duplicated UI.
- Always import a feature through its `index.ts` barrel export.
- Keep files focused on a single responsibility.
- Use strict TypeScript; avoid `any` whenever possible.
- Use functional components and React hooks.
- Use TanStack Query for server state.
- Use Zustand for client state.
- Use React Hook Form + Zod for forms.
- Use NativeWind (`className`) for styling by default.
- Avoid `StyleSheet.create()` unless there is a clear technical reason.
- Use semantic theme classes (`bg-primary`, `text-foreground`, etc.) instead of hardcoded colors.
- Extract repeated UI into reusable components.
- Create self-contained feature folders with their own `components`, `screens`, `hooks`, `services`, `store`, `types`, `validation`, and `index.ts`.
- Write clean, maintainable, and production-quality code that follows modern React Native and Expo best practices.
