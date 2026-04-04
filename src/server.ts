import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

app.use(express.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    // const apiKey = process.env['GEMINI_API_KEY'];
    const apiKey = 'AIzaSyAadsucvAiZAvkNIciTthfx5JUGRvId1o4';

    if (!apiKey) {
      // Mock response if no API key is set
      return res.json({ 
        response: "Hello! I'm your AI assistant. To provide real-time responses, please configure my API key. For now, I can tell you that Avinash is an expert in MEAN stack development!",
        isMock: true
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "You are a helpful AI assistant for Avinash's professional portfolio website. You help visitors learn about Avinash's skills (MEAN stack, Angular, Node.js), projects, and experience. Be polite, professional, and concise."
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.json({ response: text, isMock: false });
  } catch (error) {
    console.error('Chat AI Error:', error);
    return res.status(500).json({ error: 'Failed to get AI response' });
  }
});

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 5000;
  app.listen(port, () => {
    // console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
