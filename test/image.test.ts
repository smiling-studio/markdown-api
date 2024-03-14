// tests/image.test.ts
import {image} from '@/utils/image';
import {MarkdownAPI} from '@/markdown-api';

describe('image utility function', () => {
    test('creates a Markdown image', () => {
        const altText = 'OpenAI Logo';
        const imageUrl = 'https://example.com/openai-logo.png';
        const result = image(altText, imageUrl);
        expect(result).toBe(`![${altText}](${imageUrl})\n\n`);
    });
});

describe('MarkdownAPI Image Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addImage instance method', () => {
        const altText = 'Example Logo';
        const imageUrl = 'https://example.com/example-logo.png';
        markdown.addImage(altText, imageUrl);
        expect(markdown.getMarkdown()).toBe(`![${altText}](${imageUrl})\n\n`);
    });

    test('addImage static method', () => {
        const altText = 'Static Image';
        const imageUrl = 'https://example.com/static-image.png';
        const result = MarkdownAPI.AddImage(altText, imageUrl);
        expect(result).toBe(`![${altText}](${imageUrl})\n\n`);
    });
});
