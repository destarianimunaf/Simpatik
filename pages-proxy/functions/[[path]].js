export async function onRequest({ request, env }) {
  return env.SIMPATIK.fetch(request);
}
