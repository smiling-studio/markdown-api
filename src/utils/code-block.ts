// src/utils/code-block.ts

/**
 * 生成Markdown代码块
 * @param code {string} 代码内容
 * @param language {string} 编程语言（可选）
 */
export function codeBlock(code: string, language: string = ''): string {
    return `\`\`\`${language}\n${code}\n\`\`\`\n\n`;
}
