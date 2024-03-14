// src/utils/image.ts

/**
 * 生成Markdown图片
 * @param altText 图片的替代文本
 * @param imageUrl 图片的URL地址
 */
export function image(altText: string, imageUrl: string): string {
    return `![${altText}](${imageUrl})\n\n`;
}
