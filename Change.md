## 修改OpenAI、OpenBaseUrl
```
// 001: 修改openai代理地址
const embedding = new OpenAIEmbeddings({
    modelName,
    openAIApiKey: getUserApiKey(),
}, {basePath: 'https://openai.api2d.net/v1'});
```

```
// 002: 修改openai代理地址
const embedding = new OpenAIEmbeddings({
    modelName: model_name,
}, {basePath: 'http://www.baidu.com'});
```

## 流程
1. 创建任务列表
taskRegistry.createTaskList
2. 生成文本
skill.generateText

new OpenAIChat
