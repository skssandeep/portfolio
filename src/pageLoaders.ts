import { lazy } from 'react';

// Every route except Home is loaded on demand, so a visitor who only sees the
// homepage never downloads the case studies. Routes and prefetch read the same
// map, so a page cannot be lazy-loaded without also being prefetchable.
type Loader = Parameters<typeof lazy>[0];
type LazyComponent = Awaited<ReturnType<Loader>>['default'];

// The pages use named exports; React.lazy needs a default.
const named = (load: () => Promise<Record<string, unknown>>, exportName: string): Loader =>
  () => load().then((m) => ({ default: m[exportName] as LazyComponent }));

export const pageLoaders: Record<string, Loader> = {
  '/drafts': named(() => import('./pages/Drafts'), 'Drafts'),
  '/case-study': named(() => import('./pages/CaseStudy'), 'CaseStudy'),
  '/smart-epp': named(() => import('./pages/SmartEPPCaseStudy'), 'SmartEPPCaseStudy'),
  '/snipkeep': named(() => import('./pages/SnipKeepCaseStudy'), 'SnipKeepCaseStudy'),
  '/ai-workflow': named(() => import('./pages/AIWorkflow'), 'AIWorkflow'),
  '/prototypes': named(() => import('./pages/Prototypes'), 'Prototypes'),
  '/essays': named(() => import('./pages/Essays'), 'Essays'),
  '/process': named(() => import('./pages/Process'), 'Process'),
};

// Called on hover and focus. People take 200-400ms between pointing at a card
// and clicking it, which is usually enough for the chunk to arrive.
export const prefetchPage = (path: string) => {
  const loader = pageLoaders[path];
  if (loader) loader();
};
