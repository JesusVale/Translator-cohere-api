import express from 'express';
import cohere from 'cohere-ai';

export const getTranslation = async (req: express.Request, res: express.Response) => {
    const {to, from, text} = req.query;
    const prompt = from === "auto"? `Don´t answer me just respond with the translation of "${text}" to ${to}, just the text translated in "" translated`:
    `Don´t answer me just respond with the translation of "${text}" from ${from} to ${to}, just the text translated in "" translated`;
  
    
    try{
      const generateResponse = await cohere.generate({
        model: "command",
        prompt: prompt,
        max_tokens: 50,
        temperature: 0
        
      });
      if(generateResponse.statusCode === 200){
        return res.json({
          from: text,
          translation: generateResponse.body.generations[0].text
        })
      }
      res.json(generateResponse);
    } catch(error){
      res.json({
        error
      })
    }
    
      
}