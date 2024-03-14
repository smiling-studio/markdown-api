import MarkdownAPI from '@/markdown-api';

describe('MarkdownAPI', () => {
    let api: MarkdownAPI;

    beforeEach(() => {
        api = new MarkdownAPI();
    });

    it('should be defined', () => {
        expect(api).toBeDefined();
    });

    it('addHeading', () => {
        api.addHeading(1, 'Hello, World!');

        expect(api.getMarkdown()).toBe('# Hello, World!\n\n');
    });

    test('addParagraph', () => {
        api.addParagraph('Hello, World!');
        expect(api.getMarkdown()).toBe('Hello, World!\n\n');
    });
});
