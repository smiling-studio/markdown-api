// src/utils/createOrderedList.ts

/**
 * 创建Markdown有序列表
 * @param items 列表项文本数组
 */
export function createOrderedList(items: string[]): string {
    return items.map((item, index) => `${index + 1}. ${item}\n`).join('') + '\n';
}
