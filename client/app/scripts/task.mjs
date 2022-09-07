var task = {
  get: async function() {
    let response = await fetch('/api/task', {
      method: 'GET'
    })
    return await response.json()
  },

  create: async function(text) {
    let response = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    })
    return await response.json()
  },

  delete: async function(id) {
    let response = await fetch('/api/task/'+id, {
      method: 'DELETE',
    })
    return await response.json()
  }
};

export default task;
