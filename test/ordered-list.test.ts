// tests/createOrderedList.test.ts
import {createOrderedList} from '@/utils/createOrderedList';
import {MarkdownAPI} from '@/markdown-api';

describe('createOrderedList utility function', () => {
    test('creates a Markdown ordered list', () => {
        const items = ['First item', 'Second item', 'Third item'];
        const result = createOrderedList(items);
        expect(result).toBe('1. First item\n2. Second item\n3. Third item\n\n');
    });
});

describe('MarkdownAPI Ordered List Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addOrderedList instance method', () => {
        const items = ['Item one', 'Item two'];
        markdown.addOrderedList(items);
        expect(markdown.getMarkdown()).toBe('1. Item one\n2. Item two\n\n');
    });

    test('addOrderedList static method', () => {
        const items = ['Alpha', 'Beta'];
        const result = MarkdownAPI.AddOrderedList(items);
        expect(result).toBe('1. Alpha\n2. Beta\n\n');
    });
});
