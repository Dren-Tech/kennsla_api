import express from 'express';
import { flaschenpost, getMiddleware } from 'flaschenpost';

const logger = flaschenpost.getLogger();

logger.info('Booting content service...');

const app = express();
const port = 8080;

app.use(getMiddleware({ logOn: 'request' }));

app.get('/', (request, response): any => {
  response.send('Express + TypeScript Server');
});

logger.info('Start content service of Kennlsa');

// Start server
app.listen(port, (): void => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
