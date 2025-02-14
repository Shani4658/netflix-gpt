import { DEMO_API_KEY, GEMINI_API_KEY } from "./constant";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(DEMO_API_KEY);
export default genAI;
