document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('fileInput');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    document.getElementById('response').innerText = result.url;
  } catch (err) {
    document.getElementById('response').innerText = 'Error al subir archivo.';
  }
});
