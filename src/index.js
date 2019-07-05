module.exports = function warmup(temperature) {
  if (temperature === -20) {
    return -4;
  }
  if (temperature === 0) {
    return 32;
    }

    return 1.8 * temperature + 32;
};
