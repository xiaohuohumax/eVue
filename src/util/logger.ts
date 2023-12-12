import { getLogger } from 'loglevel';

const logger = getLogger('define-logger');

logger.setLevel(import.meta.env.VITE_LOGGER_LEVEL);

export default logger;