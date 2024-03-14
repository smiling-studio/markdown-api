# Markdown-API

Markdown API 是一款工具，可以以 API 的形式为文档添加 Markdown 内容。它可以提高文档编写的效率，并保证格式的一致性。

## 项目功能:

## 项目应用场景:

- 自动生成文档，例如项目文档、API 文档、博客文章等。
- 批量更新文档，例如添加新的功能介绍、更新版本信息等。
- 在其他应用程序中集成 Markdown 编辑功能，例如笔记应用、Wiki 等。

## API

### 安装

```
npm install markdown-api
```

### 使用

```javascript
const MarkdownAPI = require('markdown-api');

const api = new MarkdownAPI();

// 添加标题
api.addHeading('## 这是一级标题');

// 添加文本
api.addText('这是一段文本');

// 添加列表
api.addList(['第一项', '第二项', '第三项']);

// 添加代码块
api.addCodeBlock('const code = "Hello, world!";');

// 生成 Markdown 文档
const markdown = api.getMarkdown();

console.log(markdown);
```

### API 参考

#### `addHeading(level, text)`

添加标题。

* `level`: 标题级别，1-6
* `text`: 标题文本

#### `addText(text)`

添加文本。

* `text`: 文本内容

#### `addList(items)`

添加列表。

* `items`: 列表项数组

#### `addCodeBlock(code)`

添加代码块。

* `code`: 代码内容

#### `getMarkdown()`

生成 Markdown 文档。

* 返回值: Markdown 文本

## 更多示例

请参考 示例: [移除了无效网址] 目录获取更多示例代码。
