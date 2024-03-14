// tests/code-block.test.ts
import {codeBlock} from '@/utils/code-block';
import {MarkdownAPI} from '@/markdown-api';

describe('codeBlock utility function', () => {
    test('creates a Markdown code block without language', () => {
        const code = 'console.log("Hello, world!");';
        const result = codeBlock(code);
        expect(result).toBe('```\n' + code + '\n```\n\n');
    });

    test('creates a Markdown code block with language', () => {
        const code = 'console.log("Hello, world!");';
        const language = 'javascript';
        const result = codeBlock(code, language);
        expect(result).toBe('```' + language + '\n' + code + '\n```\n\n');
    });
});

describe('MarkdownAPI Code Block Methods', () => {
    let markdown: MarkdownAPI;

    beforeEach(() => {
        markdown = new MarkdownAPI();
    });

    test('addCodeBlock instance method without language', () => {
        const code = 'const x = 100;';
        markdown.addCodeBlock(code);
        expect(markdown.getMarkdown()).toBe('```\n' + code + '\n```\n\n');
    });

    test('addCodeBlock instance method with language', () => {
        const code = 'const x = 100;';
        const language = 'javascript';
        markdown.addCodeBlock(code, language);
        expect(markdown.getMarkdown()).toBe('```' + language + '\n' + code + '\n```\n\n');
    });

    test('addCodeBlock static method', () => {
        const code = 'const x = 100;';
        const language = 'javascript';
        const result = MarkdownAPI.AddCodeBlock(code, language);
        expect(result).toBe('```' + language + '\n' + code + '\n```\n\n');
    });
});
