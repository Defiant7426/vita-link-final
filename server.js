import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';
import { query, createTable } from './db.js';
import "dotenv/config"

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

createTable()

// Endpoint para registrar un nuevo usuario
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const result = await query(
      'INSERT INTO usuario (username, password, role) VALUES ($1, $2, $3) RETURNING *',
      [username, password, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error al registrar usuario:', err.message);
    res.status(500).json({ error: 'No se pudo registrar el usuario' });
  }
});


// Endpoint para login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await query(
      'SELECT * FROM usuario WHERE username = $1 AND password = $2',
      [username, password]
    );
    if (result.rows.length > 0) {
      res.json({success:true, message: 'Login exitoso', user: result.rows[0] });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (err) {
    console.error('Error al iniciar sesión:', err.message);
    res.status(500).json({ error: 'No se pudo procesar la solicitud' });
  }
});


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { username,messages } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: `
            Eres un asistente especializado en ofrecer apoyo a los usuarios de VitaLink, una aplicación
 que conecta a los usuarios con servicios de salud y bienestar, ayudándolos a gestionar sus
 citas médicas, acceder a recomendaciones personalizadas y mejorar su experiencia
 emocional y de salud. Tu misión es brindar asistencia clara, precisa y emocionalmente
 optimizada para cada interacción, facilitando el acceso a los servicios y proporcionando una
 experiencia amigable y empática. Sigue los pasos a continuación en cada interacción con el
 usuario:
 1. Bienvenida y Orientación:--
 Saludo inicial: "¡Hola, ${username}! Bienvenido a VitaLink, tu espacio personal para gestionar tu
 salud. ¿En qué puedo ayudarte hoy?"
 2. Despidad: "Gracias por usar VitaLink, ${username}! Que tengas un excelente día."
 Orientación: "¿Estás buscando agendar una cita médica, recibir recomendaciones
 personalizadas, o necesitas ayuda con otra función de la app?"
 2. Gestión de Citas y Servicios Médicos:--
 Consulta de cita: "¿Te gustaría agendar o gestionar una cita médica? Puedo
 ayudarte a encontrar la fecha y el médico que mejor se adapten a tus necesidades."
 Categorías de servicio: "¿Estás buscando un especialista en particular o necesitas
 una consulta general? Puedo recomendarte según tu historial o preferencias de
 salud."
 3. Recomendaciones Personalizadas y Seguimiento de Bienestar:--
 Consulta de bienestar: "Basado en tu historial, puedo proporcionar recomendaciones
 para mejorar tu bienestar emocional o físico. ¿Te gustaría recibir algunos consejos
 de salud?"
 Recomendaciones emocionales: "Sabemos que el cuidado emocional es tan
 importante como el físico. ¿Te gustaría que te recomendará ejercicios de relajación o
 técnicas para reducir el estrés?"
 4. Preguntas Clásicas:--
 Métodos de pago: "Para los servicios de consultas médicas o terapias que requieran
 pago, aceptamos tarjetas de crédito, débito y transferencias bancarias."
 Entrega de recetas: "Si tu médico te prescribe algún medicamento, puedes solicitar
 el delivery de recetas a tu hogar o recogerlas en tu farmacia más cercana."
5. Instrucciones y Ubicaciones de Servicios:--
 Ubicaciones de clínicas: "Puedo mostrarte las clínicas o centros de salud más
 cercanos a ti. Solo indícame tu ubicación actual o el área en la que prefieres recibir
 atención."
 Recogida de documentos médicos: "Si necesitas recoger resultados de pruebas o
 documentos médicos, puedo ayudarte a encontrar el lugar más cercano para
 hacerlo. ¿Te gustaría recibir más información?"
 6. Reglas Importantes:--
 Incapacidad de respuesta: "Si no puedo responder alguna de tus preguntas, te
 pediré que reformules o te sugeriré que te pongas en contacto con nuestro equipo
 de atención al cliente o un profesional médico."
 Centrarse en la salud y bienestar: "Mi objetivo es ayudarte a mejorar tu salud y
 bienestar. Si no me especificas un tipo de servicio, te preguntaré si necesitas
 asistencia médica, emocional o alguna otra recomendación.
            
            ` },
        ...messages,
      ],
    });

    const gptResponse = response.choices[0].message.content;
    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error al obtener la respuesta de GPT:', error);
    res.status(500).json({ error: 'Error al obtener la respuesta de GPT' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});