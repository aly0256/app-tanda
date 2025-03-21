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
        { id: '2', nombre: 'Esteban Hdz'},
        { id: '3', nombre: 'Bety'},
        { id: '4', nombre: 'Karencita'},
        { id: '5', nombre: 'Alberto Hdz'},
        { id: '6', nombre: 'Alberto Hdz'},
        { id: '7', nombre: 'Sandra Ortega'},
        { id: '8', nombre: 'Ricardo Chaires'},
        { id: '9', nombre: 'Adrian Ortega'},
        { id: '10', nombre: 'Jesus Aguirre'},
        { id: '11', nombre: 'Alberto Hdz'},
        { id: '12', nombre: 'Adrian Ortega'},
        { id: '13', nombre: 'Richy/Karen'},
        { id: '14', nombre: 'Betty'},
        { id: '15', nombre: 'Armando Hdz'},
        { id: '16', nombre: 'Armando Hdz'},
        { id: '17', nombre: 'Nena/Jhonan'},
        { id: '18', nombre: 'Alberto Hdz'},
        { id: '19', nombre: 'Bety'},
        { id: '20', nombre: 'Luis Ayala'}
      ],
      fechas: [
          {id: '1', fecha: '10-03-2025'},
          {id: '2', fecha: '17-03-2025'},
          {id: '3', fecha: '24-03-2025'},
          {id: '4', fecha: '31-03-2025'},
          {id: '5', fecha: '07-04-2025'},
          {id: '6', fecha: '14-04-2025'},
          {id: '7', fecha: '21-04-2025'},
          {id: '8', fecha: '28-04-2025'},
          {id: '9', fecha: '05-05-2025'},
          {id: '10', fecha: '12-05-2025'},
          {id: '11', fecha: '19-05-2025'},
          {id: '12', fecha: '26-05-2025'},
          {id: '13', fecha: '02-06-2025'},
          {id: '14', fecha: '09-06-2025'},
          {id: '15', fecha: '16-06-2025'},
          {id: '16', fecha: '23-06-2025'},
          {id: '17', fecha: '30-06-2025'},
          {id: '18', fecha: '07-07-2025'},
          {id: '19', fecha: '14-07-2025'},
          {id: '20', fecha: '21-07-2025'}
      ]
    }),
  };
};
