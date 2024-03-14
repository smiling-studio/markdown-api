// write the Markdown API class

import {heading} from './utils/heading';
import {createParagraph} from './utils/createParagraph';
import {createOrderedList} from './utils/createOrderedList';
import {unorderedList} from './utils/unordered-list';
import {codeBlock} from './utils/code-block';
import {image} from './utils/image';

export class MarkdownAPI {
    constructor() {
        // your code here
    }

    // the buffer attr
    private _buffer: string[] = [];

    /**
     * 添加标题
     *
     * @param text 标题文本
     * @param level 标题级别，范围从1到6
     */
    addHeading(text: string, level: number): void {
        this._buffer.push(heading(text, level));
    }

    /**
     * 添加标题 （静态方法）
     *
     * @param text 标题文本
     * @param level 标题级别，范围从1到6
     */
    static AddHeading(text: string, level: number): string {
        return heading(text, level);
    }

    /**
     * 添加文本段落
     *
     * @param text 段落文本
     */
    addParagraph(text: string): void {
        this._buffer.push(createParagraph(text));
    }

    /**
     * 添加文本段落 （静态方法）
     *
     * @param text 段落文本
     */
    static AddParagraph(text: string): string {
        return createParagraph(text);
    }

    /**
     * 添加有序列表
     *
     * @param items 列表项文本数组
     */
    addOrderedList(items: string[]): void {
        this._buffer.push(createOrderedList(items));
    }

    /**
     * 添加有序列表（静态方法）
     *
     * @param items 列表项文本数组
     */
    static AddOrderedList(items: string[]): string {
        return createOrderedList(items);
    }

    /**
     * 添加无序列表
     *
     * @param items 列表项
     */
    addUnorderedList(items: string[]): void {
        this._buffer.push(unorderedList(items));
    }

    /**
     * 添加无序列表 （静态方法）
     *
     * @param items 列表项
     */
    static AddUnorderedList(items: string[]): string {
        return unorderedList(items);
    }

    /**
     * 添加代码块
     *
     * @param code 代码内容
     * @param language 编程语言（可选）
     */
    addCodeBlock(code: string, language: string = ''): void {
        this._buffer.push(codeBlock(code, language));
    }

    /**
     * 添加代码块 （静态方法）
     *
     * @param code 代码内容
     * @param language 编程语言（可选）
     */
    static AddCodeBlock(code: string, language: string = ''): string {
        return codeBlock(code, language);
    }

    /**
     * 添加图片
     *
     * @param altText 图片的替代文本
     * @param imageUrl 图片的URL地址
     */
    addImage(altText: string, imageUrl: string): void {
        this._buffer.push(image(altText, imageUrl));
    }

    /**
     * 添加图片 （静态方法）
     *
     * @param altText 图片的替代文本
     * @param imageUrl 图片的URL地址
     */
    static AddImage(altText: string, imageUrl: string): string {
        return image(altText, imageUrl);
    }

    /**
     * 获取 Markdown 代码
     */
    getMarkdown(): string {
        return this._buffer.join('');
    }
}
