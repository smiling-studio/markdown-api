// src/utils/image.ts

/**
 * 生成Markdown图片
 * @param imageUrl 图片的URL地址
 * @param altText 图片的替代文本
 */
export function image(imageUrl: string, altText: string): string {
    return `![${altText}](${imageUrl})\n\n`;
}
