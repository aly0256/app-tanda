exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Permitir todos los orígenes, puedes especificar tu dominio si lo prefieres
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',  // Métodos permitidos
        'Access-Control-Allow-Headers': 'Content-Type',  // Cabeceras permitidas
      },
      body: JSON.stringify({
        personas: [
          { id: '1', nombre: 'Salomé Hdz'},
          { id: '2', nombre: 'Adrian Ortega'},
          { id: '3', nombre: 'Sandra'},
          { id: '4', nombre: 'Karencita'},
          { id: '5', nombre: 'Magaly'},
          { id: '6', nombre: 'Jessica hernandez'},
          { id: '7', nombre: 'Juan Ortega'},
          { id: '8', nombre: 'Mami Tela'},
          { id: '9', nombre: 'Rosaura Espinoza'},
          { id: '10', nombre: 'Angelines fernandez'}
        ],
        fechas: [
            {id: '1', fecha: '2025-03-07'},
            {id: '2', fecha: '2025-03-14'},
            {id: '3', fecha: '2025-03-21'},
            {id: '4', fecha: '2025-03-28'},
            {id: '5', fecha: '2025-04-04'},
            {id: '6', fecha: '2025-04-11'}
        ]
      }),
    };
  };
  