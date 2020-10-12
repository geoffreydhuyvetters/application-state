import React from 'react';

import { Compose, createApplicationState } from './utils';

/////

export const [
  LanguageStateProvider,
  useApplicationStateLanguage,
] = createApplicationState('en');

export const [
  ColorStateProvider,
  useApplicationStateColor,
] = createApplicationState('green');

export const [
  NameStateProvider,
  useApplicationStateName,
] = createApplicationState('Geoffrey');

/////

export const ApplicationStateProvider = ({ children }) => (
  <Compose
    providers={[ColorStateProvider, LanguageStateProvider, NameStateProvider]}
  >
    {children}
  </Compose>
);
