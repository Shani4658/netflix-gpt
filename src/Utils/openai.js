import OpenAI from 'openai';
import { OPENAPI_KEY } from './constant';

const client = new OpenAI({
//   apiKey: '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', // This is the default and can be omitted
     apiKey: OPENAPI_KEY,
     dangerouslyAllowBrowser: true ,
});

export default client;