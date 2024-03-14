/**
 * 生成Markdown无序列表
 * @param items 列表项
 */
export function unorderedList(items: string[]): string {
    return items.map((item) => `- ${item}`).join('\n') + '\n\n';
}
