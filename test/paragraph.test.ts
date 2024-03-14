// tests/createParagraph.test.ts
import {createParagraph} from '@/utils/createParagraph';
import {MarkdownAPI} from '@/markdown-api';

describe('createParagraph utility function', () => {
    test('creates a Markdown paragraph', () => {
        const text = 'This is a paragraph.';
        const result = createParagraph(text);
        expect(result).toBe(`${text}\n\n`);
    });
});

describe('MarkdownAPI Paragraph Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addParagraph instance method', () => {
        const text = 'This is another paragraph.';
        markdown.addParagraph(text);
        expect(markdown.getMarkdown()).toBe(`${text}\n\n`);
    });

    test('addParagraph static method', () => {
        const text = 'Static paragraph.';
        const result = MarkdownAPI.AddParagraph(text);
        expect(result).toBe(`${text}\n\n`);
    });
});
