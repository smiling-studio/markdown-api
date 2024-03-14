// src/utils/heading.ts

/**
 * 生成Markdown标题
 * @param text 标题文本
 * @param level 标题级别，范围从1到6
 */
export function heading(text: string, level: number): string {
    if (level < 1 || level > 6) {
        throw new Error('Invalid heading level: ' + level);
    }
    return `${'#'.repeat(level)} ${text}\n\n`;
}
