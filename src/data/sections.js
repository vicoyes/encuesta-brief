/**
 * Cuestionario Maestro: Estrategia, Imagen y Desarrollo Web
 * Secciones y preguntas para el brief.
 */

export const sections = [
  {
    id: 'contacto',
    title: 'Datos de la empresa y contacto',
    shortLabel: 'Contacto',
    objective: 'Para poder responder y dar seguimiento a tu brief.',
    proTip: 'Usaremos estos datos solo para contactarte sobre este proyecto. No los compartimos con terceros.',
    questions: [
      {
        id: 'nombre_empresa',
        text: 'Nombre de la empresa o proyecto',
        type: 'text',
        placeholder: 'Ej: Mi Marca S.L.',
        required: true,
      },
      {
        id: 'nombre_contacto',
        text: 'Nombre del contacto (persona que responde)',
        type: 'text',
        placeholder: 'Ej: María García',
        required: true,
      },
      {
        id: 'email',
        text: 'Email de contacto',
        type: 'text',
        placeholder: 'ejemplo@empresa.com',
        required: true,
      },
      {
        id: 'telefono',
        text: 'Teléfono (opcional)',
        type: 'text',
        placeholder: '+34 600 000 000',
      },
      {
        id: 'cargo',
        text: 'Cargo o rol en la empresa (opcional)',
        type: 'text',
        placeholder: 'Ej: Directora de Marketing',
      },
      {
        id: 'sitio_web_actual',
        text: 'Sitio web actual (si tienen)',
        type: 'text',
        placeholder: 'https://...',
      },
    ],
  },
  {
    id: 'adn',
    title: 'ADN y Corazón de la Marca',
    shortLabel: 'Identidad',
    objective: 'Entender la esencia para que el copy no suene genérico.',
    proTip: 'Sé lo más concreto posible. "Vendemos café" es un dato. "Creamos rituales matutinos para soñadores con prisa" es una marca.',
    questions: [
      {
        id: 'elevator_pitch',
        text: 'Elevator Pitch: ¿A qué se dedica la empresa en una sola frase?',
        type: 'text',
        placeholder: 'Ej: Somos una agencia que crea sitios web que venden.',
        required: true,
      },
      {
        id: 'origen',
        text: 'El Origen: ¿Por qué nació este proyecto? (¿Vieron un vacío en el mercado? ¿Es una pasión personal?)',
        type: 'textarea',
        placeholder: 'Cuéntanos la historia detrás del proyecto...',
      },
      {
        id: 'mision_vision',
        text: 'Misión y Visión (Lenguaje Humano): ¿Qué impacto quieren dejar en la vida de sus clientes en los próximos 5 años?',
        type: 'textarea',
        placeholder: 'Descríbelo con palabras cercanas, sin jerga corporativa.',
      },
      {
        id: 'valor_diferencial',
        text: 'Valor Diferencial (USP): ¿Por qué elegirlos a ellos y no a la competencia?',
        type: 'textarea',
        placeholder: '¿Qué los hace únicos?',
      },
      {
        id: 'valores_innegociables',
        text: 'Valores Innegociables: Si la marca fuera una persona, ¿qué cosas jamás haría? (Ej: "Jamás usaríamos clickbait")',
        type: 'textarea',
        placeholder: 'Lista 2 o 3 principios que no se negocian.',
      },
      {
        id: 'arquetipo_marca',
        text: 'Arquetipo de Marca: Si la marca fuera una celebridad o personaje de ficción, ¿quién sería? (Define el tono de voz)',
        type: 'text',
        placeholder: 'Ej: Steve Jobs, un profesor sabio, un amigo cercano...',
      },
      {
        id: 'enemigo_comun',
        text: 'El Enemigo Común: ¿Contra qué lucha la marca? (Ej: La burocracia, los malos materiales, la falta de tiempo)',
        type: 'text',
        placeholder: '¿Qué problema o frustración compartida tiene con su cliente?',
      },
      {
        id: 'personalidad',
        text: 'Personalidad: Define la marca en 3 adjetivos (Ej: Innovadora, robusta, amigable)',
        type: 'text',
        placeholder: 'Adjetivo 1, adjetivo 2, adjetivo 3',
      },
      {
        id: 'cliente_ideal',
        text: 'El Cliente Ideal (Buyer Persona): ¿A quién le hablamos? (Edad, intereses y el problema principal que busca resolver)',
        type: 'textarea',
        placeholder: 'Descríbelo en unas líneas: perfil, dolor principal, qué busca.',
      },
    ],
  },
  {
    id: 'imagen',
    title: 'Imagen Corporativa y Estética',
    shortLabel: 'Imagen',
    objective: 'Definir el lenguaje visual del proyecto.',
    proTip: 'Las referencias visuales nos ayudan a alinear expectativas. No tienen que ser de tu sector, sino del estilo que te gusta.',
    questions: [
      {
        id: 'identidad_actual',
        text: 'Identidad Actual: ¿Cuentan con manual de marca? (Logo vectorizado, paleta de colores, tipografías)',
        type: 'textarea',
        placeholder: 'Sí/No y qué elementos tienen. Si tienen archivos, menciónalo.',
      },
      {
        id: 'psicologia_color',
        text: 'Psicología del Color: Si no hay manual, ¿qué sensaciones deben transmitir los colores?',
        type: 'textarea',
        placeholder: 'Ej: Confianza, calma, energía, profesionalidad...',
      },
      {
        id: 'referencias_visuales',
        text: 'Referencias Visuales: Comparte 2 o 3 enlaces de webs que te gusten (por su diseño, no necesariamente de tu sector)',
        type: 'textarea',
        placeholder: 'Pega aquí las URLs, una por línea.',
      },
      {
        id: 'recursos_visuales',
        text: 'Recursos Visuales: ¿Tienen banco de fotos propio o profesional, o trabajaremos con imágenes de stock?',
        type: 'text',
        placeholder: 'Propio / profesional / stock / mezcla',
      },
    ],
  },
  {
    id: 'servicios',
    title: 'Radiografía de Servicios (El Motor de Venta)',
    shortLabel: 'Servicios',
    objective: 'Transformar características técnicas en beneficios reales.',
    proTip: 'Piensa en el antes y el después del cliente. Eso es lo que vendemos: la transformación, no solo el servicio.',
    questions: [
      {
        id: 'listado_servicios',
        text: 'Listado de Servicios: Para cada servicio principal, indica el "Dolor" (qué le quita el sueño al cliente), la Solución (cómo lo resuelves) y la Transformación (cómo se siente después)',
        type: 'textarea',
        placeholder: 'Servicio 1: Dolor / Solución / Transformación. Repite para cada servicio.',
      },
      {
        id: 'servicio_estrella',
        text: 'El Servicio Estrella: De todos, ¿cuál es el producto o servicio que debe destacar sobre los demás?',
        type: 'text',
        placeholder: 'Nombre del servicio y por qué es el estrella.',
      },
      {
        id: 'metodologia',
        text: 'Metodología (Paso a Paso): ¿Cómo es el proceso de trabajo desde que el cliente contacta hasta que recibe el resultado?',
        type: 'textarea',
        placeholder: 'Describe los pasos de forma clara y breve.',
      },
      {
        id: 'objeciones_comunes',
        text: 'Objeciones Comunes: ¿Qué es lo primero que un cliente suele dudar antes de contratar? (Precio, tiempo, dudas técnicas)',
        type: 'textarea',
        placeholder: 'Lista las objeciones más frecuentes y cómo las abordan.',
      },
      {
        id: 'entregables',
        text: 'Entregables Claros: ¿Qué recibe exactamente el cliente al final? (Un reporte, una clave de acceso, un producto físico)',
        type: 'textarea',
        placeholder: 'Enumera los entregables concretos por servicio si aplica.',
      },
    ],
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura y Estrategia de Contenido',
    shortLabel: 'Contenido',
    objective: 'Definir el mapa del sitio y la voz de la marca.',
    proTip: 'Un solo objetivo de conversión claro hace que la web sea más efectiva. Menos es más.',
    questions: [
      {
        id: 'mapa_sitio',
        text: 'Mapa del Sitio: ¿Qué secciones visualizas? (Inicio, Servicios, Nosotros/Historia, Blog, Contacto)',
        type: 'textarea',
        placeholder: 'Lista las secciones que quieres en la web.',
      },
      {
        id: 'seccion_nosotros',
        text: 'Sección "Nosotros": ¿Hay un equipo que mostrar o es una marca personal? ¿Cuál es la historia que genera confianza?',
        type: 'textarea',
        placeholder: 'Equipo / marca personal y el relato que quieren contar.',
      },
      {
        id: 'tono_voz',
        text: 'Tono de Voz: ¿Cómo le hablamos al usuario? (Tú vs. Usted / Formal vs. Informal / Técnico vs. Didáctico)',
        type: 'text',
        placeholder: 'Ej: Tú, cercano y didáctico.',
      },
      {
        id: 'objetivo_conversion',
        text: 'Objetivo de Conversión: ¿Qué queremos que haga el usuario apenas entre? (Llamar, llenar un formulario, comprar, descargar algo)',
        type: 'text',
        placeholder: 'La acción principal que debe cumplir.',
      },
      {
        id: 'ctas',
        text: 'Llamados a la Acción (CTA): ¿Qué frases usaríamos? (Ej: "Empieza ahora", "Reserva tu cita", "Quiero saber más")',
        type: 'textarea',
        placeholder: '2 o 3 frases de llamada a la acción.',
      },
      {
        id: 'prueba_social',
        text: 'Prueba Social: ¿Tienen testimonios, logos de clientes anteriores o certificaciones para mostrar?',
        type: 'textarea',
        placeholder: 'Sí/No y qué material tienen (textos, logos, enlaces).',
      },
    ],
  },
  {
    id: 'logistica',
    title: 'Logística y Datos Técnicos',
    shortLabel: 'Logística',
    objective: 'Viabilidad técnica y plazos.',
    proTip: 'Si no tienes dominio o hosting, lo indicamos en el brief para recomendarte opciones.',
    questions: [
      {
        id: 'infraestructura',
        text: 'Infraestructura: ¿Ya cuentan con dominio y hosting? (Si no, para darte recomendaciones)',
        type: 'text',
        placeholder: 'Sí/No. Si sí, indica dominio y proveedor si lo conoces.',
      },
      {
        id: 'funcionalidades',
        text: 'Funcionalidades Especiales: ¿Necesitas reservas, pagos en línea, chat de WhatsApp, buscador interno o área de miembros?',
        type: 'textarea',
        placeholder: 'Lista las funcionalidades que necesitas.',
      },
      {
        id: 'idiomas',
        text: 'Idiomas: ¿La web será multiidioma?',
        type: 'text',
        placeholder: 'Solo español / inglés / varios (especifica).',
      },
      {
        id: 'plazo_entrega',
        text: 'Plazo de Entrega: ¿Existe una fecha límite? (Lanzamiento de campaña, evento, feria)',
        type: 'text',
        placeholder: 'Fecha aproximada o "flexible".',
      },
    ],
  },
]

export const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0)
