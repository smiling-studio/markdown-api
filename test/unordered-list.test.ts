// tests/unorderedList.test.ts
import {unorderedList} from '@/utils/unordered-list';
import {MarkdownAPI} from '@/markdown-api';

describe('unorderedList utility function', () => {
    test('creates a Markdown unordered list', () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        const result = unorderedList(items);
        expect(result).toBe(`- Item 1\n- Item 2\n- Item 3\n\n`);
    });
});

describe('MarkdownAPI Unordered List Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addUnorderedList instance method', () => {
        const items = ['Instance 1', 'Instance 2', 'Instance 3'];
        markdown.addUnorderedList(items);
        expect(markdown.getMarkdown()).toBe(`- Instance 1\n- Instance 2\n- Instance 3\n\n`);
    });

    test('addUnorderedList static method', () => {
        const items = ['Static 1', 'Static 2', 'Static 3'];
        const result = MarkdownAPI.AddUnorderedList(items);
        expect(result).toBe(`- Static 1\n- Static 2\n- Static 3\n\n`);
    });
});
