// tests/image.test.ts
import {image} from '@/utils/image';
import {MarkdownAPI} from '@/markdown-api';

describe('image utility function', () => {
    test('creates a Markdown image', () => {
        const altText = 'OpenAI Logo';
        const imageUrl = 'https://example.com/openai-logo.png';
        const result = image(imageUrl, altText);
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
        markdown.addImage(imageUrl, altText);
        expect(markdown.getMarkdown()).toBe(`![${altText}](${imageUrl})\n\n`);
    });

    test('addImage static method', () => {
        const altText = 'Static Image';
        const imageUrl = 'https://example.com/static-image.png';
        const result = MarkdownAPI.AddImage(imageUrl, altText);
        expect(result).toBe(`![${altText}](${imageUrl})\n\n`);
    });
});
