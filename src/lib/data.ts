import type { Category, Issue, Testimonial, BlogPost } from './types';

export const categories: Category[] = [
  {
    slug: 'software',
    name: 'Software',
    description: 'Problemas con aplicaciones, sistemas operativos y controladores.',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: 'Problemas con componentes físicos como CPU, GPU y RAM.',
  },
  {
    slug: 'firmware',
    name: 'Firmware',
    description: 'Configuraciones de BIOS/UEFI y complicaciones en la actualización del firmware.',
  },
  {
    slug: 'networks',
    name: 'Redes',
    description: 'Problemas de conectividad, problemas de Wi-Fi y configuraciones de LAN.',
  },
  {
    slug: 'printers-plotters',
    name: 'Impresoras y Plotters',
    description: 'Errores de impresión, conflictos de controladores y fallos de hardware.',
  },
];

export const issues: Issue[] = [
  // Software
  {
    id: 'sw001',
    title: 'La aplicación no se inicia',
    category: 'software',
    description: 'Una aplicación específica se cierra inmediatamente después de iniciarse o muestra un mensaje de error y no se abre.',
    diagnostics: [
      'Buscar actualizaciones de Windows/macOS.',
      'Buscar registros de errores específicos de la aplicación en el Visor de eventos (Windows) o la Consola (macOS).',
      'Intentar ejecutar la aplicación como administrador.',
      'Verificar si el antivirus o el firewall están bloqueando la aplicación.',
    ],
    recommendations: [
      'Reinstalar la aplicación.',
      'Actualizar los controladores de gráficos.',
      'Asegurarse de que .NET Framework / Visual C++ Redistributables estén instalados y actualizados (para Windows).',
    ],
    solutions: [
      'Una reinstalación limpia a menudo resuelve conflictos con archivos restantes de versiones anteriores.',
      'Añadir una excepción para la aplicación en su software de seguridad puede resolver problemas de bloqueo.',
    ],
  },
  {
    id: 'sw002',
    title: 'El sistema operativo está lento y no responde',
    category: 'software',
    description: 'El sistema operativo (Windows o macOS) tarda mucho en arrancar, abrir aplicaciones y realizar tareas básicas.',
    diagnostics: [
      'Abrir el Administrador de tareas (Ctrl+Shift+Esc) o el Monitor de actividad para buscar procesos que consuman muchos recursos.',
      'Realizar un análisis completo del sistema con una herramienta antivirus/antimalware.',
      'Verificar el espacio en disco disponible en la unidad del sistema.',
    ],
    recommendations: [
      'Desactivar programas de inicio innecesarios.',
      'Realizar una limpieza de disco para eliminar archivos temporales.',
      'Desfragmentar el disco duro (solo HDD) o ejecutar TRIM en el SSD.',
      'Considerar la posibilidad de actualizar la RAM si se agota constantemente.',
    ],
    solutions: [
      'Limitar las aplicaciones de inicio es la forma más efectiva de mejorar los tiempos de arranque.',
      'Liberar al menos el 15-20% de la unidad del sistema puede mejorar significativamente el rendimiento.',
    ],
  },
  // Hardware
  {
    id: 'hw001',
    title: 'El ordenador no enciende',
    category: 'hardware',
    description: 'Al presionar el botón de encendido no ocurre nada. Sin luces, sin ventiladores, sin sonidos.',
    diagnostics: [
      'Asegurarse de que el cable de alimentación esté bien conectado tanto al ordenador como a una toma de corriente que funcione.',
      'Verificar que el interruptor de la fuente de alimentación (PSU) esté en la posición ON.',
      'Probar la toma de corriente con otro dispositivo.',
      'Si es un portátil, intentar quitar la batería y encenderlo solo con el adaptador de CA.',
    ],
    recommendations: [
      'Realizar una "prueba del clip" en la PSU para ver si se enciende de forma independiente.',
      'Volver a colocar los módulos de RAM y la tarjeta gráfica.',
      'Verificar las conexiones de alimentación internas a la placa base.',
    ],
    solutions: [
      'Una fuente de alimentación (PSU) defectuosa es la causa más común. Reemplazarla suele resolver el problema.',
      'Cables sueltos o componentes mal asentados pueden impedir que el sistema se inicie.',
    ],
  },
  // Firmware
  {
    id: 'fw001',
    title: 'Sistema atascado en bucle de BIOS/UEFI',
    category: 'firmware',
    description: 'El ordenador se reinicia continuamente en la pantalla de configuración de BIOS/UEFI y no puede cargar el sistema operativo.',
    diagnostics: [
      'Verificar el orden de arranque en BIOS/UEFI para asegurarse de que la unidad del SO esté en primer lugar.',
      'Verificar que la unidad del SO sea detectada por la BIOS/UEFI.',
      'Buscar mensajes de "fallo de arranque".',
    ],
    recommendations: [
      'Restablecer la configuración de BIOS/UEFI a sus valores predeterminados.',
      'Activar/desactivar el Arranque seguro o cambiar el modo de arranque (UEFI/Legacy).',
      'Usar un USB de arranque con medios de instalación del SO para acceder a las herramientas de reparación.',
    ],
    solutions: [
      'Este problema suele ser causado por una unidad de SO fallida o corrupta, o por una configuración de arranque incorrecta después de un cambio de hardware.',
      'Restablecer la BIOS y ejecutar la Reparación de inicio (Windows) o la Utilidad de discos (macOS) puede solucionar problemas del cargador de arranque.',
    ],
  },
  // Networks
  {
    id: 'net001',
    title: 'Wi-Fi se conecta pero no hay acceso a Internet',
    category: 'networks',
    description: 'El dispositivo está conectado a la red Wi-Fi, pero las páginas web no se cargan y las aplicaciones de Internet no funcionan.',
    diagnostics: [
      'Verificar si otros dispositivos en la misma red tienen acceso a Internet.',
      'Reiniciar el ordenador y el router/módem.',
      'Ejecutar el Solucionador de problemas de red de Windows o el Diagnóstico inalámbrico de macOS.',
      'Hacer ping a una dirección fiable como 8.8.8.8 (DNS de Google) en el símbolo del sistema/terminal.',
    ],
    recommendations: [
      'Vaciar la caché de DNS: `ipconfig /flushdns` (Windows) o `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (macOS).',
      'Restablecer la pila TCP/IP: `netsh int ip reset` (Windows).',
      'Actualizar los controladores del adaptador de red.',
    ],
    solutions: [
      'Un simple reinicio del router y del ordenador resuelve este problema más del 80% de las veces.',
      'Una configuración DNS incorrecta es una causa común. Cambiar a un DNS público como Google (8.8.8.8, 8.8.4.4) o Cloudflare (1.1.1.1) puede solucionarlo.',
    ],
  },
  // Printers & Plotters
  {
    id: 'prn001',
    title: 'La impresora está sin conexión o no responde',
    category: 'printers-plotters',
    description: 'El ordenador muestra la impresora como "Sin conexión" aunque esté encendida y conectada.',
    diagnostics: [
      'Verificar que la impresora esté encendida y no en estado de error (p. ej., luces parpadeando).',
      'Verificar la conexión USB o de red.',
      'Asegurarse de que la impresora esté configurada como la impresora predeterminada.',
      'Verificar la cola de impresión en busca de trabajos atascados y borrarlos.',
    ],
    recommendations: [
      'Reiniciar el servicio de Cola de impresión (en services.msc en Windows).',
      'Quitar y volver a agregar la impresora en la configuración del sistema.',
      'Desinstalar y reinstalar los controladores de la impresora desde el sitio web oficial del fabricante.',
    ],
    solutions: [
      'Borrar un documento atascado de la cola de impresión y reiniciar el servicio de Cola de impresión es una solución muy común.',
      'Para impresoras de red, asegurarse de que la impresora tenga una dirección IP estable y esté en la misma subred que el ordenador.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Jose Vazquez',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
    comment: 'Excelente servicio y atención. Resolvieron mi problema rápidamente y con mucha profesionalidad. ¡Muy recomendados!',
  },
  {
    name: 'Maria Garcia',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
    comment: 'El equipo de JarmaComputers es increíble. Me ayudaron a recuperar datos que creía perdidos. ¡Gracias por todo!',
  },
  {
    name: 'Carlos Rodriguez',
    avatar: 'https://placehold.co/100x100.png',
    rating: 4,
    comment: 'Buen servicio técnico. Fueron amables y me explicaron el problema en detalle. El precio fue razonable.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'lo-ultimo-en-ia',
    title: 'Lo Último en IA',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai chip',
    source: 'TechDaily',
    category: 'Inteligencia Artificial',
  },
  {
    slug: 'tendencias-en-tecnologia',
    title: 'Tendencias en tecnología',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'google search phone',
    source: 'InnovateToday',
    category: 'Tecnología',
  },
];
