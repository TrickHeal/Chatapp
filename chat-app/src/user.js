export default async (event) => {
  // you can use ES7 with async/await and even TypeScript in your functions :)

  await new Promise(r => setTimeout(r, 50));

  const id = event.data.id;

  fetch('https://api.graph.cool/simple/v1/cji8y7jwa06z2016086elhv88', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ User { id:${id}} }` }),
  })
    .then(res => console.log(res));

  return {
    data: {
      firstName: `${''}`,
      lastName: `${''}`,
    },
  };
};
