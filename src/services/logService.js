import * as Sentry from "@sentry/browser";

const init = () => {
  Sentry.init({
    dsn: "https://39193ab78bcf436eb79c17712b49b96d@sentry.io/1354080"
  });
};

const log = log => {
  Sentry.captureException(log);
};

export default {
  init,
  log
};
