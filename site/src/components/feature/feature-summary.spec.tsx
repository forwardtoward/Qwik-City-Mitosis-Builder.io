import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import {FeatureSummaryComponent } from './feature-summary';

test(`[FeatureSummaryComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FeatureSummaryComponent title="Test Title" description="Test Description" url="https://www.google.com" svgid="#test" svgxmlns="https://www.google.com/svg"/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('Test Description');
  expect(screen.outerHTML).toContain('https://www.google.com');
});

