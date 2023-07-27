import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { prompt, model_name } = await req.body;
    // 004: 修改openai代理地址
    const llm = new ChatOpenAI({
      modelName: model_name,
      temperature: 0.2,
      maxTokens: 800,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
    }, {basePath: 'https://openai.api2d.net/v1'});

    const response = await llm.call([new HumanChatMessage(prompt)]);

    return res.status(200).json({ response: response });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default handler;
