async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    console.log(response);
    
    const jumlahkanPost = result.reduce((acc, {userId}) => {acc[userId] = (acc[userId] || 0) + 1;
    return acc;
    }, {})
    console.log(jumlahkanPost)
  } catch (error) {
    console.error(error.message);
  }
}

getData()
