export const getOperators = async () => {
  const res = await fetch("/api/operators");
  return res.json();
}

export const getOperatorById = async (id) => {
  const res = await fetch(`/api/operators/${id}`);
  return res.json();
}

export const refillBalance = async (data) => {
  const res = await fetch(`/api/operators/${data.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data.params)
  });

  return res.json();
}