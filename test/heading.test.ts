// tests/heading.test.ts
import {heading} from '@/utils/heading';
import {MarkdownAPI} from '@/markdown-api';

describe('heading utility function', () => {
    test('creates a Markdown heading level 1', () => {
        const text = 'Heading Level 1';
        const level = 1;
        const result = heading(text, level);
        expect(result).toBe(`# ${text}\n\n`);
    });

    test('creates a Markdown heading level 3', () => {
        const text = 'Heading Level 3';
        const level = 3;
        const result = heading(text, level);
        expect(result).toBe(`### ${text}\n\n`);
    });

    test('throws an error for invalid heading level', () => {
        const text = 'Invalid Heading';
        const level = 0; // Invalid level
        expect(() => heading(text, level)).toThrow('Invalid heading level: 0');
    });
});

describe('MarkdownAPI Heading Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addHeading instance method', () => {
        const text = 'Instance Heading Level 2';
        const level = 2;
        markdown.addHeading(text, level);
        expect(markdown.getMarkdown()).toBe(`## ${text}\n\n`);
    });

    test('addHeading static method', () => {
        const text = 'Static Heading Level 4';
        const level = 4;
        const result = MarkdownAPI.AddHeading(text, level);
        expect(result).toBe(`#### ${text}\n\n`);
    });
});
