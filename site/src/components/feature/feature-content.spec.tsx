import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import {FeatureContentComponent } from './feature-content';

test(`[FeatureContentComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FeatureContentComponent data={[{title:"Test Title", description:"Test Description", svgid:"#test", svgxmlns:"https://www.google.com/svg"}]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('Test Description');
});
